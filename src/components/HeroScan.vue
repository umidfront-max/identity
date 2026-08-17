<script setup>
import { useLang } from '@/composables/useLang.js'

const { t } = useLang()
</script>

<template>
  <div class="scene">
    <!-- ============ orqa fon: oqim chiziqlari, kublar, zarrachalar ============ -->
    <svg class="scene__bg" viewBox="0 0 720 560" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hsFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#5B6FD6" stop-opacity=".25"/>
          <stop offset=".3" stop-color="#8E9BE4" stop-opacity="1"/>
          <stop offset=".72" stop-color="#8E9BE4" stop-opacity="1"/>
          <stop offset="1" stop-color="#5B6FD6" stop-opacity=".25"/>
        </linearGradient>
        <linearGradient id="hsFlowRed" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#E23B33" stop-opacity=".9"/>
          <stop offset=".25" stop-color="#E23B33" stop-opacity=".45"/>
          <stop offset=".75" stop-color="#E23B33" stop-opacity=".45"/>
          <stop offset="1" stop-color="#E23B33" stop-opacity=".9"/>
        </linearGradient>
      </defs>

      <!-- to'lqinsimon punktir oqimlar -->
      <g class="flow" stroke-linecap="round" fill="none">
        <path d="M-30 170C90 124 210 224 330 182S570 124 750 170" stroke="url(#hsFlowRed)" stroke-width="2.2" stroke-dasharray="3 9" style="--d:-2.4s"/>
        <path d="M-30 196C90 150 210 250 330 208S570 150 750 196" stroke="url(#hsFlow)" stroke-width="2.4" stroke-dasharray="3 9"/>
        <path d="M-30 226C100 176 220 280 350 234S590 178 750 226" stroke="url(#hsFlow)" stroke-width="2.4" stroke-dasharray="3 9" style="--d:-.9s"/>
        <path d="M-30 258C110 206 230 306 360 262S600 206 750 258" stroke="url(#hsFlowRed)" stroke-width="2.2" stroke-dasharray="3 9" style="--d:-1.8s"/>
        <path d="M-30 290C120 240 240 332 370 292S610 236 750 288" stroke="url(#hsFlow)" stroke-width="2.4" stroke-dasharray="3 9" style="--d:-2.6s"/>
        <path d="M-30 322C130 274 250 358 380 320S620 268 750 318" stroke="url(#hsFlow)" stroke-width="2.2" stroke-dasharray="3 9" style="--d:-3.4s" opacity=".75"/>
        <path d="M-30 354C140 306 260 384 390 348S630 300 750 346" stroke="url(#hsFlow)" stroke-width="2" stroke-dasharray="3 9" style="--d:-4.2s" opacity=".5"/>
      </g>

      <!-- simli kublar -->
      <g class="cubes" stroke="#5B6FD6" stroke-width="1.1" fill="none">
        <g class="cube" transform="translate(586 84)">
          <path d="M0-13 11-6.5 11 6.5 0 13-11 6.5-11-6.5Z"/><path d="M0-13V0l11 6.5M0 0-11 6.5M0 0v13"/>
        </g>
        <g class="cube" stroke="#E23B33" opacity=".75" transform="translate(596 92) scale(.62)" style="--d:-2s">
          <path d="M0-13 11-6.5 11 6.5 0 13-11 6.5-11-6.5Z"/><path d="M0-13V0l11 6.5M0 0-11 6.5M0 0v13"/>
        </g>
        <g class="cube" transform="translate(452 122) scale(.7)" style="--d:-3.1s">
          <path d="M0-13 11-6.5 11 6.5 0 13-11 6.5-11-6.5Z"/><path d="M0-13V0l11 6.5M0 0-11 6.5M0 0v13"/>
        </g>
        <g class="cube" stroke="#E23B33" opacity=".6" transform="translate(78 406) scale(.66)" style="--d:-1.2s">
          <path d="M0-13 11-6.5 11 6.5 0 13-11 6.5-11-6.5Z"/><path d="M0-13V0l11 6.5M0 0-11 6.5M0 0v13"/>
        </g>
        <g class="cube" transform="translate(660 452) scale(.58)" style="--d:-4s">
          <path d="M0-13 11-6.5 11 6.5 0 13-11 6.5-11-6.5Z"/><path d="M0-13V0l11 6.5M0 0-11 6.5M0 0v13"/>
        </g>
      </g>

      <!-- zarrachalar -->
      <g class="dots">
        <circle cx="46" cy="150" r="2.4" fill="#E23B33"/>
        <circle cx="112" cy="212" r="1.8" fill="#5B6FD6" style="--d:-1.1s"/>
        <circle cx="30" cy="300" r="2" fill="#5B6FD6" style="--d:-2.2s"/>
        <circle cx="76" cy="486" r="2.2" fill="#8E9BE4" style="--d:-.6s"/>
        <circle cx="290" cy="500" r="1.8" fill="#5B6FD6" style="--d:-3s"/>
        <circle cx="410" cy="60" r="2" fill="#8E9BE4" style="--d:-1.7s"/>
        <circle cx="676" cy="212" r="2.4" fill="#E23B33" style="--d:-2.8s"/>
        <circle cx="700" cy="336" r="1.8" fill="#5B6FD6" style="--d:-.4s"/>
        <circle cx="626" cy="524" r="2" fill="#8E9BE4" style="--d:-3.6s"/>
      </g>
    </svg>

    <!-- ============ old karta: identifikatsiya ============ -->
    <div class="pane pane--face">
      <svg viewBox="0 0 300 320" fill="none" aria-hidden="true">
        <text x="26" y="34" fill="#8E9BE4" font-family="JetBrains Mono, monospace" font-size="12" letter-spacing="2.2">FACE ID · 1:N</text>

        <!-- chap yon panel: asboblar -->
        <g class="tools">
          <g><rect x="18" y="52" width="36" height="36" rx="11" fill="#FFFFFF" fill-opacity=".07" stroke="#FFFFFF" stroke-opacity=".12"/>
            <g stroke="#8E9BE4" stroke-width="1.6" fill="none" stroke-linecap="round" transform="translate(36 70)">
              <circle cx="-1.5" cy="-1.5" r="5"/><path d="M2.4 2.4 6 6"/></g></g>
          <g><rect x="18" y="96" width="36" height="36" rx="11" fill="#FFFFFF" fill-opacity=".07" stroke="#FFFFFF" stroke-opacity=".12"/>
            <g stroke="#8E9BE4" stroke-width="1.6" fill="none" stroke-linecap="round" transform="translate(36 114)">
              <path d="M-7-4v-3h3M4-7h3v3M7 4v3H4M-4 7h-3v-3"/><circle cx="0" cy="-1" r="2.6"/><path d="M-3.6 4.6c.9-1.8 2.1-2.6 3.6-2.6s2.7.8 3.6 2.6"/></g></g>
          <g><rect x="18" y="140" width="36" height="36" rx="11" fill="#FFFFFF" fill-opacity=".07" stroke="#FFFFFF" stroke-opacity=".12"/>
            <g stroke="#8E9BE4" stroke-width="1.6" fill="none" stroke-linecap="round" transform="translate(36 158)">
              <circle cx="-3" cy="-2" r="2.6"/><circle cx="4.5" cy="-2.5" r="2"/><path d="M-8 5c.8-2.4 2.6-3.6 5-3.6S1.2 2.6 2 5M4 1.6c1.8.2 3 1.3 3.6 3.4"/></g></g>
          <g><rect x="18" y="184" width="36" height="36" rx="11" fill="#FFFFFF" fill-opacity=".07" stroke="#FFFFFF" stroke-opacity=".12"/>
            <g stroke="#8E9BE4" stroke-width="1.8" fill="none" stroke-linecap="round" transform="translate(36 202)">
              <path d="M-6 5V-1M0 5v-9M6 5V1"/></g></g>
        </g>

        <!-- skaner ramkasi -->
        <g class="brackets" stroke="#5B6FD6" stroke-width="2.4" stroke-linecap="round" fill="none">
          <path d="M104 84h-14v14M232 84h14v14M104 244H90v-14M232 244h14v-14"/>
        </g>

        <!-- simli bosh: silueti bo'yicha qirqilgan zich to'r -->
        <g class="head" transform="translate(168 164)">
          <path id="hsHead" d="M0-62c23 0 36 15 38 34 1 12 1 22-1 34-3 18-11 36-25 48-5 5-19 5-24 0-14-12-22-30-25-48-2-12-2-22-1-34 2-19 15-34 38-34z"
                fill="#5B6FD6" fill-opacity=".06" stroke="#5B6FD6" stroke-opacity=".9" stroke-width="1.3"/>
          <clipPath id="hsHeadClip"><use href="#hsHead"/></clipPath>

          <g clip-path="url(#hsHeadClip)" stroke="#8E9BE4" fill="none">
            <!-- kenglik chiziqlari -->
            <g stroke-opacity=".42" stroke-width=".75">
              <path d="M-52-50q52 9 104 0M-52-40q52 10 104 0M-52-30q52 11 104 0M-52-20q52 11 104 0M-52-10q52 11 104 0M-52 0q52 11 104 0M-52 10q52 11 104 0M-52 20q52 10 104 0M-52 30q52 10 104 0M-52 40q52 9 104 0M-52 50q52 8 104 0"/>
            </g>
            <!-- uzunlik chiziqlari -->
            <g stroke-opacity=".42" stroke-width=".75">
              <path d="M-40-70c-5 46-5 92 0 138M-30-70c-4 46-4 92 0 138M-20-70c-2 46-2 92 0 138M-10-70c-1 46-1 92 0 138M0-70v138M10-70c1 46 1 92 0 138M20-70c2 46 2 92 0 138M30-70c4 46 4 92 0 138M40-70c5 46 5 92 0 138"/>
            </g>
            <!-- yuz belgilari: qosh, burun, og'iz -->
            <g stroke-opacity=".8" stroke-width="1.15" stroke-linecap="round">
              <path d="M-27-16q11-7 20-1M27-16q-11-7-20-1"/>
              <path d="M0-12v18l-7 5M0 11l7 0"/>
              <path d="M-11 27q11 6 22 0"/>
            </g>
            <!-- to'r tugunlari -->
            <g fill="#8E9BE4" fill-opacity=".75" stroke="none">
              <circle cx="-30" cy="-30" r="1.5"/><circle cx="-10" cy="-28" r="1.5"/>
              <circle cx="10" cy="-28" r="1.5"/><circle cx="30" cy="-30" r="1.5"/>
              <circle cx="-20" cy="-9" r="1.5"/><circle cx="20" cy="-9" r="1.5"/>
              <circle cx="0" cy="1" r="1.5"/><circle cx="-30" cy="11" r="1.5"/>
              <circle cx="30" cy="11" r="1.5"/><circle cx="-20" cy="31" r="1.5"/>
              <circle cx="20" cy="31" r="1.5"/><circle cx="0" cy="42" r="1.5"/>
            </g>
          </g>
        </g>

        <!-- skaner nuri: faqat yuz bo'ylab pastga-yuqoriga yuradi -->
        <g class="beam">
          <rect x="106" y="-1.5" width="124" height="3" rx="1.5" fill="#E23B33"/>
          <rect x="106" y="1.5" width="124" height="22" fill="#E23B33" fill-opacity=".16"/>
          <rect x="106" y="-16" width="124" height="15" fill="#E23B33" fill-opacity=".07"/>
        </g>

        <!-- natija paneli -->
        <g class="verdict">
          <rect x="18" y="268" width="264" height="34" rx="11" fill="#FFFFFF" fill-opacity=".08" stroke="#FFFFFF" stroke-opacity=".14"/>
          <circle cx="40" cy="285" r="9" fill="#1FA971"/>
          <path d="M35.6 285l3 3 5.4-5.6" stroke="#fff" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="58" y="290" fill="#fff" font-family="Manrope, sans-serif" font-size="12.5" font-weight="600">{{ t('art.ok') }}</text>
          <text x="266" y="290" text-anchor="end" fill="#8E9BE4" font-family="JetBrains Mono, monospace" font-size="12">99.8%</text>
        </g>
      </svg>
    </div>

    <!-- ============ orqa karta: himoya konturi ============ -->
    <div class="pane pane--shield">
      <svg viewBox="0 0 300 330" fill="none" aria-hidden="true">
        <text x="150" y="34" text-anchor="middle" fill="#8E9BE4" font-family="JetBrains Mono, monospace" font-size="12" letter-spacing="2.2">
          {{ t('art.shield').toUpperCase() }}
        </text>

        <!-- kirish kanallari -->
        <g class="chips">
          <g><rect x="26" y="76" width="44" height="44" rx="13" fill="#FFFFFF" fill-opacity=".07" stroke="#FFFFFF" stroke-opacity=".13"/>
            <g stroke="#5B6FD6" stroke-width="1.7" fill="none" stroke-linecap="round" transform="translate(48 98)">
              <path d="M-11 2a11 11 0 0 1 22 0v5"/><path d="M-7 3a7 7 0 0 1 14 0v7"/>
              <path d="M-2.6 3a2.6 2.6 0 0 1 5.2 0v11"/><path d="M-11 10v3M11 12v3"/></g></g>
          <g><rect x="26" y="142" width="44" height="44" rx="13" fill="#FFFFFF" fill-opacity=".07" stroke="#FFFFFF" stroke-opacity=".13"/>
            <g stroke="#5B6FD6" stroke-width="1.7" fill="none" stroke-linecap="round" transform="translate(48 164)">
              <circle cx="0" cy="-5" r="6.6"/><path d="M-11 12c1.7-6.6 5.8-9.9 11-9.9s9.3 3.3 11 9.9"/></g></g>
          <g><rect x="26" y="208" width="44" height="44" rx="13" fill="#FFFFFF" fill-opacity=".07" stroke="#FFFFFF" stroke-opacity=".13"/>
            <g transform="translate(48 230)"><g fill="#5B6FD6">
              <circle cx="-9" cy="-3" r="2.6"/><circle cx="0" cy="-3" r="2.6"/><circle cx="9" cy="-3" r="2.6"/></g>
              <rect x="-13" y="5" width="26" height="8" rx="4" fill="#5B6FD6" fill-opacity=".35"/></g></g>
        </g>

        <!-- ulanish simlari -->
        <g stroke="#5B6FD6" stroke-opacity=".28" stroke-width="1.8" fill="none">
          <path d="M70 98h22v58h20M70 164h42M70 230h22v-58h20"/>
          <path d="M188 142h24v-22h22M188 190h22v42h24"/>
        </g>
        <g class="flowIn" stroke="#5B6FD6" stroke-width="2.1" stroke-linecap="round" fill="none">
          <path d="M70 98h22v58h20M70 164h42M70 230h22v-58h20"/>
        </g>
        <g class="flowOut" stroke="#3FD79B" stroke-width="2.1" stroke-linecap="round" fill="none">
          <path d="M188 142h24v-22h22M188 190h22v42h24"/>
        </g>

        <!-- qalqon -->
        <g transform="translate(150 168)">
          <circle class="pulse" r="46" stroke="#5B6FD6" stroke-width="1.4" fill="none"/>
          <circle class="pulse pulse--2" r="46" stroke="#5B6FD6" stroke-width="1.4" fill="none"/>
        </g>
        <path d="M150 116l38 13v30c0 26-15 45-38 53-23-8-38-27-38-53v-30z" fill="#141D45" fill-opacity=".9" stroke="#5B6FD6" stroke-width="2.2"/>
        <path d="M150 116l38 13v30c0 26-15 45-38 53z" fill="#FFFFFF" fill-opacity=".05"/>
        <path class="check" d="M135 168l11 11 21-23" stroke="#3FD79B" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

        <!-- himoyalangan qurilmalar -->
        <g><rect x="234" y="86" width="42" height="66" rx="10" fill="#0E1533" fill-opacity=".8" stroke="#5B6FD6" stroke-width="1.8"/>
          <circle cx="255" cy="119" r="12" fill="#3FD79B" fill-opacity=".14" stroke="#3FD79B" stroke-width="1.5"/>
          <path class="check-sm" d="M249.5 119l4 4 7.4-8" stroke="#3FD79B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></g>
        <g><rect x="222" y="204" width="66" height="46" rx="8" fill="#0E1533" fill-opacity=".8" stroke="#5B6FD6" stroke-width="1.8"/>
          <rect x="214" y="254" width="82" height="6" rx="3" fill="#5B6FD6" fill-opacity=".45"/>
          <circle cx="255" cy="227" r="13" fill="#3FD79B" fill-opacity=".14" stroke="#3FD79B" stroke-width="1.5"/>
          <path class="check-sm2" d="M249 227l4.4 4.4 8-8.6" stroke="#3FD79B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.scene{position:relative;width:100%;aspect-ratio:720/560;min-height:340px}
.scene__bg{position:absolute;inset:0;width:100%;height:100%}

/* kartalar ortidagi rangli yorug'lik — chuqurlik hissi beradi */
.scene::before,.scene::after{
  content:'';position:absolute;border-radius:50%;pointer-events:none;
  filter:blur(58px);z-index:0;
}
.scene::before{
  width:46%;aspect-ratio:1;left:8%;top:2%;
  background:radial-gradient(circle,rgba(91,111,214,.5),transparent 68%);
  animation:glowA 11s ease-in-out infinite;
}
.scene::after{
  width:42%;aspect-ratio:1;right:0;bottom:2%;
  background:radial-gradient(circle,rgba(46,61,143,.55),transparent 68%);
  animation:glowB 13s ease-in-out infinite;
}
@keyframes glowA{0%,100%{transform:none;opacity:.75}50%{transform:translate(4%,3%) scale(1.08);opacity:1}}
@keyframes glowB{0%,100%{transform:none;opacity:.7}50%{transform:translate(-4%,-3%) scale(1.1);opacity:.95}}

/* ---------- shisha kartalar ---------- */
.pane{
  position:absolute;border-radius:26px;overflow:hidden;
  background:linear-gradient(150deg,rgba(30,44,104,.62),rgba(10,16,46,.72));
  border:1px solid rgba(142,155,228,.22);
  backdrop-filter:blur(14px) saturate(140%);
  -webkit-backdrop-filter:blur(14px) saturate(140%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.12),
    0 44px 80px -40px rgba(0,0,0,.9);
}
.pane svg{width:100%;height:100%;display:block}
.pane--face{
  left:12%;top:5%;width:44%;height:60%;z-index:2;
  animation:floatA 8s ease-in-out infinite;
}
.pane--shield{
  right:1%;top:29%;width:44%;height:64%;z-index:1;
  animation:floatB 8s ease-in-out infinite 1.4s;
}
@keyframes floatA{0%,100%{translate:0 0}50%{translate:0 -12px}}
@keyframes floatB{0%,100%{translate:0 0}50%{translate:0 10px}}

/* ---------- fon animatsiyalari ---------- */
.flow path{animation:flowDash 3.4s linear infinite;animation-delay:var(--d,0s)}
@keyframes flowDash{to{stroke-dashoffset:-44}}

.cube{transform-box:fill-box;transform-origin:center;animation:cubeSpin 12s ease-in-out infinite;animation-delay:var(--d,0s)}
@keyframes cubeSpin{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-9px) rotate(14deg)}}

.dots circle{animation:twinkle 4.5s ease-in-out infinite;animation-delay:var(--d,0s)}
@keyframes twinkle{0%,100%{opacity:.25}50%{opacity:1}}

/* ---------- identifikatsiya kartasi ---------- */
/* nur faqat yuz chegarasida: 106px (peshona) — 222px (iyak) va qaytadi */
.beam{animation:beamSweep 4.2s cubic-bezier(.45,0,.55,1) infinite}
@keyframes beamSweep{0%,100%{transform:translateY(108px)}50%{transform:translateY(220px)}}

.head{animation:headGlow 4.2s ease-in-out infinite}
@keyframes headGlow{0%,100%{opacity:.8}50%{opacity:1}}

.brackets path{stroke-dasharray:28;stroke-dashoffset:28;animation:draw .8s var(--ease-out) .3s forwards}
@keyframes draw{to{stroke-dashoffset:0}}

/* natija paneli doim ko'rinadi, faqat paydo bo'lishi silliq */
.verdict{animation:verdictIn .6s var(--ease-out) .6s both}
@keyframes verdictIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.tools rect{animation:toolIn .5s var(--ease-out) both}
.tools g:nth-child(2) rect{animation-delay:.1s}
.tools g:nth-child(3) rect{animation-delay:.18s}
.tools g:nth-child(4) rect{animation-delay:.26s}
@keyframes toolIn{from{opacity:0}to{opacity:1}}

/* ---------- himoya kartasi ---------- */
.pulse{fill:none;transform-box:fill-box;transform-origin:center;animation:pulse 3.4s ease-out infinite}
.pulse--2{animation-delay:1.7s}
@keyframes pulse{0%{opacity:.55;transform:scale(.6)}75%{opacity:0;transform:scale(1.28)}100%{opacity:0;transform:scale(1.28)}}

.flowIn path{stroke-dasharray:6 13;animation:wire 1.6s linear infinite}
.flowOut path{stroke-dasharray:6 13;animation:wire 1.9s linear infinite reverse}
@keyframes wire{to{stroke-dashoffset:-38}}

.check{stroke-dasharray:56;stroke-dashoffset:56;animation:drawCheck 3.6s ease-in-out infinite}
@keyframes drawCheck{0%,10%{stroke-dashoffset:56}35%,88%{stroke-dashoffset:0}100%{stroke-dashoffset:56}}
.check-sm{stroke-dasharray:20;stroke-dashoffset:20;animation:drawCheckSm 3.6s ease-in-out infinite .4s}
.check-sm2{stroke-dasharray:22;stroke-dashoffset:22;animation:drawCheckSm 3.6s ease-in-out infinite .8s}
@keyframes drawCheckSm{0%,12%{stroke-dashoffset:22}38%,88%{stroke-dashoffset:0}100%{stroke-dashoffset:22}}

@media(max-width:900px){
  .scene{min-height:300px}
  .pane{border-radius:20px}
}
@media (prefers-reduced-motion:reduce){
  .scene::before,.scene::after,
  .pane,.flow path,.cube,.dots circle,.beam,.head,.verdict,
  .pulse,.flowIn path,.flowOut path,.check,.check-sm,.check-sm2,.tools rect{
    animation:none
  }
  .brackets path,.check,.check-sm,.check-sm2{stroke-dashoffset:0}
  .verdict,.tools rect{opacity:1}
}
</style>
