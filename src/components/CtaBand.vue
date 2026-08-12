<script setup>
import { useLang } from '@/composables/useLang.js'
import { useAnalytics } from '@/composables/useAnalytics.js'

const props = defineProps({ source: { type: String, default: 'band' } })
const { t } = useLang()
const { track } = useAnalytics()
</script>

<template>
  <section class="section section--tight">
    <div class="wrap">
      <div class="band" v-reveal:scale>
        <div class="band__glow" aria-hidden="true"></div>
        <div class="band__txt">
          <h2>{{ t('p.ctaTitle') }}</h2>
          <p>{{ t('p.ctaText') }}</p>
        </div>
        <RouterLink
          :to="{ path: '/contacts', hash: '#lead' }" class="btn btn--primary" v-magnet="0.16"
          @click="track('cta_click', { cta: props.source })">
          {{ t('cta.discuss') }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.band{
  position:relative;overflow:hidden;
  display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;
  padding:44px 48px;border-radius:var(--r-xl);
  background:linear-gradient(120deg,var(--ink) 0%,var(--ink-3) 58%,var(--blue) 130%);
  color:#fff;box-shadow:var(--e-dark);
}
.band__glow{
  position:absolute;width:420px;height:420px;right:-90px;top:-180px;border-radius:50%;
  background:radial-gradient(circle,rgba(226,59,51,.42),transparent 65%);
  animation:bandGlow 9s ease-in-out infinite;
}
@keyframes bandGlow{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,40px)}}
.band__txt{position:relative;max-width:620px}
.band h2{color:#fff;margin-bottom:10px}
.band p{color:var(--muted-dark);margin:0;font-size:16px}
.band .btn{position:relative;flex:none}
@media(max-width:700px){.band{padding:32px 26px}}
</style>
