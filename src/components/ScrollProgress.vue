<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const pct = ref(0)
function onScroll () {
  const h = document.documentElement.scrollHeight - window.innerHeight
  pct.value = h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0
}
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="progress" aria-hidden="true"><span :style="{ transform: `scaleX(${pct / 100})` }"></span></div>
</template>

<style scoped>
.progress{position:fixed;top:0;left:0;right:0;height:2px;z-index:80;pointer-events:none}
.progress span{
  display:block;height:100%;transform-origin:left;
  background:linear-gradient(90deg,var(--blue),var(--azure) 55%,var(--red));
  transition:transform .1s linear;
}
</style>
