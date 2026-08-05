<script setup>
import { computed, watch, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'
import CallFab from '@/components/CallFab.vue'
import { useLang } from '@/composables/useLang.js'
import { useAnalytics } from '@/composables/useAnalytics.js'
import { PRODUCTS } from '@/data/products.js'

const route = useRoute()
const { t, p, lang } = useLang()
const { track } = useAnalytics()
const booted = ref(false)

const pageTitle = computed(() => {
  if (route.name === 'product') {
    const prod = PRODUCTS.find(x => x.slug === route.params.slug)
    return prod ? p(prod).name : t('nav.products')
  }
  const map = {
    home: t('hero.title'),
    about: t('about.title'),
    products: t('products.title'),
    promos: t('promos.title'),
    contacts: t('contacts.title'),
    privacy: t('footer.privacy')
  }
  return map[route.name] || 'Identity'
})

/* Sarlavha va analitika — har bir marshrut/til o'zgarishida */
watch([pageTitle, lang], () => {
  document.title = pageTitle.value + t('meta.suffix')
}, { immediate: true })

watch(() => route.fullPath, () => {
  track('page_view', {
    page_title: pageTitle.value,
    language: lang.value,
    page_location: location.href
  })
}, { immediate: true })

onMounted(() => {
  requestAnimationFrame(() => { booted.value = true })
})
</script>

<template>
  <ScrollProgress />
  <a class="skip" href="#main">{{ t('skip') }}</a>
  <AppHeader />

  <main id="main" :class="['app-main', { 'is-booted': booted }]">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.fullPath + lang" />
      </Transition>
    </RouterView>
  </main>

  <AppFooter />
  <CallFab />
</template>

<style>
.app-main{min-height:60vh}
</style>
