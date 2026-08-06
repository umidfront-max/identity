<script setup>
import { useLang } from '@/composables/useLang.js'

const { t } = useLang()
</script>

<template>
  <div class="collage">
    <div class="collage__shape" aria-hidden="true"></div>

    <!-- ============ panel A: skanerlash ============ -->
    <div class="collage__img collage__img--a">
      <svg class="collage__art" viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="idScanG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#E23B33" stop-opacity="0"/>
            <stop offset=".7" stop-color="#E23B33" stop-opacity=".28"/>
            <stop offset="1" stop-color="#E23B33" stop-opacity=".85"/>
          </linearGradient>
          <clipPath id="idScanClip"><rect x="74" y="60" width="192" height="176" rx="16"/></clipPath>
        </defs>

        <text x="28" y="40" fill="#8E9BE4" font-family="JetBrains Mono, monospace" font-size="11" letter-spacing="2.4">FACE ID · 1:N</text>

        <rect x="74" y="60" width="192" height="176" rx="16" fill="#0B1230" fill-opacity=".5" stroke="#FFFFFF" stroke-opacity=".10"/>

        <g clip-path="url(#idScanClip)">
          <!-- skaner maydoni: punktir ramka, o'lchov belgilari, nishon -->
          <rect x="104" y="88" width="132" height="120" rx="12" stroke="#5B6FD6" stroke-opacity=".45" stroke-width="1.6" stroke-dasharray="8 9"/>
          <g stroke="#5B6FD6" stroke-opacity=".55" stroke-width="1.8" stroke-linecap="round">
            <path d="M92 108v10M92 134v10M92 160v10M248 108v10M248 134v10M248 160v10"/>
          </g>
          <g stroke="#FFFFFF" stroke-opacity=".5" stroke-width="1.6" stroke-linecap="round">
            <path d="M170 138v18M161 147h18"/>
          </g>
          <g fill="#5B6FD6" fill-opacity=".55">
            <rect x="118" y="176" width="46" height="5" rx="2.5"/>
            <rect x="118" y="188" width="72" height="5" rx="2.5"/>
            <rect x="176" y="176" width="24" height="5" rx="2.5" fill="#E23B33" fill-opacity=".7"/>
          </g>
          <!-- skaner nuri -->
          <g class="hero-scan">
            <rect x="74" y="76" width="192" height="54" fill="url(#idScanG)"/>
            <rect x="74" y="130" width="192" height="2.6" fill="#E23B33"/>
          </g>
        </g>

        <!-- burchak qavslari -->
        <g stroke="#5B6FD6" stroke-width="3.4" stroke-linecap="round">
          <path d="M104 76H86a10 10 0 0 0-10 10v18"/>
          <path d="M236 76h18a10 10 0 0 1 10 10v18"/>
          <path d="M264 192v18a10 10 0 0 1-10 10h-18"/>
          <path d="M76 192v18a10 10 0 0 0 10 10h18"/>
        </g>

        <!-- natija paneli -->
        <rect x="28" y="252" width="284" height="30" rx="9" fill="#FFFFFF" fill-opacity=".07" stroke="#FFFFFF" stroke-opacity=".12"/>
        <circle cx="48" cy="267" r="8" fill="#1FA971"/>
        <path d="M44.5 267l2.6 2.6 4.6-5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <text x="66" y="272" fill="#fff" font-family="Manrope, sans-serif" font-size="12.5" font-weight="600">{{ t('art.ok') }}</text>
        <text x="292" y="272" text-anchor="end" fill="#8E9BE4" font-family="JetBrains Mono, monospace" font-size="12">99.8%</text>
      </svg>
    </div>

    <!-- ============ panel B: himoya qatlami ============ -->
    <div class="collage__img collage__img--b">
      <svg class="collage__art" viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <text x="26" y="34" fill="#8E9BE4" font-family="JetBrains Mono, monospace" font-size="11" letter-spacing="2.4">
          {{ t('art.shield').toUpperCase() }}
        </text>

        <!-- simlar -->
        <g stroke="#5B6FD6" stroke-opacity=".3" stroke-width="2" fill="none">
          <path d="M78 84h26v50h26M78 150h52M78 216h26v-50h26"/>
          <path d="M212 128h26v-14h20M212 172h20v46h26"/>
        </g>
        <g class="hero-flow" stroke="#5B6FD6" stroke-width="2.4" stroke-linecap="round" fill="none">
          <path d="M78 84h26v50h26M78 150h52M78 216h26v-50h26"/>
        </g>
        <g class="hero-flow hero-flow--out" stroke="#3FD79B" stroke-width="2.4" stroke-linecap="round" fill="none">
          <path d="M212 128h26v-14h20M212 172h20v46h26"/>
        </g>

        <!-- kirish kanallari: barmoq izi, yuz, parol -->
        <g>
          <rect x="26" y="58" width="52" height="52" rx="13" fill="#FFFFFF" fill-opacity=".06" stroke="#FFFFFF" stroke-opacity=".14"/>
          <g stroke="#5B6FD6" stroke-width="1.9" stroke-linecap="round" fill="none" transform="translate(52 84)">
            <path d="M-13 2a13 13 0 0 1 26 0v6"/><path d="M-8 3a8 8 0 0 1 16 0v9"/>
            <path d="M-3 3a3 3 0 0 1 6 0v13"/><path d="M-13 12v4M13 14v4"/>
          </g>
        </g>
        <g>
          <rect x="26" y="124" width="52" height="52" rx="13" fill="#FFFFFF" fill-opacity=".06" stroke="#FFFFFF" stroke-opacity=".14"/>
          <g stroke="#5B6FD6" stroke-width="1.9" stroke-linecap="round" fill="none" transform="translate(52 150)">
            <circle cx="0" cy="-5" r="8"/><path d="M-13 14c2-8 7-12 13-12s11 4 13 12"/>
          </g>
        </g>
        <g>
          <rect x="26" y="190" width="52" height="52" rx="13" fill="#FFFFFF" fill-opacity=".06" stroke="#FFFFFF" stroke-opacity=".14"/>
          <g transform="translate(52 216)">
            <g fill="#5B6FD6">
              <circle cx="-11" cy="-4" r="3"/><circle cx="-1" cy="-4" r="3"/><circle cx="9" cy="-4" r="3"/>
            </g>
            <rect x="-15" y="6" width="30" height="9" rx="4" fill="#5B6FD6" fill-opacity=".35"/>
          </g>
        </g>

        <!-- qalqon -->
        <g transform="translate(170 150)">
          <circle class="hero-pulse" r="44" stroke="#5B6FD6" stroke-width="1.6"/>
          <circle class="hero-pulse hero-pulse--2" r="44" stroke="#5B6FD6" stroke-width="1.6"/>
        </g>
        <path d="M170 96l40 14v32c0 27-16 47-40 56-24-9-40-29-40-56v-32z" fill="#141D45" stroke="#5B6FD6" stroke-width="2.6"/>
        <path d="M170 96l40 14v32c0 27-16 47-40 56z" fill="#FFFFFF" fill-opacity=".06"/>
        <path class="hero-check" d="M154 150l12 12 22-24" stroke="#3FD79B" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

        <!-- himoyalangan qurilmalar -->
        <g>
          <rect x="258" y="86" width="46" height="72" rx="10" fill="#0E1533" stroke="#5B6FD6" stroke-width="2"/>
          <rect x="264" y="94" width="34" height="56" rx="6" fill="#FFFFFF" fill-opacity=".05"/>
          <circle cx="281" cy="122" r="13" fill="#3FD79B" fill-opacity=".16" stroke="#3FD79B" stroke-width="1.6"/>
          <path class="hero-check--sm" d="M275 122l4.4 4.4 8-8.6" stroke="#3FD79B" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </g>
        <g>
          <rect x="238" y="192" width="76" height="52" rx="7" fill="#0E1533" stroke="#5B6FD6" stroke-width="2"/>
          <rect x="230" y="248" width="92" height="7" rx="3.5" fill="#5B6FD6" fill-opacity=".45"/>
          <circle cx="276" cy="218" r="14" fill="#3FD79B" fill-opacity=".16" stroke="#3FD79B" stroke-width="1.6"/>
          <path class="hero-check--sm2" d="M269.5 218l4.8 4.8 8.6-9.2" stroke="#3FD79B" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* ---------- 3D vizual panellar ---------- */
.collage{
  position:relative;min-height:470px;
  perspective:1500px;perspective-origin:60% 45%;
  transform-style:preserve-3d;
}
.collage__shape{
  position:absolute;right:4%;top:14%;width:60%;height:62%;border-radius:28px;
  background:linear-gradient(160deg,rgba(91,111,214,.26),rgba(91,111,214,.04));
  border:1px solid rgba(255,255,255,.06);
  transform:rotateY(-19deg) rotateX(7deg) rotateZ(-1deg) translateZ(-90px);
  transform-style:preserve-3d;
}
.collage__img{
  position:absolute;border-radius:22px;overflow:hidden;
  background:linear-gradient(158deg,rgba(24,34,86,.92),rgba(9,14,40,.94));
  border:1px solid rgba(255,255,255,.14);
  transform-style:preserve-3d;
  transition:transform .5s cubic-bezier(.2,.7,.3,1),box-shadow .5s;
  box-shadow:
    0 50px 90px -40px rgba(0,0,0,.95),
    0 20px 40px -20px rgba(0,0,0,.7),
    inset 0 1px 0 rgba(255,255,255,.16),
    inset -1px 0 0 rgba(255,255,255,.06);
}
/* yon qirra — hajm hissi */
.collage__img::after{
  content:'';position:absolute;left:0;top:0;bottom:0;width:6px;
  background:linear-gradient(180deg,rgba(255,255,255,.22),rgba(255,255,255,.03));
  transform:translateX(-6px) rotateY(-90deg);transform-origin:100% 50%;
}
.collage__img::before{
  content:'';position:absolute;inset:0;z-index:1;pointer-events:none;
  background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),
                   linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);
  background-size:38px 38px;
}
.collage__img--a{
  left:-3%;top:-1%;width:62%;height:67%;
  transform:rotateY(-19deg) rotateX(7deg) rotateZ(-1.5deg) translateZ(20px);
  animation:float3d 7s ease-in-out infinite;
}
.collage__img--b{
  right:-3%;bottom:2%;width:52%;height:58%;
  transform:rotateY(-19deg) rotateX(7deg) rotateZ(-1.5deg) translateZ(120px);
  animation:float3d 7s ease-in-out infinite 1.6s;
}
.collage:hover .collage__img--a{transform:rotateY(-13deg) rotateX(5deg) translateZ(50px)}
.collage:hover .collage__img--b{transform:rotateY(-13deg) rotateX(5deg) translateZ(150px)}
.collage__art{position:relative;width:100%;height:100%;display:block}

@keyframes float3d{0%,100%{translate:0 0}50%{translate:0 -12px}}

/* ---------- panellar ichidagi animatsiyalar ---------- */
.hero-scan{animation:heroScan 3.6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes heroScan{0%,100%{transform:translateY(-34px)}50%{transform:translateY(78px)}}

.hero-pulse{
  fill:none;transform-box:fill-box;transform-origin:center;
  animation:heroPulse 3.2s ease-out infinite;
}
.hero-pulse--2{animation-delay:1.6s}
@keyframes heroPulse{
  0%{opacity:.6;transform:scale(.62)}
  75%{opacity:0;transform:scale(1.3)}
  100%{opacity:0;transform:scale(1.3)}
}

.hero-flow path{stroke-dasharray:6 14;animation:heroFlow 1.5s linear infinite}
.hero-flow--out path{animation-direction:reverse;animation-duration:1.8s}
@keyframes heroFlow{to{stroke-dashoffset:-40}}

.hero-check{stroke-dasharray:60;stroke-dashoffset:60;animation:heroCheck 3.4s ease-in-out infinite}
@keyframes heroCheck{
  0%,10%{stroke-dashoffset:60}
  35%,88%{stroke-dashoffset:0}
  100%{stroke-dashoffset:60}
}
.hero-check--sm{stroke-dasharray:22;stroke-dashoffset:22;animation:heroCheckSm 3.4s ease-in-out infinite .4s}
.hero-check--sm2{stroke-dasharray:24;stroke-dashoffset:24;animation:heroCheckSm 3.4s ease-in-out infinite .8s}
@keyframes heroCheckSm{
  0%,12%{stroke-dashoffset:24}
  38%,88%{stroke-dashoffset:0}
  100%{stroke-dashoffset:24}
}

@media(max-width:1100px){
  .collage{min-height:400px;max-width:560px}
}
@media(max-width:640px){
  .collage{display:flex;flex-direction:column;min-height:0;gap:14px;perspective:none}
  .collage__shape{display:none}
  .collage__img,
  .collage:hover .collage__img--a,
  .collage:hover .collage__img--b{transform:none;animation:none}
  .collage__img{
    position:relative;width:100% !important;height:230px !important;
    left:auto;right:auto;top:auto;bottom:auto;
  }
}
@media (prefers-reduced-motion:reduce){
  .collage__img,.hero-scan,.hero-pulse,.hero-check,.hero-flow path,
  .hero-check--sm,.hero-check--sm2{animation:none}
  .hero-check,.hero-check--sm,.hero-check--sm2{stroke-dashoffset:0}
}
</style>
