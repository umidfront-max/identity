/* Sahifa meta-teglarini boshqaradi: title, description, keywords,
   Open Graph / Twitter kartalari, canonical, hreflang va JSON-LD.

   Sayt SPA bo'lgani uchun teglar marshrut va til o'zgarganda qayta yoziladi. */
import { SITE, seoFor } from '@/data/seo.js'

const LANGS = ['uz', 'ru', 'en']
const DEFAULT_LANG = 'uz'

/* Nomi bo'yicha <meta> topadi yoki yaratadi. attr: 'name' yoki 'property'. */
function meta (attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/* rel bo'yicha <link> topadi yoki yaratadi (hreflang bilan farqlanadi). */
function link (rel, href, hreflang) {
  const sel = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector(sel)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/* Kompaniya haqida JSON-LD — qidiruv tizimlari uchun tuzilgan ma'lumot */
function jsonLd (lang) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    legalName: SITE.legal,
    url: SITE.url,
    logo: SITE.image,
    email: 'info@identity-uz.com',
    telephone: '+998785551175',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UZ',
      addressLocality: 'Tashkent',
      streetAddress: 'Shayxontohur, Jangoh, 37'
    },
    areaServed: 'UZ',
    inLanguage: lang
  }
  let el = document.getElementById('ld-org')
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = 'ld-org'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/* Joriy yo'l — fragmentsiz va so'rov parametrlarisiz */
function cleanPath () {
  return location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '')
}

/* Til uchun manzil. Sayt tili ?lang= parametri bilan tanlanadi, shuning
   uchun har bir til alohida manzilga ega bo'ladi va qidiruv tizimlari
   uchalasini ham indekslay oladi. Asosiy til (uz) parametrsiz. */
function urlFor (lang) {
  const url = SITE.url + cleanPath()
  return lang === DEFAULT_LANG ? url : url + '?lang=' + lang
}

export function applySeo (routeName, slug, lang) {
  const { title, description, keywords } = seoFor(routeName, slug, lang)

  document.title = title
  document.documentElement.setAttribute('lang', lang)

  meta('name', 'description', description)
  meta('name', 'keywords', keywords)

  /* canonical — shu til nusxasining o'z manzili */
  const url = urlFor(lang)
  meta('property', 'og:title', title)
  meta('property', 'og:description', description)
  meta('property', 'og:type', routeName === 'home' ? 'website' : 'article')
  meta('property', 'og:url', url)
  meta('property', 'og:image', SITE.image)
  meta('property', 'og:site_name', SITE.name)
  meta('property', 'og:locale', { uz: 'uz_UZ', ru: 'ru_RU', en: 'en_US' }[lang] || 'uz_UZ')

  meta('name', 'twitter:card', 'summary_large_image')
  meta('name', 'twitter:title', title)
  meta('name', 'twitter:description', description)
  meta('name', 'twitter:image', SITE.image)

  link('canonical', url)
  /* hreflang — har bir til o'z manzilini ko'rsatadi, shunda Google
     ruscha so'rovga ruscha sahifani, o'zbekchaga o'zbekchasini chiqaradi. */
  for (const l of LANGS) link('alternate', urlFor(l), l)
  link('alternate', urlFor(DEFAULT_LANG), 'x-default')

  jsonLd(lang)
}
