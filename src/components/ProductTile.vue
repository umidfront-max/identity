<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { useAnalytics } from '@/composables/useAnalytics.js'
import { ICONS } from '@/data/catalog.js'

const props = defineProps({
  tile: { type: Object, required: true },
  index: { type: Number, default: 0 }
})

const { t } = useLang()
const { track, bumpInterest } = useAnalytics()

const to = computed(() => props.tile.to || (props.tile.slug ? `/p/${props.tile.slug}` : '/contacts'))
const icon = computed(() => ICONS[props.tile.icon] || '')

function onClick () {
  bumpInterest(props.tile.slug)
  track('product_card_click', { product: props.tile.slug || 'other', position: props.index + 1 })
}
</script>

<template>
  <RouterLink
    :to="to" class="tile" v-tilt="6" v-reveal="index * 55"
    @click="onClick">
    <span class="tile__sheen" aria-hidden="true"></span>
    <span class="tile__icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="icon"></svg>
    </span>
    <h3>{{ t(tile.k + '.n') }}</h3>
    <p>{{ t(tile.k + '.d') }}</p>
    <span class="tile__more">{{ t('cta.details') }} <i>&rarr;</i></span>
  </RouterLink>
</template>

<style scoped>
.tile{
  position:relative;overflow:hidden;isolation:isolate;
  display:flex;flex-direction:column;
  padding:28px 26px 24px;border-radius:var(--r-lg);
  background:var(--paper);border:1px solid var(--line);
  transform-style:preserve-3d;
  transform:perspective(760px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));
  transition:transform .4s var(--ease),box-shadow .4s var(--ease),border-color .4s;
}
.tile:hover{box-shadow:var(--e3);border-color:transparent}
.tile__sheen{
  position:absolute;inset:0;z-index:-1;border-radius:inherit;opacity:0;
  background:radial-gradient(280px 200px at var(--mx,50%) var(--my,50%),rgba(91,111,214,.14),transparent 70%);
  transition:opacity .4s;
}
.tile:hover .tile__sheen{opacity:1}
.tile::after{
  content:'';position:absolute;left:0;right:0;top:0;height:2px;
  background:linear-gradient(90deg,var(--red),var(--azure));
  transform:scaleX(0);transform-origin:left;transition:transform .5s var(--ease-out);
}
.tile:hover::after{transform:scaleX(1)}

.tile__icon{
  width:48px;height:48px;border-radius:14px;display:grid;place-items:center;
  background:var(--surface);color:var(--blue);margin-bottom:18px;
  transition:background .35s,color .35s,transform .45s var(--ease);
}
.tile__icon svg{width:24px;height:24px}
.tile:hover .tile__icon{background:var(--ink);color:#fff;transform:translateZ(24px) rotate(-4deg)}

.tile h3{margin-bottom:8px;font-size:19px}
.tile p{color:var(--muted);font-size:15px;margin:0 0 18px;flex:1}
.tile__more{
  display:inline-flex;align-items:center;gap:7px;font-size:13.5px;font-weight:700;color:var(--blue);
}
.tile__more i{font-style:normal;transition:transform .3s var(--ease)}
.tile:hover .tile__more i{transform:translateX(5px)}
</style>
