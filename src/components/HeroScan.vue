<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { prefersReducedMotion } from '@/composables/useMotion.js'

const { t } = useLang()
const box = ref(null)

/* Kursorga qarab yengil parallaks — kartani "tirik" qiladi */
function onMove (e) {
  if (!box.value || prefersReducedMotion()) return
  const r = box.value.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width - 0.5
  const y = (e.clientY - r.top) / r.height - 0.5
  box.value.style.setProperty('--px', (x * 16).toFixed(2) + 'px')
  box.value.style.setProperty('--py', (y * 16).toFixed(2) + 'px')
  box.value.style.setProperty('--rx', (-y * 7).toFixed(2) + 'deg')
  box.value.style.setProperty('--ry', (x * 9).toFixed(2) + 'deg')
}
function onLeave () {
  if (!box.value) return
  box.value.style.setProperty('--px', '0px')
  box.value.style.setProperty('--py', '0px')
  box.value.style.setProperty('--rx', '0deg')
  box.value.style.setProperty('--ry', '0deg')
}

onMounted(() => {
  window.addEventListener('mousemove', onMove)
  document.addEventListener('mouseleave', onLeave)
})
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
  document.removeEventListener('mouseleave', onLeave)
})
</script>

<template>
  <div class="scan" ref="box" @mouseleave="onLeave">
    <div class="scan__halo" aria-hidden="true"></div>

    <div class="scan__card">
      <svg viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#E23B33" stop-opacity="0"/>
            <stop offset=".65" stop-color="#E23B33" stop-opacity=".26"/>
            <stop offset="1" stop-color="#E23B33" stop-opacity=".9"/>
          </linearGradient>
          <clipPath id="cardClip"><rect x="70" y="52" width="200" height="196" rx="18"/></clipPath>
        </defs>

        <!-- karta korpusi -->
        <rect x="70" y="52" width="200" height="196" rx="18" fill="#0D1430" stroke="#2E3D8F" stroke-width="1.2"/>
        <rect class="s-frame" x="70" y="52" width="200" height="196" rx="18" fill="none" stroke="#5B6FD6" stroke-width="1.6"/>

        <!-- yuz to'ri -->
        <g class="s-mesh" stroke="#8E9BE4" stroke-width=".9" opacity=".55">
          <path d="M170 92c26 0 42 20 42 46s-19 52-42 52-42-26-42-52 16-46 42-52z"/>
          <path d="M136 128h68M140 148h60M146 168h48M170 94v96"/>
          <path d="M150 116c8-6 14-6 20 0M190 116c-8-6-14-6-20 0"/>
        </g>

        <!-- landmark nuqtalari, ketma-ket "qulflanadi" -->
        <g class="s-dots" fill="#E23B33">
          <circle cx="152" cy="128" r="3"/><circle cx="188" cy="128" r="3"/>
          <circle cx="170" cy="150" r="3"/><circle cx="152" cy="172" r="3"/>
          <circle cx="188" cy="172" r="3"/><circle cx="170" cy="182" r="3"/>
        </g>

        <!-- skaner nuri -->
        <g clip-path="url(#cardClip)">
          <rect class="s-beam" x="70" y="0" width="200" height="72" fill="url(#beam)"/>
          <line class="s-line" x1="70" x2="270" y1="0" y2="0" stroke="#E23B33" stroke-width="1.6"/>
        </g>

        <!-- burchak belgilari -->
        <g class="s-corners" stroke="#E23B33" stroke-width="2" stroke-linecap="round">
          <path d="M92 74v-8h8M248 74v-8h-8M92 226v8h8M248 226v8h-8"/>
        </g>

        <!-- pastdagi ma'lumot chiziqlari -->
        <g class="s-bars" fill="#5B6FD6" opacity=".5">
          <rect x="92" y="210" width="70" height="4" rx="2"/>
          <rect x="92" y="220" width="44" height="4" rx="2"/>
          <rect x="200" y="210" width="48" height="14" rx="3" opacity=".35"/>
        </g>
      </svg>

      <!-- natija belgisi -->
      <div class="scan__ok">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 12.6l5.2 5.2L20 7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{{ t('art.ok') }}</span>
      </div>
    </div>

    <!-- suzuvchi ma'lumot paneli -->
    <div class="scan__hud">
      <div class="scan__row"><i>1:N</i><b>{{ t('art.scan') }}</b></div>
      <div class="scan__row"><i>LIVE</i><b>liveness · 0.98</b></div>
      <div class="scan__row"><i>SHLD</i><b>{{ t('art.blocked') }}</b></div>
    </div>

    <!-- orbita halqalari -->
    <div class="scan__rings" aria-hidden="true"><span></span><span></span><span></span></div>
  </div>
</template>

<style scoped>
.scan{
  position:relative;
  perspective:1200px;
  display:grid;place-items:center;
  min-height:420px;
}
.scan__card{
  position:relative;width:min(400px,100%);
  transform:translate3d(var(--px,0),var(--py,0),0) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));
  transition:transform .5s var(--ease-out);
  filter:drop-shadow(0 40px 60px rgba(0,0,0,.55));
  animation:floatCard 7s ease-in-out infinite;
}
@keyframes floatCard{0%,100%{translate:0 0}50%{translate:0 -10px}}

.scan__halo{
  position:absolute;width:520px;height:520px;border-radius:50%;
  background:radial-gradient(circle,rgba(91,111,214,.35),transparent 62%);
  filter:blur(20px);animation:pulseHalo 6s ease-in-out infinite;
}
@keyframes pulseHalo{0%,100%{opacity:.6;scale:1}50%{opacity:1;scale:1.08}}

/* --- SVG animatsiyalari --- */
.s-line{animation:sweep 3.6s var(--ease) infinite}
.s-beam{animation:sweepBeam 3.6s var(--ease) infinite}
@keyframes sweep{0%{transform:translateY(56px);opacity:0}
  12%{opacity:1}88%{opacity:1}100%{transform:translateY(244px);opacity:0}}
@keyframes sweepBeam{0%{transform:translateY(-16px);opacity:0}
  12%{opacity:1}88%{opacity:1}100%{transform:translateY(172px);opacity:0}}

.s-dots circle{opacity:0;transform-origin:center;animation:lock 3.6s var(--ease) infinite}
.s-dots circle:nth-child(1){animation-delay:.5s}
.s-dots circle:nth-child(2){animation-delay:.62s}
.s-dots circle:nth-child(3){animation-delay:.9s}
.s-dots circle:nth-child(4){animation-delay:1.2s}
.s-dots circle:nth-child(5){animation-delay:1.32s}
.s-dots circle:nth-child(6){animation-delay:1.5s}
@keyframes lock{0%,10%{opacity:0;scale:2.4}22%{opacity:1;scale:1}
  80%{opacity:1;scale:1}100%{opacity:0;scale:1}}

.s-mesh{animation:meshIn 3.6s var(--ease) infinite}
@keyframes meshIn{0%{opacity:.15}30%{opacity:.7}100%{opacity:.25}}

.s-corners path{
  stroke-dasharray:16;stroke-dashoffset:16;
  animation:drawCorner .7s var(--ease-out) .3s forwards;
}
@keyframes drawCorner{to{stroke-dashoffset:0}}

.s-frame{stroke-dasharray:790;stroke-dashoffset:790;animation:drawFrame 1.6s var(--ease-out) .1s forwards}
@keyframes drawFrame{to{stroke-dashoffset:0}}

.s-bars rect{transform-origin:left;animation:barIn .6s var(--ease-out) both}
.s-bars rect:nth-child(2){animation-delay:.75s}
.s-bars rect:nth-child(3){animation-delay:.9s}
@keyframes barIn{from{scale:0 1;opacity:0}to{scale:1 1;opacity:1}}

/* --- natija belgisi --- */
.scan__ok{
  position:absolute;right:-8px;bottom:26px;
  display:flex;align-items:center;gap:9px;
  padding:10px 16px;border-radius:999px;
  background:rgba(7,11,30,.9);border:1px solid rgba(226,59,51,.5);
  color:#fff;font-size:13px;font-weight:700;letter-spacing:-.01em;
  box-shadow:0 18px 34px -18px rgba(0,0,0,.9);
  animation:okIn 3.6s var(--ease) infinite;
}
.scan__ok svg{width:15px;color:var(--red)}
@keyframes okIn{0%,55%{opacity:0;transform:translateY(10px) scale(.92)}
  68%{opacity:1;transform:translateY(0) scale(1)}92%{opacity:1}100%{opacity:0}}

/* --- HUD paneli --- */
.scan__hud{
  position:absolute;left:-6px;top:18px;display:grid;gap:7px;
  padding:14px 16px;border-radius:16px;
  background:rgba(13,20,48,.82);border:1px solid rgba(91,111,214,.35);
  backdrop-filter:blur(10px);
  box-shadow:0 24px 50px -26px rgba(0,0,0,.9);
  animation:hudIn .8s var(--ease-out) .5s both, floatHud 8s ease-in-out 1.3s infinite;
}
.scan__row{display:flex;align-items:center;gap:10px;font-size:12px;color:#fff}
.scan__row i{
  font-style:normal;font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;
  color:var(--red-soft);min-width:34px;
}
.scan__row b{font-weight:600;opacity:.92}
@keyframes hudIn{from{opacity:0;transform:translateX(-14px)}to{opacity:1;transform:none}}
@keyframes floatHud{0%,100%{translate:0 0}50%{translate:0 8px}}

/* --- orbita halqalari --- */
.scan__rings{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none}
.scan__rings span{
  position:absolute;border-radius:50%;border:1px solid rgba(142,155,228,.16);
  animation:ringPulse 5s var(--ease-out) infinite;
}
.scan__rings span:nth-child(1){width:340px;height:340px}
.scan__rings span:nth-child(2){width:440px;height:440px;animation-delay:1.2s}
.scan__rings span:nth-child(3){width:540px;height:540px;animation-delay:2.4s}
@keyframes ringPulse{0%{opacity:0;scale:.85}25%{opacity:.9}100%{opacity:0;scale:1.12}}

@media(max-width:900px){
  .scan{min-height:340px}
  .scan__hud{left:-4px;top:6px;padding:11px 13px}
  .scan__rings span:nth-child(3){display:none}
}
@media (prefers-reduced-motion:reduce){
  .scan__card,.scan__halo,.s-line,.s-beam,.s-dots circle,.s-mesh,.scan__ok,.scan__hud,.scan__rings span{animation:none}
  .s-dots circle,.scan__ok{opacity:1}
}
</style>
