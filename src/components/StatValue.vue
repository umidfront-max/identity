<script setup>
/* Ko'rsatkich qiymati: "99,8%" yoki "20 mln+" kabi matnlarda
   boshidagi sonni sanab chiqadi, qolgan qismini o'zgarishsiz qoldiradi. */
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { prefersReducedMotion } from '@/composables/useMotion.js'

const props = defineProps({
  text: { type: String, required: true },
  duration: { type: Number, default: 1400 }
})

const el = ref(null)
const progress = ref(prefersReducedMotion() ? 1 : 0)
let io = null

const parsed = computed(() => {
  const m = String(props.text).match(/^(\d+(?:[.,]\d+)?)(.*)$/s)
  if (!m) return null
  const sep = m[1].includes(',') ? ',' : '.'
  const num = parseFloat(m[1].replace(',', '.'))
  const decimals = (m[1].split(/[.,]/)[1] || '').length
  return { num, decimals, sep, rest: m[2] }
})

const shown = computed(() => {
  if (!parsed.value) return props.text
  const { num, decimals, sep, rest } = parsed.value
  const v = (num * progress.value).toFixed(decimals)
  return v.replace('.', sep) + rest
})

onMounted(() => {
  if (prefersReducedMotion() || !parsed.value) return
  io = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return
    io.disconnect()
    const t0 = performance.now()
    const step = now => {
      const k = Math.min(1, (now - t0) / props.duration)
      progress.value = 1 - Math.pow(1 - k, 3)
      if (k < 1) requestAnimationFrame(step)
      else progress.value = 1
    }
    requestAnimationFrame(step)
  }, { threshold: 0.4 })
  if (el.value) io.observe(el.value)
})

onBeforeUnmount(() => io && io.disconnect())
</script>

<template>
  <b ref="el" class="stat">{{ shown }}</b>
</template>

<style scoped>
.stat{
  display:block;font-family:var(--font-display);font-weight:600;letter-spacing:-.035em;
  font-size:clamp(30px,3.8vw,48px);line-height:1;font-variant-numeric:tabular-nums;
}
</style>
