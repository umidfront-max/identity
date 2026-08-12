<script setup>
/* "Birinchi qadam" takliflari — avtomatik aylanuvchi slayder */
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { prefersReducedMotion } from '@/composables/useMotion.js'

const { t } = useLang()
const i = ref(0)
const paused = ref(false)
let timer = null

const slides = computed(() => [1, 2, 3].map(n => ({
  badge: t(`home.slide${n}.badge`),
  title: t(`home.slide${n}.title`),
  text: t(`home.slide${n}.text`)
})))

function go (n) { i.value = (n + slides.value.length) % slides.value.length }
function next () { go(i.value + 1) }

onMounted(() => {
  if (prefersReducedMotion()) return
  timer = setInterval(() => { if (!paused.value) next() }, 6000)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="slider" @mouseenter="paused = true" @mouseleave="paused = false">
    <div class="slider__stage">
      <TransitionGroup name="slide">
        <article v-for="(s, n) in slides" :key="s.title" v-show="n === i" class="slide">
          <span class="slide__badge">{{ s.badge }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
          <RouterLink :to="{ path: '/contacts', hash: '#lead' }" class="arrow-link">{{ t('cta.pilot') }} <i>&rarr;</i></RouterLink>
        </article>
      </TransitionGroup>
    </div>

    <div class="slider__nav">
      <button
        v-for="(s, n) in slides" :key="'d' + n"
        class="dot" :class="{ 'is-on': n === i }"
        :aria-label="s.badge" @click="go(n)">
        <span :style="{ animationPlayState: (n === i && !paused) ? 'running' : 'paused' }"></span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.slider{position:relative}
.slider__stage{position:relative;min-height:230px}
.slide{
  position:absolute;inset:0;
  padding:34px 36px;border-radius:var(--r-lg);
  background:var(--paper);border:1px solid var(--line);box-shadow:var(--e2);
}
.slide__badge{
  display:inline-block;font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--red);margin-bottom:14px;
}
.slide h3{font-size:clamp(20px,2.3vw,26px);margin-bottom:12px}
.slide p{color:var(--muted);font-size:15.5px;margin-bottom:18px}
.slide-enter-active,.slide-leave-active{transition:opacity .5s var(--ease-out),transform .5s var(--ease-out)}
.slide-enter-from{opacity:0;transform:translateY(18px) scale(.985)}
.slide-leave-to{opacity:0;transform:translateY(-14px)}

.slider__nav{display:flex;gap:10px;margin-top:22px}
.dot{
  width:56px;height:4px;border:0;padding:0;border-radius:99px;background:var(--line-2);
  cursor:pointer;overflow:hidden;position:relative;
}
.dot span{position:absolute;inset:0;background:var(--red);transform-origin:left;transform:scaleX(0)}
.dot.is-on span{animation:fill 6s linear forwards}
@keyframes fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@media(max-width:620px){.slide{padding:26px 22px}.slider__stage{min-height:290px}}
</style>
