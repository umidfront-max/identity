<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { useAnalytics } from '@/composables/useAnalytics.js'
import { useScrollY } from '@/composables/useMotion.js'
import { TILES, PARTNERS, HERO_STATS } from '@/data/catalog.js'

import HeroScan from '@/components/HeroScan.vue'
import SignalField from '@/components/SignalField.vue'
import SectionHead from '@/components/SectionHead.vue'
import ProductTile from '@/components/ProductTile.vue'
import LayerStack from '@/components/LayerStack.vue'
import PartnerCard from '@/components/PartnerCard.vue'
import OfferSlider from '@/components/OfferSlider.vue'
import CtaBand from '@/components/CtaBand.vue'

const { t } = useLang()
const { track } = useAnalytics()
const y = useScrollY()

const stats = computed(() => HERO_STATS.map((k, i) => ({ b: t(k), l: t(`hero.stat${i + 1}l`) })))
const why = computed(() => [1, 2, 3, 4].map(n => ({ t: t(`home.why${n}.t`), d: t(`home.why${n}.d`) })))
</script>

<template>
  <div>
    <!-- ============ HERO ============ -->
    <section class="hero">
      <SignalField :density="52" />
      <div class="hero__glow" aria-hidden="true"></div>
      <div class="hero__grid-lines" aria-hidden="true"></div>

      <div class="wrap hero__in">
        <div class="hero__copy" :style="{ transform: `translateY(${y * -0.04}px)` }">
          <div class="eyebrow">{{ t('hero.eyebrow') }}</div>
          <h1 class="hero__h1">{{ t('hero.mission') }}</h1>
          <p class="hero__sub">{{ t('hero.sub') }}</p>

          <div class="hero__cta">
            <RouterLink to="/contacts" class="btn btn--primary" v-magnet="0.18"
              @click="track('cta_click', { cta: 'hero-primary' })">
              {{ t('cta.discuss') }}
            </RouterLink>
            <RouterLink to="/products" class="btn btn--light" v-magnet="0.12"
              @click="track('cta_click', { cta: 'hero-secondary' })">
              {{ t('nav.allProducts') }}
            </RouterLink>
          </div>

          <dl class="hero__stats">
            <div v-for="(s, i) in stats" :key="s.l" :style="{ '--d': 480 + i * 90 + 'ms' }">
              <dt>{{ s.b }}</dt>
              <dd>{{ s.l }}</dd>
            </div>
          </dl>
        </div>

        <div class="hero__art" :style="{ transform: `translateY(${y * 0.06}px)` }">
          <HeroScan />
        </div>
      </div>
    </section>

    <!-- ============ MISSIYA VA IQTIBOS ============ -->
    <section class="section">
      <div class="wrap intro">
        <div class="intro__txt">
          <p v-reveal>{{ t('home.p1') }}</p>
          <p v-reveal="90">{{ t('home.p2') }}</p>
        </div>
        <figure class="quote" v-reveal:right>
          <blockquote>{{ t('quote.text') }}</blockquote>
          <figcaption>{{ t('quote.author') }}</figcaption>
        </figure>
      </div>
    </section>

    <!-- ============ MAHSULOT PLITKALARI ============ -->
    <section class="section section--surface" id="products">
      <div class="wrap">
        <SectionHead
          :eyebrow="t('home.products.eyebrow')"
          :title="t('nav.products')"
          :lead="t('tiles.lead')" />
        <div class="tiles">
          <ProductTile v-for="(tile, i) in TILES" :key="tile.k" :tile="tile" :index="i" />
        </div>
      </div>
    </section>

    <!-- ============ HIMOYA QATLAMLARI ============ -->
    <section class="section section--ink layers">
      <SignalField :density="30" color="91,111,214" />
      <div class="wrap">
        <SectionHead
          :eyebrow="t('layers.eyebrow')"
          :title="t('layers.title')"
          :lead="t('layers.lead')" />
        <LayerStack />
      </div>
    </section>

    <!-- ============ BIRINCHI QADAM ============ -->
    <section class="section">
      <div class="wrap offers">
        <div class="offers__head">
          <SectionHead :eyebrow="t('home.offers.eyebrow')" :title="t('home.offers.title')" />
          <RouterLink to="/promos" class="arrow-link">{{ t('nav.promos') }} <i>&rarr;</i></RouterLink>
        </div>
        <div v-reveal:right><OfferSlider /></div>
      </div>
    </section>

    <!-- ============ QANDAY ISHLAYMIZ ============ -->
    <section class="section section--surface">
      <div class="wrap">
        <SectionHead :eyebrow="t('home.why.eyebrow')" :title="t('home.why.title')" />
        <div class="grid grid--4 why">
          <div v-for="(w, i) in why" :key="w.t" class="card whycard" v-reveal="i * 80">
            <span class="whycard__n">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ w.t }}</h3>
            <p>{{ w.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ HAMKORLAR ============ -->
    <section class="section">
      <div class="wrap">
        <SectionHead
          :eyebrow="t('home.partners.eyebrow')"
          :title="t('home.partners.title')"
          :lead="t('home.partners.lead')" />
        <div class="grid grid--2">
          <PartnerCard v-for="(p, i) in PARTNERS" :key="p.name" :partner="p" :index="i" />
        </div>
      </div>
    </section>

    <CtaBand source="home" />
  </div>
</template>

<style scoped>
/* ---------- hero ---------- */
.hero{
  position:relative;overflow:hidden;
  background:linear-gradient(155deg,#070B1E 0%,#0D1430 48%,#141D45 100%);
  color:#fff;padding:78px 0 96px;
}
.hero__glow{
  position:absolute;width:820px;height:820px;right:-220px;top:-320px;border-radius:50%;
  background:radial-gradient(circle,rgba(46,61,143,.55),transparent 62%);
  animation:heroGlow 14s ease-in-out infinite;
}
@keyframes heroGlow{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-60px,60px) scale(1.08)}}
.hero__grid-lines{
  position:absolute;inset:0;opacity:.4;
  background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),
                   linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);
  background-size:64px 64px;
  mask-image:radial-gradient(circle at 30% 40%,#000,transparent 72%);
}
.hero__in{
  position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center;
}
.hero__copy{will-change:transform}
.hero__h1{
  font-weight:500;max-width:15ch;
  animation:heroIn .9s var(--ease-out) .1s both;
}
.hero__sub{
  margin-top:22px;max-width:46ch;font-size:clamp(16.5px,1.5vw,19px);color:var(--muted-dark);
  animation:heroIn .9s var(--ease-out) .24s both;
}
.hero__cta{
  display:flex;gap:14px;flex-wrap:wrap;margin-top:34px;
  animation:heroIn .9s var(--ease-out) .36s both;
}
@keyframes heroIn{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}

.hero__stats{
  display:grid;grid-template-columns:repeat(4,auto);gap:34px;margin:52px 0 0;
  padding-top:28px;border-top:1px solid rgba(255,255,255,.12);
}
.hero__stats div{animation:heroIn .8s var(--ease-out) both;animation-delay:var(--d)}
.hero__stats dt{
  font-family:var(--font-display);font-size:29px;font-weight:500;letter-spacing:-.03em;
  color:#fff;line-height:1;
}
.hero__stats dd{margin:7px 0 0;font-size:12.5px;color:var(--muted-2);line-height:1.4;max-width:15ch}
.hero__art{will-change:transform;animation:heroIn 1.1s var(--ease-out) .3s both}

/* ---------- kirish + iqtibos ---------- */
.intro{display:grid;grid-template-columns:1.35fr 1fr;gap:56px;align-items:start}
.intro__txt p{color:var(--muted);font-size:16.5px}
.quote{
  margin:0;padding:32px 34px;border-radius:var(--r-lg);position:relative;
  background:var(--surface);border-left:3px solid var(--red);
}
.quote blockquote{
  margin:0 0 16px;font-family:var(--font-display);font-size:clamp(18px,1.9vw,22px);
  font-weight:400;font-style:italic;line-height:1.4;letter-spacing:-.02em;
}
.quote figcaption{font-family:var(--font-mono);font-size:12px;letter-spacing:.1em;color:var(--muted-2);text-transform:uppercase}

/* ---------- plitkalar ---------- */
.tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}

/* ---------- qatlamlar ---------- */
.layers .wrap{position:relative}

/* ---------- takliflar ---------- */
.offers{display:grid;grid-template-columns:.85fr 1.15fr;gap:56px;align-items:center}
.offers__head .section__head{margin-bottom:20px}

/* ---------- qanday ishlaymiz ---------- */
.whycard{position:relative;padding-top:34px}
.whycard__n{
  position:absolute;top:20px;right:22px;font-family:var(--font-mono);font-size:12px;
  letter-spacing:.1em;color:var(--line-2);
}
.whycard h3{font-size:17.5px}

@media(max-width:1080px){
  .hero__in{grid-template-columns:1fr;gap:40px}
  .hero__h1{max-width:20ch}
  .tiles{grid-template-columns:repeat(3,1fr)}
  .intro,.offers{grid-template-columns:1fr;gap:34px}
}
@media(max-width:760px){
  .hero{padding:52px 0 68px}
  .tiles{grid-template-columns:repeat(2,1fr);gap:14px}
  .hero__stats{grid-template-columns:1fr 1fr;gap:22px}
}
@media(max-width:480px){
  .tiles{grid-template-columns:1fr}
}
</style>
