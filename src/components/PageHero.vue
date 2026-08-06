<script setup>
import { useLang } from '@/composables/useLang.js'
import SignalField from '@/components/SignalField.vue'

defineProps({ title: String, lead: String, code: String, crumb: String })
const { t } = useLang()
</script>

<template>
  <section class="phero dark-hero">
    <div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="mesh-lines" aria-hidden="true"></div>
    <SignalField :density="34" />
    <div class="grain" aria-hidden="true"></div>
    <div class="wrap phero__in">
      <nav class="crumbs">
        <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
        <span>/</span>
        <em>{{ crumb || title }}</em>
      </nav>
      <div class="phero__code" v-if="code">{{ code }}</div>
      <h1>{{ title }}</h1>
      <p v-if="lead" class="lead">{{ lead }}</p>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.phero{padding:calc(var(--header-h) + 58px) 0 92px}
/* pastki chekka — yorug' hairline */
.phero::after{
  content:'';position:absolute;left:0;right:0;bottom:0;height:1px;z-index:2;
  background:linear-gradient(90deg,transparent,rgba(142,155,228,.45),transparent);
}
.phero__in{position:relative;z-index:2;max-width:820px}
.crumbs{
  display:flex;gap:10px;align-items:center;font-family:var(--font-mono);font-size:11.5px;
  letter-spacing:.1em;text-transform:uppercase;color:var(--muted-dark);margin-bottom:22px;
  animation:fadeUp .6s var(--ease-out) both;
}
.crumbs em{font-style:normal;color:#fff}
.crumbs a:hover{color:var(--red-soft)}
.phero__code{
  display:inline-block;font-family:var(--font-mono);font-size:11.5px;letter-spacing:.16em;
  color:var(--red-soft);border:1px solid rgba(226,59,51,.4);border-radius:999px;
  padding:5px 12px;margin-bottom:16px;
  animation:fadeUp .6s var(--ease-out) .05s both;
}
.phero h1{animation:fadeUp .7s var(--ease-out) .1s both}
.phero .lead{color:var(--muted-dark);margin-top:18px;animation:fadeUp .7s var(--ease-out) .2s both}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
</style>
