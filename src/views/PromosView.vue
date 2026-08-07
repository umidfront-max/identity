<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { PROMOS } from '@/data/promos.js'
import { PROMO_IMAGES } from '@/data/promoImages.js'
import PageHero from '@/components/PageHero.vue'
import CtaBand from '@/components/CtaBand.vue'

const { t, p } = useLang()

const promos = computed(() => PROMOS.map(x => ({
  slug: x.slug,
  code: x.code,
  cover: x.cover ? PROMO_IMAGES[x.cover] : null,
  ...p(x)
})))
</script>

<template>
  <div>
    <PageHero :title="t('promos.title')" :lead="t('promos.lead')" :crumb="t('nav.promos')" />

    <section class="section">
      <div class="wrap promos">
        <RouterLink
          v-for="(pr, i) in promos" :key="pr.slug"
          :to="`/promo/${pr.slug}`" class="promo" v-reveal="i * 90">

          <div class="promo__media" :class="{ 'is-blank': !pr.cover }">
            <img v-if="pr.cover" :src="pr.cover" :alt="pr.title" loading="lazy" decoding="async">
            <span v-else class="promo__mark" aria-hidden="true">{{ pr.code }}</span>
            <span class="promo__badge">{{ pr.badge }}</span>
          </div>

          <div class="promo__body">
            <h3>{{ pr.title }}</h3>
            <p>{{ pr.lead }}</p>
            <span class="arrow-link">{{ t('cta.details') }} <i>&rarr;</i></span>
          </div>
        </RouterLink>
      </div>
    </section>

    <CtaBand source="promos" />
  </div>
</template>

<style scoped>
.promos{display:grid;grid-template-columns:1fr 1fr;gap:26px}
.promo{
  display:flex;flex-direction:column;overflow:hidden;
  background:var(--paper);border:1px solid var(--line);border-radius:var(--r-lg);
  box-shadow:var(--e1);
  transition:transform .4s var(--ease),box-shadow .4s var(--ease),border-color .4s;
}
.promo:hover{transform:translateY(-4px);box-shadow:var(--e2);border-color:var(--line-2)}

.promo__media{position:relative;aspect-ratio:16/9;overflow:hidden;background:var(--ink-2)}
.promo__media img{
  width:100%;height:100%;object-fit:cover;display:block;
  transition:transform .8s var(--ease);
}
.promo:hover .promo__media img{transform:scale(1.05)}
.promo__media.is-blank{
  display:grid;place-items:center;
  background:
    radial-gradient(90% 80% at 78% 8%,#222E6E 0%,transparent 60%),
    linear-gradient(158deg,#070B1E,#141D45);
}
.promo__mark{
  font-family:var(--font-mono);font-size:38px;letter-spacing:.14em;
  color:rgba(142,155,228,.4);
}
.promo__badge{
  position:absolute;left:16px;top:16px;padding:6px 13px;border-radius:999px;
  background:var(--red);color:#fff;
  font-family:var(--font-mono);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;
}

.promo__body{display:flex;flex-direction:column;gap:10px;padding:26px 28px 28px}
.promo__body h3{font-size:20px}
.promo__body p{flex:1;margin:0;font-size:15.5px;color:var(--muted)}
.promo:hover .arrow-link i{transform:translateX(5px)}

@media(max-width:860px){.promos{grid-template-columns:1fr}}
</style>
