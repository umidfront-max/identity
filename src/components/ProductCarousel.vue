<script setup>
/* Mahsulot tarkibi kartochkalari karuseli (Face-ID platformasi kabi).
   Tab qatoridan farqi: elementlar surilib almashadi, nomlar pastda ko'rinadi. */
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { prefersReducedMotion } from '@/composables/useMotion.js'

const props = defineProps({
  items: { type: Array, required: true },
  interval: { type: Number, default: 7000 }
})

const i = ref(0)
const dir = ref(1)
const paused = ref(false)
let timer = null

const total = computed(() => props.items.length)
const current = computed(() => props.items[i.value] || {})

function go (n) { dir.value = n >= i.value ? 1 : -1; i.value = (n + total.value) % total.value }
function next () { dir.value = 1; i.value = (i.value + 1) % total.value }
function prev () { dir.value = -1; i.value = (i.value - 1 + total.value) % total.value }

onMounted(() => {
  if (!prefersReducedMotion() && props.interval > 0) {
    timer = setInterval(() => { if (!paused.value) next() }, props.interval)
  }
})
onBeforeUnmount(() => timer && clearInterval(timer))

function onKey (e) {
  if (e.key === 'ArrowRight') { next(); e.preventDefault() }
  if (e.key === 'ArrowLeft') { prev(); e.preventDefault() }
}

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
    class="pcar" tabindex="0" role="group" aria-roledescription="carousel"
    @mouseenter="paused = true" @mouseleave="paused = false"
    @focusin="paused = true" @focusout="paused = false"
    @keydown="onKey"
    @touchstart.passive="onStart" @touchend.passive="onEnd">

    <div class="pcar__stage">
      <Transition :name="dir === 1 ? 'pc-next' : 'pc-prev'">
        <article class="pcar__card" :key="i">
          <span class="pcar__n">{{ String(i + 1).padStart(2, '0') }} / {{ String(total).padStart(2, '0') }}</span>
          <h3>{{ current.t }}</h3>
          <p>{{ current.d }}</p>
          <ul v-if="current.list">
            <li v-for="(it, k) in current.list" :key="k">
              <span class="dot" aria-hidden="true"></span>{{ it }}
            </li>
          </ul>
        </article>
      </Transition>

      <button class="pcar__nav pcar__nav--prev" type="button" aria-label="←" @click="prev">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 2 4 8l6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button class="pcar__nav pcar__nav--next" type="button" aria-label="→" @click="next">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>

    <div class="pcar__tabs" role="tablist">
      <button
        v-for="(it, n) in items" :key="n"
        class="pcar__tab" :class="{ 'is-on': n === i }"
        type="button" role="tab" :aria-selected="n === i"
        @click="go(n)">{{ it.t }}</button>
    </div>
  </div>
</template>

<style scoped>
.pcar{position:relative;outline:none}
.pcar:focus-visible{outline:2px solid var(--red);outline-offset:6px;border-radius:var(--r-xl)}

.pcar__stage{position:relative;min-height:230px}
.pcar__card{
  position:relative;padding:34px 38px;border-radius:var(--r-xl);
  background:linear-gradient(158deg,#FFF,#F4F6FC);
  border:1px solid var(--line);box-shadow:0 26px 60px -38px rgba(7,11,30,.35);
}
.pcar__card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:3px 0 0 3px;background:var(--red)}
.pcar__n{
  display:block;font-family:var(--font-mono);font-size:11.5px;letter-spacing:.14em;
  color:var(--red);margin-bottom:12px;
}
.pcar__card h3{font-size:clamp(19px,2vw,24px);letter-spacing:-.02em;margin-bottom:12px}
.pcar__card p{margin:0;font-size:16.5px;line-height:1.6;color:var(--muted);max-width:76ch}
.pcar__card ul{display:grid;gap:10px;margin-top:18px}
.pcar__card li{display:flex;gap:12px;align-items:flex-start;font-size:15px;color:var(--muted);line-height:1.5}
.dot{
  flex:none;width:6px;height:6px;border-radius:50%;background:var(--red);margin-top:8px;
  box-shadow:0 0 0 4px rgba(226,59,51,.13);
}

.pcar__nav{
  position:absolute;top:50%;margin-top:-21px;width:42px;height:42px;
  display:grid;place-items:center;cursor:pointer;
  border:1px solid var(--line-2);border-radius:50%;background:var(--paper);color:var(--ink);
  box-shadow:var(--e1);opacity:0;transition:opacity .3s var(--ease),background .25s,color .25s;
}
.pcar:hover .pcar__nav,.pcar:focus-within .pcar__nav{opacity:1}
.pcar__nav:hover{background:var(--red);border-color:var(--red);color:#fff}
.pcar__nav svg{width:15px}
.pcar__nav--prev{left:-21px}
.pcar__nav--next{right:-21px}

.pcar__tabs{display:flex;gap:6px;flex-wrap:wrap;margin-top:22px}
.pcar__tab{
  border:1px solid var(--line);background:var(--paper);cursor:pointer;
  padding:9px 16px;border-radius:999px;font-size:13.5px;font-weight:700;color:var(--muted);
  transition:color .3s,background .3s var(--ease),border-color .3s;
}
.pcar__tab.is-on{background:var(--ink);border-color:var(--ink);color:#fff}
.pcar__tab:not(.is-on):hover{color:var(--ink);border-color:var(--line-2)}

.pc-next-enter-active,.pc-next-leave-active,
.pc-prev-enter-active,.pc-prev-leave-active{
  transition:opacity .32s var(--ease),transform .4s var(--ease-out);
}
.pc-next-leave-active,.pc-prev-leave-active{position:absolute;inset:0}
.pc-next-enter-from{opacity:0;transform:translateX(5%)}
.pc-next-leave-to{opacity:0;transform:translateX(-4%)}
.pc-prev-enter-from{opacity:0;transform:translateX(-5%)}
.pc-prev-leave-to{opacity:0;transform:translateX(4%)}

@media(max-width:900px){
  .pcar__card{padding:26px 22px}
  .pcar__nav{opacity:1;width:38px;height:38px;margin-top:-19px}
  .pcar__nav--prev{left:-6px}
  .pcar__nav--next{right:-6px}
}
@media (prefers-reduced-motion:reduce){
  .pc-next-enter-active,.pc-next-leave-active,
  .pc-prev-enter-active,.pc-prev-leave-active{transition:none}
}
</style>
