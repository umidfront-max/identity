/* Google Analytics 4 / GTM + mahsulotga qiziqishni kuzatish */
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
  }
  return { track, bumpInterest, topInterest, readInterest }
}
