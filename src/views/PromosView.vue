<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang.js'
import PageHero from '@/components/PageHero.vue'
import CtaBand from '@/components/CtaBand.vue'

const { t } = useLang()
const promos = computed(() => [1, 2, 3].map(n => ({
  badge: t(`home.slide${n}.badge`),
  title: t(`home.slide${n}.title`),
  text: t(`home.slide${n}.text`)
})))
</script>

<template>
  <div>
    <PageHero :title="t('promos.title')" :lead="t('promos.lead')" :crumb="t('nav.promos')" />

    <section class="section">
      <div class="wrap grid grid--3">
        <article v-for="(pr, i) in promos" :key="pr.title" class="card promo" v-reveal="i * 90">
          <span class="promo__badge">{{ pr.badge }}</span>
          <h3>{{ pr.title }}</h3>
          <p>{{ pr.text }}</p>
          <RouterLink to="/contacts" class="arrow-link">{{ t('cta.pilot') }} <i>&rarr;</i></RouterLink>
        </article>
      </div>
    </section>

    <CtaBand source="promos" />
  </div>
</template>

<style scoped>
.promo{display:flex;flex-direction:column;gap:12px;padding:30px 28px}
.promo__badge{
  font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--red);
}
.promo p{flex:1}
</style>
