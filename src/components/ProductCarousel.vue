<script setup>
/* Mahsulot tarkibi karuseli (Face-ID platformasi kabi).
   Avtomatik aylanadi; kursor ustida yoki fokusda to'xtaydi. */
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { prefersReducedMotion } from '@/composables/useMotion.js'

const props = defineProps({
  items: { type: Array, required: true },
  interval: { type: Number, default: 6000 }
})

const i = ref(0)
const dir = ref(1)
const paused = ref(false)
const reduced = ref(false)
let timer = null

const total = computed(() => props.items.length)
const current = computed(() => props.items[i.value] || {})

function go (n) { dir.value = n >= i.value ? 1 : -1; i.value = (n + total.value) % total.value }
function next () { dir.value = 1; i.value = (i.value + 1) % total.value }
function prev () { dir.value = -1; i.value = (i.value - 1 + total.value) % total.value }

onMounted(() => {
  reduced.value = prefersReducedMotion()
  if (!reduced.value && props.interval > 0) {
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
      <span class="pcar__glow" aria-hidden="true"></span>

      <!-- Transition ishlatilmaydi: kontent har doim joyida turadi, animatsiya
           faqat bezak. Kalit o'zgarganda element yangilanadi va o'zi jonlanadi. -->
      <article class="pcar__card">
        <div class="pcar__slide" :key="i" :class="dir === 1 ? 'is-next' : 'is-prev'">
          <span class="pcar__idx" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="pcar__body">
            <h3>{{ current.t }}</h3>
            <p>{{ current.d }}</p>
            <ul v-if="current.list">
              <li v-for="(it, k) in current.list" :key="k">
                <span class="dot" aria-hidden="true"></span>{{ it }}
              </li>
            </ul>
          </div>
        </div>
      </article>

      <button class="pcar__nav pcar__nav--prev" type="button" aria-label="Oldingi" @click="prev">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 2 4 8l6 6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button class="pcar__nav pcar__nav--next" type="button" aria-label="Keyingi" @click="next">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 2l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>

    <!-- avtoplay progressi: har slaydda qaytadan to'ladi, pauzada to'xtaydi -->
    <div class="pcar__track" aria-hidden="true">
      <span
        v-if="!reduced" class="pcar__bar" :key="i"
        :style="{ animationDuration: interval + 'ms', animationPlayState: paused ? 'paused' : 'running' }"></span>
    </div>

    <div class="pcar__foot">
      <div class="pcar__dots" role="tablist">
        <button
          v-for="(it, n) in items" :key="n"
          class="pcar__dot" :class="{ 'is-on': n === i }"
          type="button" role="tab" :aria-selected="n === i" :aria-label="it.t"
          @click="go(n)"></button>
      </div>
      <span class="pcar__count">{{ String(i + 1).padStart(2, '0') }} <i>/</i> {{ String(total).padStart(2, '0') }}</span>
    </div>
  </div>
</template>

<style scoped>
.pcar{position:relative;outline:none}
.pcar:focus-visible{outline:2px solid var(--red);outline-offset:8px;border-radius:var(--r-xl)}

.pcar__stage{position:relative;min-height:250px;isolation:isolate}
/* kartochka ortidagi yumshoq rangli yorug'lik */
.pcar__glow{
  position:absolute;inset:14% 6% 6%;z-index:-1;border-radius:50%;pointer-events:none;
  background:radial-gradient(60% 60% at 30% 40%,rgba(46,61,143,.16),transparent 70%),
             radial-gradient(50% 50% at 80% 60%,rgba(226,59,51,.1),transparent 70%);
  filter:blur(34px);
}

.pcar__card{
  position:relative;
  padding:38px 44px;border-radius:var(--r-xl);overflow:hidden;
  background:linear-gradient(152deg,#FFF 0%,#F7F9FD 58%,#EFF3FB 100%);
  border:1px solid var(--line);
  box-shadow:inset 0 1px 0 #fff,0 30px 66px -40px rgba(7,11,30,.4);
}
/* chapdagi gradient rail */
.pcar__card::before{
  content:'';position:absolute;left:0;top:0;bottom:0;width:4px;
  background:linear-gradient(180deg,var(--red),rgba(226,59,51,.15));
}
.pcar__idx{
  flex:none;font-family:var(--font-display);font-size:clamp(38px,4vw,54px);font-weight:500;
  line-height:.9;letter-spacing:-.04em;
  background:linear-gradient(160deg,var(--ink),var(--blue));
  -webkit-background-clip:text;background-clip:text;color:transparent;
  opacity:.22;
}
.pcar__slide{display:flex;gap:28px;align-items:flex-start;animation:pcIn .42s var(--ease-out) both}
.pcar__slide.is-prev{animation-name:pcInPrev}
@keyframes pcIn{from{opacity:0;transform:translateX(22px)}to{opacity:1;transform:none}}
@keyframes pcInPrev{from{opacity:0;transform:translateX(-22px)}to{opacity:1;transform:none}}
.pcar__body{min-width:0}
.pcar__card h3{font-size:clamp(20px,2.1vw,25px);letter-spacing:-.025em;margin-bottom:12px}
.pcar__card p{margin:0;font-size:16.5px;line-height:1.6;color:var(--muted);max-width:74ch}
.pcar__card ul{display:grid;gap:10px;margin-top:20px}
.pcar__card li{display:flex;gap:12px;align-items:flex-start;font-size:15px;color:var(--muted);line-height:1.5}
.dot{
  flex:none;width:6px;height:6px;border-radius:50%;background:var(--red);margin-top:8px;
  box-shadow:0 0 0 4px rgba(226,59,51,.13);
}

/* --- strelkalar --- */
.pcar__nav{
  position:absolute;top:50%;margin-top:-23px;width:46px;height:46px;
  display:grid;place-items:center;cursor:pointer;
  border:1px solid var(--line-2);border-radius:50%;background:var(--paper);color:var(--ink);
  box-shadow:0 10px 24px -14px rgba(7,11,30,.5);
  transition:background .28s,color .28s,border-color .28s,transform .28s var(--ease);
}
.pcar__nav:hover{background:var(--ink);border-color:var(--ink);color:#fff;transform:scale(1.06)}
.pcar__nav:active{transform:scale(.96)}
.pcar__nav svg{width:15px}
.pcar__nav--prev{left:-23px}
.pcar__nav--next{right:-23px}

/* --- avtoplay progressi --- */
.pcar__track{
  position:relative;height:2px;margin-top:26px;border-radius:2px;
  background:var(--line);overflow:hidden;
}
.pcar__bar{
  display:block;height:100%;border-radius:2px;transform-origin:left;
  background:linear-gradient(90deg,var(--blue),var(--red));
  animation:pcFill linear forwards;
}
@keyframes pcFill{from{transform:scaleX(0)}to{transform:scaleX(1)}}

/* --- nuqtalar va hisoblagich --- */
.pcar__foot{display:flex;align-items:center;justify-content:space-between;gap:24px;margin-top:16px}
.pcar__dots{display:flex;gap:8px}
.pcar__dot{
  width:9px;height:9px;padding:0;border:0;border-radius:50%;cursor:pointer;
  background:var(--line-2);
  transition:background .3s,width .35s var(--ease);
}
.pcar__dot:hover{background:var(--muted-2)}
.pcar__dot.is-on{background:var(--red);width:28px;border-radius:999px}
.pcar__count{
  font-family:var(--font-mono);font-size:12px;letter-spacing:.1em;color:var(--muted-2);flex:none;
}
.pcar__count i{font-style:normal;opacity:.5;margin:0 2px}

@media(max-width:900px){
  .pcar__card{padding:26px 22px;gap:16px}
  .pcar__idx{font-size:32px}
  .pcar__nav{width:40px;height:40px;margin-top:-20px}
  .pcar__nav--prev{left:-8px}
  .pcar__nav--next{right:-8px}
}
@media(max-width:600px){
  .pcar__card{flex-direction:column;gap:6px}
}
@media (prefers-reduced-motion:reduce){
  .pcar__slide,.pcar__bar{animation:none}
}
</style>
