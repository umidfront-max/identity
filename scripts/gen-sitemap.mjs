/* sitemap.xml ni mahsulot va aksiya ro'yxatidan yasaydi.
   npm run build oldidan avtomatik ishlaydi (package.json: prebuild),
   shuning uchun yangi mahsulot qo'shilsa sitemap o'zi yangilanadi. */
import { writeFileSync } from 'node:fs'
import { PRODUCTS } from '../src/data/products.js'
import { PROMOS } from '../src/data/promos.js'
import { SITE } from '../src/data/seo.js'

/* changefreq/priority — qidiruv tizimlariga yangilanish tezligi haqida ishora */
const pages = [
  { loc: '/', freq: 'weekly', pri: '1.0' },
  { loc: '/products', freq: 'weekly', pri: '0.9' },
  { loc: '/promos', freq: 'weekly', pri: '0.8' },
  { loc: '/about', freq: 'monthly', pri: '0.7' },
  { loc: '/contacts', freq: 'monthly', pri: '0.7' },
  { loc: '/privacy', freq: 'yearly', pri: '0.3' },
  ...PRODUCTS.map(p => ({ loc: `/p/${p.slug}`, freq: 'monthly', pri: '0.9' })),
  ...PROMOS.map(p => ({ loc: `/promo/${p.slug}`, freq: 'weekly', pri: '0.8' }))
]

const today = new Date().toISOString().slice(0, 10)

/* Sayt tili ?lang= parametri bilan tanlanadi, shuning uchun har bir sahifa
   uch tilda uch alohida manzil. Har birida qolgan tillarga xhtml:link
   ishorasi turadi - Google qaysi so'rovga qaysi nusxani chiqarishni biladi. */
const LANGS = ['uz', 'ru', 'en']
const DEFAULT_LANG = 'uz'
const urlFor = (loc, l) => SITE.url + loc + (l === DEFAULT_LANG ? '' : '?lang=' + l)

const body = pages.flatMap(p => LANGS.map(l => `  <url>
    <loc>${urlFor(p.loc, l)}</loc>
${LANGS.map(a => `    <xhtml:link rel="alternate" hreflang="${a}" href="${urlFor(p.loc, a)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(p.loc, DEFAULT_LANG)}"/>
    <lastmod>${today}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.pri}</priority>
  </url>`)).join('\n')

writeFileSync('public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<!-- Avtomatik yasaladi: scripts/gen-sitemap.mjs. Qo'lda tahrirlamang. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`)

console.log('sitemap.xml:', pages.length * LANGS.length, 'ta manzil (' + pages.length + ' sahifa x ' + LANGS.length + ' til)')
