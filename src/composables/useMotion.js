/* Animatsiya vositalari: reveal, tilt, magnit tugma, raqam sanash, parallaks */
import { onMounted, onBeforeUnmount, ref } from 'vue'

const reduced = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---- v-reveal: ekranga kirganda ochilish (stagger uchun `:delay`) ---- */

/* Scroll yo'nalishini kuzatamiz: yuqoriga qaytilganda pastdan ko'tarilib
   chiqadigan animatsiya harakatga qarshi ketadi va "sakrash" hissini beradi. */
let lastY = 0
let scrollingUp = false
if (typeof window !== 'undefined') {
  lastY = window.scrollY
  window.addEventListener('scroll', () => {
    scrollingUp = window.scrollY < lastY
    lastY = window.scrollY
  }, { passive: true })
}

let observer = null
function getObserver () {
  if (observer) return observer
  observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      /* Yuqoriga scroll qilinganda yoki element allaqachon ekran tepasidan
         o'tib ketganda — animatsiyasiz, darhol ko'rsatamiz. */
      if (scrollingUp || e.boundingClientRect.top < 0) {
        e.target.style.setProperty('--d', '0ms')
        e.target.setAttribute('data-reveal-instant', '')
      }
      e.target.setAttribute('data-reveal-in', '')
      observer.unobserve(e.target)
    })
  }, { rootMargin: '0px 0px 14% 0px', threshold: 0 })
  return observer
}

/* Ko'rinish holati class emas, atribut orqali belgilanadi: element ustida
   dinamik :class bo'lsa (masalan LayerStack'dagi is-active), Vue class
   atributini butunlay qayta yozadi va qo'shilgan class yo'qolib ketadi. */
export const reveal = {
  mounted (el, binding) {
    el.setAttribute('data-reveal', binding.arg || 'up')
    const d = binding.value
    if (d) el.style.setProperty('--d', (typeof d === 'number' ? d : 0) + 'ms')
    if (reduced()) { el.setAttribute('data-reveal-in', ''); return }
    getObserver().observe(el)
  },
  unmounted (el) {
    if (observer) observer.unobserve(el)
  }
}

/* ---- v-tilt: sichqoncha ortidan 3D egilish ---- */
export const tilt = {
  mounted (el, binding) {
    if (reduced()) return
    const max = binding.value || 7
    const move = ev => {
      const r = el.getBoundingClientRect()
      const px = (ev.clientX - r.left) / r.width
      const py = (ev.clientY - r.top) / r.height
      el.style.setProperty('--rx', ((0.5 - py) * max).toFixed(2) + 'deg')
      el.style.setProperty('--ry', ((px - 0.5) * max).toFixed(2) + 'deg')
      el.style.setProperty('--mx', (px * 100).toFixed(1) + '%')
      el.style.setProperty('--my', (py * 100).toFixed(1) + '%')
    }
    const leave = () => {
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    el.__tilt = { move, leave }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
  },
  unmounted (el) {
    if (!el.__tilt) return
    el.removeEventListener('mousemove', el.__tilt.move)
    el.removeEventListener('mouseleave', el.__tilt.leave)
  }
}

/* ---- v-magnet: tugma kursorga biroz tortiladi ---- */
export const magnet = {
  mounted (el, binding) {
    if (reduced()) return
    const pull = binding.value || 0.22
    const move = ev => {
      const r = el.getBoundingClientRect()
      const x = ev.clientX - (r.left + r.width / 2)
      const y = ev.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${x * pull}px, ${y * pull}px)`
      el.style.setProperty('--mx', ((ev.clientX - r.left) / r.width * 100) + '%')
      el.style.setProperty('--my', ((ev.clientY - r.top) / r.height * 100) + '%')
    }
    const leave = () => { el.style.transform = '' }
    el.__mag = { move, leave }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
  },
  unmounted (el) {
    if (!el.__mag) return
    el.removeEventListener('mousemove', el.__mag.move)
    el.removeEventListener('mouseleave', el.__mag.leave)
  }
}

/* ---- useCountUp: ko'ringanda raqamni sanab chiqadi ---- */
export function useCountUp (target, duration = 1400) {
  const el = ref(null)
  const value = ref(0)
  let io = null

  onMounted(() => {
    if (reduced()) { value.value = target; return }
    io = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const step = now => {
        const k = Math.min(1, (now - t0) / duration)
        const eased = 1 - Math.pow(1 - k, 3)
        value.value = target * eased
        if (k < 1) requestAnimationFrame(step)
        else value.value = target
      }
      requestAnimationFrame(step)
    }, { threshold: 0.4 })
    if (el.value) io.observe(el.value)
  })

  onBeforeUnmount(() => io && io.disconnect())
  return { el, value }
}

/* ---- useScrollY: sahifa aylantirish holati (parallaks va header uchun) ---- */
export function useScrollY () {
  const y = ref(0)
  const onScroll = () => { y.value = window.scrollY }
  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
  return y
}

export const prefersReducedMotion = reduced
