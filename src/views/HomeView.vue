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
    <section class="hero dark-hero">
      <div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="mesh-lines" aria-hidden="true"></div>
      <SignalField :density="52" />
      <div class="grain" aria-hidden="true"></div>
      <div class="hero-fade" aria-hidden="true"></div>

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
.hero{padding:calc(var(--header-h) + 72px) 0 122px}
.hero__in{
  position:relative;z-index:2;
  display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center;
}
.hero__copy{will-change:transform}
.hero__h1{
  font-size:clamp(31px,3.9vw,52px);font-weight:500;max-width:15ch;
  letter-spacing:-.03em;line-height:1.08;
  background:linear-gradient(178deg,#fff 42%,rgba(207,214,232,.72));
  -webkit-background-clip:text;background-clip:text;color:transparent;
  animation:heroIn .9s var(--ease-out) .1s both;
}
.hero__sub{
  margin-top:22px;max-width:46ch;font-size:clamp(16px,1.35vw,18px);color:var(--muted-dark);
  animation:heroIn .9s var(--ease-out) .24s both;
}
.hero__cta{
  display:flex;gap:14px;flex-wrap:wrap;margin-top:36px;
  animation:heroIn .9s var(--ease-out) .36s both;
}
@keyframes heroIn{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}

.hero__stats{
  display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin:56px 0 0;
  padding-top:30px;border-top:1px solid rgba(255,255,255,.14);
}
.hero__stats div{
  position:relative;padding-right:22px;
  animation:heroIn .8s var(--ease-out) both;animation-delay:var(--d);
}
.hero__stats div+div{padding-left:26px}
.hero__stats div+div::before{
  content:'';position:absolute;left:0;top:2px;bottom:4px;width:1px;
  background:linear-gradient(180deg,rgba(255,255,255,.22),transparent);
}
.hero__stats dt{
  font-family:var(--font-display);font-size:clamp(24px,2.3vw,31px);font-weight:500;
  letter-spacing:-.035em;line-height:1;
  background:linear-gradient(180deg,#fff,rgba(142,155,228,.85));
  -webkit-background-clip:text;background-clip:text;color:transparent;
}
.hero__stats dd{margin:9px 0 0;font-size:12.5px;color:var(--muted-2);line-height:1.4;max-width:16ch}
/* faqat opacity — transform inline scroll-parallaks uchun bo'sh qoladi */
.hero__art{will-change:transform;animation:artIn 1.1s var(--ease-out) .3s both}
@keyframes artIn{from{opacity:0}to{opacity:1}}

/* ---------- kirish + iqtibos ---------- */
.intro{display:grid;grid-template-columns:1.3fr 1fr;gap:64px;align-items:start}
.intro__txt p{color:var(--muted);font-size:17px;line-height:1.7}
.intro__txt p:first-child{
  font-size:20px;line-height:1.55;color:var(--ink);font-weight:500;letter-spacing:-.015em;
}
.quote{
  position:relative;margin:0;padding:38px 36px 32px;border-radius:var(--r-xl);overflow:hidden;
  background:linear-gradient(160deg,#FFF 0%,#F5F7FC 60%,#EEF1F9 100%);
  border:1px solid var(--line);
  box-shadow:0 26px 60px -34px rgba(7,11,30,.35);
}
.quote::before{
  content:'';position:absolute;left:0;top:0;bottom:0;width:3px;
  background:linear-gradient(180deg,var(--red),rgba(226,59,51,0));
}
/* dekorativ qo'shtirnoq */
.quote::after{
  content:'\201C';position:absolute;right:14px;top:-26px;
  font-family:var(--font-display);font-size:170px;line-height:1;
  color:rgba(46,61,143,.07);pointer-events:none;
}
.quote blockquote{
  position:relative;margin:0 0 22px;font-family:var(--font-display);
  font-size:clamp(19px,2vw,24px);font-weight:500;line-height:1.35;letter-spacing:-.025em;
  color:var(--ink);
}
.quote figcaption{
  position:relative;display:flex;align-items:center;gap:12px;
  font-family:var(--font-mono);font-size:11.5px;letter-spacing:.16em;
  color:var(--muted-2);text-transform:uppercase;
}
.quote figcaption::before{content:'';width:26px;height:1px;background:var(--red);flex:none}

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
  .hero{padding:calc(var(--header-h) + 34px) 0 84px}
  .tiles{grid-template-columns:repeat(2,1fr);gap:14px}
  .hero__stats{grid-template-columns:1fr 1fr;gap:26px 0}
  .hero__stats div:nth-child(odd){padding-left:0}
  .hero__stats div:nth-child(odd)::before{display:none}
  .hero__stats div:nth-child(even){padding-left:20px}
}
@media(max-width:480px){
  .tiles{grid-template-columns:1fr}
}
</style>
