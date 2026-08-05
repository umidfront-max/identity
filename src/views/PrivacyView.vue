<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { PRIVACY } from '@/data/privacy.js'
import PageHero from '@/components/PageHero.vue'

const { t, lang } = useLang()
const doc = computed(() => PRIVACY[lang.value] || PRIVACY.ru || PRIVACY.uz)
</script>

<template>
  <div>
    <PageHero :title="doc.title" :lead="doc.updated" :crumb="t('footer.privacy')" />
    <section class="section section--tight">
      <div class="wrap">
        <article class="prose" v-html="doc.html"></article>
      </div>
    </section>
  </div>
</template>
