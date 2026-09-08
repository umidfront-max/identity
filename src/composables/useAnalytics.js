/* Google Analytics 4 / GTM / Yandex.Metrika + mahsulotga qiziqishni kuzatish */
import { CONFIG } from '@/data/config.js'

const LS_INTEREST = 'id_interest'
let loaded = false

window.dataLayer = window.dataLayer || []
function gtag () { window.dataLayer.push(arguments) }
if (!window.gtag) window.gtag = gtag

export function loadAnalytics () {
  if (loaded) return
  loaded = true
  if (CONFIG.gaMeasurementId) {
    const s = document.createElement('script')
    s.async = true
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(CONFIG.gaMeasurementId)
    document.head.appendChild(s)
    gtag('js', new Date())
    gtag('config', CONFIG.gaMeasurementId, { send_page_view: false })
  }
  if (CONFIG.gtmId) {
    const g = document.createElement('script')
    g.async = true
    g.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(CONFIG.gtmId)
    document.head.appendChild(g)
  }
  if (CONFIG.yandexMetrikaId) loadMetrika(CONFIG.yandexMetrikaId)
}

/* Yandex.Metrika. defer:true — Metrika birinchi ko'rishni o'zi yubormaydi:
   sayt SPA bo'lgani uchun har bir sahifani o'zimiz 'hit' bilan sanaymiz
   (aks holda birinchi sahifa ikki marta hisoblanardi). */
function loadMetrika (id) {
  const src = 'https://mc.yandex.ru/metrika/tag.js?id=' + encodeURIComponent(id)
  ;(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) }
    m[i].l = 1 * new Date()
    for (let j = 0; j < e.scripts.length; j++) { if (e.scripts[j].src === r) return }
    k = e.createElement(t); a = e.getElementsByTagName(t)[0]
    k.async = 1; k.src = r; a.parentNode.insertBefore(k, a)
  })(window, document, 'script', src, 'ym')

  window.ym(id, 'init', {
    defer: true,
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: 'dataLayer',
    accurateTrackBounce: true,
    trackLinks: true
  })
}

export function readInterest () {
  try { return JSON.parse(localStorage.getItem(LS_INTEREST) || '{}') } catch (e) { return {} }
}

export function bumpInterest (slug) {
  if (!slug) return
  const d = readInterest()
  d[slug] = (d[slug] || 0) + 1
  try { localStorage.setItem(LS_INTEREST, JSON.stringify(d)) } catch (e) { /* ignore */ }
}

export function topInterest () {
  const d = readInterest()
  let best = null, max = 0
  for (const k in d) if (d[k] > max) { max = d[k]; best = k }
  return best
}

export function useAnalytics () {
  function track (event, params = {}) {
    const data = { ...params, page_path: location.hash || '#/' }
    if (window.gtag) window.gtag('event', event, data)
    window.dataLayer.push({ event, ...data })

    /* Metrika: sahifa ko'rish — 'hit', qolgan hodisalar — maqsad (goal) */
    const ymId = CONFIG.yandexMetrikaId
    if (ymId && window.ym) {
      if (event === 'page_view') {
        window.ym(ymId, 'hit', location.href, {
          title: params.page_title,
          referer: document.referrer
        })
      } else {
        window.ym(ymId, 'reachGoal', event, data)
      }
    }
  }
  return { track, bumpInterest, topInterest, readInterest }
}
