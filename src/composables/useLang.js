/* Til boshqaruvi — global reaktiv holat (Composition API) */
import { ref, computed, watch } from 'vue'
import { LANGS } from '@/data/langs.js'
import { MESSAGES } from '@/data/messages.js'
import { CONFIG } from '@/data/config.js'

const LS_KEY = 'id_lang'

function supported (code) {
  return LANGS.some(l => l.code === code)
}

function detect () {
  const q = new URLSearchParams(location.search).get('lang')
  if (q && supported(q)) return q
  try {
    const s = localStorage.getItem(LS_KEY)
    if (s && supported(s)) return s
  } catch (e) { /* localStorage yopiq bo'lishi mumkin */ }
  if (supported(CONFIG.defaultLang)) return CONFIG.defaultLang
  const n = (navigator.language || '').slice(0, 2).toLowerCase()
  return supported(n) ? n : 'uz'
}

const lang = ref(detect())

watch(lang, v => {
  try { localStorage.setItem(LS_KEY, v) } catch (e) { /* ignore */ }
  document.documentElement.lang = v
}, { immediate: true })

export function useLang () {
  /* t('kalit') — joriy tildagi matn, topilmasa default tilga qaytadi */
  function t (key) {
    const dict = MESSAGES[lang.value] || {}
    if (dict[key] != null) return dict[key]
    const fb = MESSAGES[CONFIG.defaultLang] || MESSAGES.ru || {}
    return fb[key] != null ? fb[key] : key
  }

  /* p(obj) — ko'p tilli obyektdan joriy til bo'limini oladi */
  function p (obj) {
    if (!obj) return {}
    return obj[lang.value] || obj[CONFIG.defaultLang] || obj.ru || obj.en || {}
  }

  function setLang (code) {
    if (supported(code)) lang.value = code
  }

  return {
    lang,
    langs: LANGS,
    current: computed(() => LANGS.find(l => l.code === lang.value) || LANGS[0]),
    t,
    p,
    setLang
  }
}
