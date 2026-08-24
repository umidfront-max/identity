<script setup>
/* Mahsulotning ikki yo'nalishi (masalan: xavfsizlik analitikasi va Luna Line).
   Har bir yo'nalishda: tavsif, rasmli modullar, detektorlar ro'yxati va guruhlar. */
import { ref } from 'vue'
import ProductModules from '@/components/ProductModules.vue'
import ProductTabs from '@/components/ProductTabs.vue'
import MediaCarousel from '@/components/MediaCarousel.vue'

defineProps({ tracks: { type: Array, required: true } })
const active = ref(0)
</script>

<template>
  <div class="tracks">
    <div class="tracks__bar" role="tablist">
      <button
        v-for="(tr, i) in tracks" :key="tr.t"
        class="tracks__btn" :class="{ 'is-on': active === i }"
        role="tab" :aria-selected="active === i"
        @click="active = i">
        <i>{{ String(i + 1).padStart(2, '0') }}</i>{{ tr.t }}
      </button>
    </div>

    <Transition name="track" mode="out-in">
      <div class="tracks__panel" :key="active" role="tabpanel">
        <p class="tracks__d">{{ tracks[active].d }}</p>

        <!-- carouselAt:'end' bo'lsa karusel blok oxirida chiziladi -->
        <div v-if="tracks[active].carousel && tracks[active].carouselAt !== 'end'" class="tracks__block">
          <h3 v-if="tracks[active].carouselTitle">{{ tracks[active].carouselTitle }}</h3>
          <MediaCarousel :slides="tracks[active].carousel" />
        </div>

        <ProductModules
          v-if="tracks[active].modules"
          class="tracks__mods"
          :modules="tracks[active].modules" />

        <div v-for="(blk, bi) in tracks[active].lists || []" :key="bi" class="tracks__block">
          <h3 v-if="blk.t">{{ blk.t }}</h3>
          <ul class="tracks__list">
            <li v-for="(item, i) in blk.items" :key="i" :style="{ '--d': i * 45 + 'ms' }">
              <span class="dot" aria-hidden="true"></span>{{ item }}
            </li>
          </ul>
        </div>

        <div v-if="tracks[active].tabs" class="tracks__block">
          <h3 v-if="tracks[active].tabsTitle">{{ tracks[active].tabsTitle }}</h3>
          <ProductTabs :tabs="tracks[active].tabs" />
        </div>

        <div v-if="tracks[active].groups" class="tracks__block">
          <h3 v-if="tracks[active].groupsTitle">{{ tracks[active].groupsTitle }}</h3>
          <div class="tracks__grid">
            <div v-for="(g, i) in tracks[active].groups" :key="i" class="card grp">
              <h4>{{ g.t }}</h4>
              <ul>
                <li v-for="(it, k) in g.items" :key="k">
                  <span class="dot" aria-hidden="true"></span>{{ it }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div v-if="tracks[active].cases" class="tracks__block">
          <h3 v-if="tracks[active].casesTitle">{{ tracks[active].casesTitle }}</h3>
          <div class="tracks__cases">
            <article v-for="(c, ci) in tracks[active].cases" :key="ci" class="card tcase">
              <span class="tcase__n">{{ String(ci + 1).padStart(2, '0') }}</span>
              <h4>{{ c.t }}</h4>
              <p>{{ c.d }}</p>
            </article>
          </div>
        </div>

        <p v-if="tracks[active].note" class="tracks__note">{{ tracks[active].note }}</p>

        <div v-if="tracks[active].carousel && tracks[active].carouselAt === 'end'" class="tracks__block">
          <h3 v-if="tracks[active].carouselTitle">{{ tracks[active].carouselTitle }}</h3>
          <MediaCarousel :slides="tracks[active].carousel" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.tracks__bar{
  display:flex;gap:6px;flex-wrap:wrap;margin-bottom:34px;
  padding:6px;border-radius:999px;background:var(--surface);border:1px solid var(--line);
  width:fit-content;max-width:100%;
}
.tracks__btn{
  display:inline-flex;align-items:center;gap:10px;border:0;background:none;cursor:pointer;
  padding:12px 24px;border-radius:999px;font-size:15px;font-weight:700;color:var(--muted);
  transition:color .3s,background .35s var(--ease);
}
.tracks__btn i{font-style:normal;font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;opacity:.6}
.tracks__btn.is-on{background:var(--ink);color:#fff}
.tracks__btn:not(.is-on):hover{color:var(--ink)}

.tracks__d{
  max-width:78ch;font-size:17.5px;line-height:1.6;color:var(--ink);margin:0 0 12px;
}
.tracks__mods{margin-top:44px}
.tracks__block{margin-top:52px}
.tracks__block h3{font-size:clamp(19px,1.9vw,23px);margin-bottom:22px;letter-spacing:-.02em}

.tracks__list{display:grid;grid-template-columns:1fr 1fr;gap:13px 40px}
.tracks__list li{
  display:flex;gap:13px;align-items:flex-start;color:var(--muted);font-size:15.5px;line-height:1.5;
  animation:trItem .5s var(--ease-out) both;animation-delay:var(--d);
}
@keyframes trItem{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:none}}

.tracks__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.grp h4{font-family:var(--font-display);font-size:17px;font-weight:600;margin:0 0 14px;letter-spacing:-.015em}
.grp ul{display:grid;gap:9px}
.grp li{display:flex;gap:11px;align-items:flex-start;font-size:14.5px;color:var(--muted);line-height:1.5}

.dot{
  flex:none;width:6px;height:6px;border-radius:50%;background:var(--red);margin-top:8px;
  box-shadow:0 0 0 4px rgba(226,59,51,.13);
}
/* hayotiy sikl bosqichlari — orasida strelka */
.tracks__cases{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.tcase{position:relative;padding-top:34px}
.tcase__n{
  position:absolute;top:20px;right:22px;font-family:var(--font-mono);font-size:12px;
  letter-spacing:.1em;color:var(--line-2);
}
.tcase h4{font-family:var(--font-display);font-size:17px;font-weight:600;margin:0 0 8px;letter-spacing:-.015em}
.tcase p{margin:0;font-size:15px;color:var(--muted);line-height:1.55}
.tracks__cases .tcase::after{
  content:'';position:absolute;right:-20px;top:50%;width:13px;height:13px;margin-top:-7px;
  border-top:2px solid var(--line-2);border-right:2px solid var(--line-2);
  transform:rotate(45deg);pointer-events:none;
}
.tracks__cases .tcase:nth-child(3n)::after,
.tracks__cases .tcase:last-child::after{display:none}

.tracks__note{
  margin-top:34px;padding:18px 22px;border-radius:var(--r-md);
  background:var(--surface);border-left:3px solid var(--red);
  font-size:15px;color:var(--muted);max-width:80ch;
}

.track-enter-active,.track-leave-active{transition:opacity .28s var(--ease),transform .28s var(--ease)}
.track-enter-from{opacity:0;transform:translateY(10px)}
.track-leave-to{opacity:0}

@media(max-width:1000px){
  .tracks__grid,.tracks__cases{grid-template-columns:1fr 1fr}
  .tracks__cases .tcase:nth-child(3n)::after{display:block}
  .tracks__cases .tcase:nth-child(2n)::after,
  .tracks__cases .tcase:last-child::after{display:none}
}
@media(max-width:760px){
  .tracks__bar{border-radius:18px;width:100%}
  .tracks__btn{flex:1;justify-content:center;padding:11px 14px;font-size:14px}
  .tracks__btn i{display:none}
  .tracks__list,.tracks__grid,.tracks__cases{grid-template-columns:1fr}
  .tracks__cases .tcase::after{display:none}
  .tracks__d{font-size:16.5px}
}
</style>
