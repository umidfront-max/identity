<script setup>
/* Fon uchun "signal maydoni": nuqtalar va ular orasidagi bog'lanishlar.
   Kursor yaqinlashganda tarmoq jonlanadi. Reduced motion — o'chadi. */
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { prefersReducedMotion } from '@/composables/useMotion.js'

const props = defineProps({
  density: { type: Number, default: 46 },
  color: { type: String, default: '142,155,228' },
  accent: { type: String, default: '226,59,51' }
})

const cvs = ref(null)
let raf = null, ro = null, pts = [], w = 0, h = 0, dpr = 1
const mouse = { x: -9999, y: -9999 }

function seed () {
  pts = []
  const n = Math.round(props.density * Math.min(1.6, (w * h) / 900000 + 0.55))
  for (let i = 0; i < n; i++) {
    pts.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      r: Math.random() * 1.4 + 0.6
    })
  }
}

function resize () {
  const el = cvs.value
  if (!el) return
  dpr = Math.min(2, window.devicePixelRatio || 1)
  w = el.clientWidth; h = el.clientHeight
  el.width = w * dpr; el.height = h * dpr
  el.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0)
  seed()
}

function frame () {
  const el = cvs.value
  if (!el) return
  const ctx = el.getContext('2d')
  ctx.clearRect(0, 0, w, h)

  for (const p of pts) {
    p.x += p.vx; p.y += p.vy
    if (p.x < 0 || p.x > w) p.vx *= -1
    if (p.y < 0 || p.y > h) p.vy *= -1
  }

  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const a = pts[i], b = pts[j]
      const d = Math.hypot(a.x - b.x, a.y - b.y)
      if (d < 122) {
        ctx.strokeStyle = `rgba(${props.color},${(1 - d / 122) * 0.22})`
        ctx.lineWidth = 0.7
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
      }
    }
  }

  for (const p of pts) {
    const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y)
    const near = dm < 150
    ctx.fillStyle = near
      ? `rgba(${props.accent},${0.85 - dm / 220})`
      : `rgba(${props.color},.5)`
    ctx.beginPath()
    ctx.arc(p.x, p.y, near ? p.r * 1.7 : p.r, 0, Math.PI * 2)
    ctx.fill()
  }

  raf = requestAnimationFrame(frame)
}

function onMove (e) {
  const el = cvs.value
  if (!el) return
  const r = el.getBoundingClientRect()
  mouse.x = e.clientX - r.left
  mouse.y = e.clientY - r.top
}

onMounted(() => {
  if (prefersReducedMotion()) return
  resize()
  ro = new ResizeObserver(resize)
  ro.observe(cvs.value)
  window.addEventListener('mousemove', onMove)
  raf = requestAnimationFrame(frame)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  if (ro) ro.disconnect()
  window.removeEventListener('mousemove', onMove)
})
</script>

<template>
  <canvas class="field" ref="cvs" aria-hidden="true"></canvas>
</template>

<style scoped>
.field{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;opacity:.85}
</style>
