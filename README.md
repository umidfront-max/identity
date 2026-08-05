# Identity — korporativ sayt (Vue 3 + Vite)

Kiberxavfsizlik va biometrik identifikatsiya bo'yicha «IDENTITY» MChJ sayti.
Vue 3 (Composition API, `<script setup>`), Vite, vue-router. Uch tilli: **uz / ru / en**.

---

## Ishga tushirish

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ papkasiga yig'iladi
npm run preview    # yig'ilgan versiyani tekshirish
```

Node.js 18+ talab qilinadi.

---

## Struktura

```
src/
├─ main.js                  # ilova kirish nuqtasi, direktivalar ro'yxatdan o'tadi
├─ App.vue                  # header + footer + sahifa o'tishlari + analitika
├─ router/index.js          # hash-routing (statik hostingda ham ishlaydi)
│
├─ data/                    # BARCHA MATN VA MA'LUMOTLAR SHU YERDA
│  ├─ config.js             # GA ID, forma manzili, aloqa ma'lumotlari
│  ├─ langs.js              # tillar ro'yxati
│  ├─ messages.js           # interfeys matnlari (uz/ru/en) — 190+ kalit
│  ├─ products.js           # 10 ta mahsulot, har biri 3 tilda
│  ├─ privacy.js            # maxfiylik siyosati matni
│  └─ catalog.js            # plitkalar, himoya qatlamlari, hamkorlar, ikonkalar
│
├─ composables/
│  ├─ useLang.js            # til holati + t() va p() funksiyalari
│  ├─ useAnalytics.js       # GA4/GTM, qiziqishni kuzatish
│  └─ useMotion.js          # v-reveal, v-tilt, v-magnet, useScrollY
│
├─ components/              # 15 ta qayta ishlatiladigan komponent
└─ views/                   # 8 ta sahifa (lazy-load)
```

---

## Sozlash

### 1. Google Analytics

`src/data/config.js`:

```js
gaMeasurementId: 'G-XXXXXXXXXX',   // bo'sh bo'lsa GA yuklanmaydi
gtmId: 'GTM-XXXXXXX',              // ixtiyoriy
```

Yuboriladigan hodisalar:

| Hodisa | Qachon | Parametrlar |
|---|---|---|
| `page_view` | har bir sahifada | `page_title`, `language` |
| `product_card_click` | plitka/katalog bosilganda | `product`, `position` |
| `view_item` | mahsulot sahifasi ochilganda | `product`, `item_name` |
| `cta_click` | CTA tugmalari | `cta` |
| `contact_click` | telefon/email/telegram | `channel` |
| `generate_lead` | forma yuborilganda | `product`, `interest`, `language` |

`interest` — foydalanuvchi eng ko'p ochgan mahsulot (localStorage'da hisoblanadi).
Shu qiymat forma yuborilganda marketingga uzatiladi va formadagi
«mahsulot» maydonini avtomatik to'ldiradi.

### 2. Forma

`config.js` dagi `formEndpoint` — JSON qabul qiluvchi POST manzil
(o'z backend, Formspree, Google Apps Script va h.k.).

Bo'sh qoldirilsa forma `mailto:` orqali `contacts.sales` manziliga yuboriladi —
lokal test uchun qulay, lekin ishlab chiqarishda backend tavsiya etiladi.

### 3. Aloqa ma'lumotlari

`config.js` → `contacts` obyekti (telefon, email, telegram). Footer, kontaktlar
sahifasi va suzuvchi tugma shu yerdan o'qiydi. SIP raqamga o'tganda faqat
shu joyni o'zgartirish kifoya.

---

## Kontentni o'zgartirish

**Matn tahrirlash:** `src/data/messages.js` — kalit bo'yicha uchala tilda.

**Yangi mahsulot qo'shish:** `src/data/products.js` massiviga obyekt qo'shing:

```js
{ slug:'yangi-mahsulot', code:'NEW',
  uz:{ name, short, intro, tasks:[], cases:[{t,d}], adv:[{t,d}], delivery:[] },
  ru:{ ... }, en:{ ... } }
```

Sahifa, katalog, footer, formadagi ro'yxat va «yaqin yo'nalishlar» bloki
avtomatik yangilanadi. Bosh sahifada ko'rinishi uchun `catalog.js` dagi
`TILES` ga qator qo'shing.

**Ixtiyoriy bo'limlar:** `compliance`, `detectors`, `tabs` — mavjud bo'lsa
mahsulot sahifasida avtomatik chiziladi, bo'lmasa o'tkazib yuboriladi.

---

## Dizayn va animatsiyalar

Dizayn tizimi — `src/assets/css/base.css` (CSS o'zgaruvchilari: ranglar,
shriftlar, radiuslar, soyalar, easing). Brend: `--blue #2E3D8F`, `--red #E23B33`,
fon `--ink #070B1E`. Shriftlar: Geologica (sarlavha), Manrope (matn),
JetBrains Mono (texnik yozuvlar).

Asosiy animatsiyalar:

- **Hero skaneri** (`HeroScan.vue`) — SVG: skan nuri, ketma-ket «qulflanadigan»
  landmark nuqtalari, orbita halqalari, kursorga qarab parallaks
- **Signal maydoni** (`SignalField.vue`) — canvas: nuqtalar tarmog'i,
  kursor yaqinlashganda jonlanadi
- `v-reveal` — scroll bo'yicha ochilish (`v-reveal="120"` — kechikish ms,
  `v-reveal:left|right|scale` — yo'nalish)
- `v-tilt` — 3D egilish, `v-magnet` — kursorga tortiluvchi tugma
- Sahifa o'tishlari, scroll progress bar, avtomatik slayder, raqam sanash

Barcha animatsiyalar `prefers-reduced-motion` sozlamasini hurmat qiladi.

---

## Deploy

`npm run build` → `dist/` papkasini istalgan statik hostingga (Nginx, Netlify,
Vercel, S3) yuklang. Hash-routing tufayli server tomonida qayta yozish
(rewrite) qoidalari kerak emas.

`vite.config.js` dagi `base: './'` — saytni subpapkada joylashtirsa ham ishlaydi.
