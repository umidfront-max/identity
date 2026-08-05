<script setup>
import { useLang } from '@/composables/useLang.js'
import PageHero from '@/components/PageHero.vue'

const { t } = useLang()
</script>

<template>
  <div>
    <PageHero title="404" :lead="t('contacts.lead')" crumb="404" />
    <section class="section">
      <div class="wrap">
        <RouterLink to="/" class="btn btn--dark" v-magnet="0.15">{{ t('nav.home') }}</RouterLink>
      </div>
    </section>
  </div>
</template>
