<script setup>
/* Rasmli karusel: strelkalar, nuqtalar, klaviatura va sensorli surish.
   Yashirin slaydlar display:none holatida — brauzer ularni oldindan yuklamaydi. */
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { IMAGES } from '@/data/images.js'
import { prefersReducedMotion } from '@/composables/useMotion.js'

const props = defineProps({
  slides: { type: Array, required: true },
  interval: { type: Number, default: 6000 }
})

const i = ref(0)
const paused = ref(false)
const dir = ref(1)
const root = ref(null)
let timer = null

const total = computed(() => props.slides.length)
const current = computed(() => props.slides[i.value] || {})

function go (n) {
  dir.value = n > i.value || (i.value === total.value - 1 && n === 0) ? 1 : -1
  i.value = (n + total.value) % total.value
}
function next () { dir.value = 1; i.value = (i.value + 1) % total.value }
function prev () { dir.value = -1; i.value = (i.value - 1 + total.value) % total.value }

/* avtomatik aylanish — kursor ustida yoki reduced-motion'da to'xtaydi */
function tick () {
  if (!paused.value) next()
}
onMounted(() => {
  if (!prefersReducedMotion() && props.interval > 0) timer = setInterval(tick, props.interval)
})
onBeforeUnmount(() => timer && clearInterval(timer))

function onKey (e) {
  if (e.key === 'ArrowRight') { next(); e.preventDefault() }
  if (e.key === 'ArrowLeft') { prev(); e.preventDefault() }
}

/* sensorli ekranda surish */
let x0 = null
function onStart (e) { x0 = e.changedTouches[0].clientX }
function onEnd (e) {
  if (x0 === null) return
  const dx = e.changedTouches[0].clientX - x0
  if (Math.abs(dx) > 45) { dx < 0 ? next() : prev() }
  x0 = null
}
</script>

<template>
  <div
    class="car" ref="root" tabindex="0"
    role="group" aria-roledescription="carousel"
    @mouseenter="paused = true" @mouseleave="paused = false"
    @focusin="paused = true" @focusout="paused = false"
    @keydown="onKey"
    @touchstart.passive="onStart" @touchend.passive="onEnd">

    <div class="car__stage">
      <!-- mode yo'q: chiquvchi va kiruvchi kadr ustma-ust turadi, oraliqda bo'shliq bo'lmaydi -->
      <Transition :name="dir === 1 ? 'sl-next' : 'sl-prev'">
        <img
          :key="i"
          :src="IMAGES[current.img]" :alt="current.t"
          class="car__img" :loading="i === 0 ? 'eager' : 'lazy'" decoding="async">
      </Transition>

      <button class="car__nav car__nav--prev" type="button" aria-label="←" @click="prev">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 2 4 8l6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button class="car__nav car__nav--next" type="button" aria-label="→" @click="next">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>

      <span class="car__count">{{ String(i + 1).padStart(2, '0') }} / {{ String(total).padStart(2, '0') }}</span>
    </div>

    <div class="car__foot">
      <Transition name="cap" mode="out-in">
        <div class="car__cap" :key="i">
          <b>{{ current.t }}</b>
          <span v-if="current.d">{{ current.d }}</span>
        </div>
      </Transition>

      <div class="car__dots" role="tablist">
        <button
          v-for="(s, n) in slides" :key="n"
          class="car__dot" :class="{ 'is-on': n === i }"
          type="button" role="tab" :aria-selected="n === i" :aria-label="s.t"
          @click="go(n)"></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.car{position:relative;outline:none}
.car:focus-visible{outline:2px solid var(--red);outline-offset:6px;border-radius:var(--r-xl)}

.car__stage{
  position:relative;overflow:hidden;border-radius:var(--r-xl);
  aspect-ratio:16/9;background:var(--ink-2);
  border:1px solid var(--line);
  box-shadow:0 34px 70px -38px rgba(7,11,30,.5);
}
/* absolute — ikkala kadr bir vaqtda turishi va bir-biriga erishi uchun */
.car__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}

/* --- strelkalar --- */
.car__nav{
  position:absolute;top:50%;margin-top:-23px;width:46px;height:46px;
  display:grid;place-items:center;cursor:pointer;
  border:1px solid rgba(255,255,255,.28);border-radius:50%;
  background:rgba(7,11,30,.5);color:#fff;
  backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
  opacity:0;transform:scale(.9);
  transition:opacity .3s var(--ease),transform .3s var(--ease),background .25s;
}
.car:hover .car__nav,.car:focus-within .car__nav{opacity:1;transform:none}
.car__nav:hover{background:var(--red);border-color:var(--red)}
.car__nav svg{width:16px}
.car__nav--prev{left:16px}
.car__nav--next{right:16px}

.car__count{
  position:absolute;right:16px;bottom:16px;padding:6px 12px;border-radius:999px;
  background:rgba(7,11,30,.55);color:#fff;
  backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
  font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;
}

/* --- izoh va nuqtalar --- */
.car__foot{
  display:flex;align-items:flex-start;justify-content:space-between;gap:32px;
  margin-top:20px;
}
.car__cap{min-height:52px;max-width:62ch}
.car__cap b{display:block;font-size:16.5px;margin-bottom:5px}
.car__cap span{font-size:14.5px;color:var(--muted);line-height:1.55}

.car__dots{display:flex;gap:8px;flex:none;padding-top:6px}
.car__dot{
  width:9px;height:9px;padding:0;border:0;border-radius:50%;cursor:pointer;
  background:var(--line-2);transition:background .3s,transform .3s var(--ease),width .3s var(--ease);
}
.car__dot:hover{background:var(--muted-2)}
.car__dot.is-on{background:var(--red);width:26px;border-radius:999px}

/* --- o'tishlar --- */
.sl-next-enter-active,.sl-next-leave-active,
.sl-prev-enter-active,.sl-prev-leave-active{
  transition:opacity .38s var(--ease),transform .45s var(--ease-out);
}
.sl-next-enter-from{opacity:0;transform:translateX(5%) scale(1.03)}
.sl-next-leave-to{opacity:0;transform:translateX(-3%)}
.sl-prev-enter-from{opacity:0;transform:translateX(-5%) scale(1.03)}
.sl-prev-leave-to{opacity:0;transform:translateX(3%)}
/* chiqayotgan kadr kiruvchisining ostida qolsin */
.sl-next-leave-active,.sl-prev-leave-active{z-index:0}
.sl-next-enter-active,.sl-prev-enter-active{z-index:1}

.cap-enter-active,.cap-leave-active{transition:opacity .25s var(--ease),transform .25s var(--ease)}
.cap-enter-from{opacity:0;transform:translateY(6px)}
.cap-leave-to{opacity:0}

@media(max-width:760px){
  .car__stage{aspect-ratio:4/3}
  .car__nav{opacity:1;transform:none;width:40px;height:40px;margin-top:-20px}
  .car__nav--prev{left:10px}
  .car__nav--next{right:10px}
  .car__foot{flex-direction:column;gap:16px}
  .car__cap{min-height:0}
}
@media (prefers-reduced-motion:reduce){
  .sl-next-enter-active,.sl-next-leave-active,
  .sl-prev-enter-active,.sl-prev-leave-active,
  .cap-enter-active,.cap-leave-active{transition:none}
}
</style>
