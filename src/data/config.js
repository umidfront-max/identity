export const CONFIG = {
  /* Sayt tili: 'uz' | 'ru' | 'en' — birinchi ochilganda ko'rinadigan til */
  defaultLang: 'uz',

  /* Google Analytics 4 — o'lchov ID sini shu yerga qo'ying: 'G-XXXXXXXXXX'
     Bo'sh bo'lsa GA yuklanmaydi (lokal test uchun qulay). */
  gaMeasurementId: '',

  /* Google Tag Manager konteyner ID (ixtiyoriy): 'GTM-XXXXXXX' */
  gtmId: '',

  /* Yandex.Metrika hisoblagich raqami. Bo'sh bo'lsa Metrika yuklanmaydi. */
  yandexMetrikaId: '112383354',

  /* Lead API — forma shu manzilga POST qiladi, backend esa zayavkani
     Telegram botga yuboradi. Spetsifikatsiya: lead-api-doc.html
     Muvaffaqiyat = 202 Accepted. Bo'sh bo'lsa forma mailto ga qaytadi. */
  formEndpoint: 'https://face-id.uz/api/call/lead',

  /* Mahsulot taqdimotlari. Kalit — mahsulot slug'i, qiymat — fayl manzili
     yoki tillar kartasi. Fayllar public/presentations/ ichida, PDF ko'rinishida:
     har qanday qurilmada ochiladi va o'zgartirib bo'lmaydi.
     Slug ro'yxatda bo'lmasa — «Taqdimotni yuklab olish» tugmasi ko'rsatilmaydi
     (buzilgan yoki bo'sh havola paydo bo'lmasligi uchun). */
  presentations: {
    /* Tilga qarab beriladi: joriy til uchun fayl bo'lmasa uz olinadi */
    'dlp': {
      uz: 'presentations/dlp-uz.pdf',
      ru: 'presentations/dlp-ru.pdf',
      en: 'presentations/dlp-en.pdf'
    },
    'edr': {
      uz: 'presentations/edr-uz.pdf',
      ru: 'presentations/edr-ru.pdf',
      en: 'presentations/edr-en.pdf'
    }
    /* faceid va video-analytics: haqiqiy taqdimot kelganda shu yerga
       qo'shiladi. Ilgari bu yerda bo'sh o'rinbosar fayllar turgan edi —
       tashrifchi bo'm-bo'sh fayl yuklab olardi, shuning uchun olib tashlandi. */
  },

  /* NDA shabloni — sayt tiliga qarab beriladi. Fayllar public/docs/ da.
     Til uchun fayl ko'rsatilmagan bo'lsa, footerdagi havola chizilmaydi. */
  ndaFiles: {
    uz: 'docs/nda-uz.docx',
    ru: 'docs/nda-ru.docx',
    en: 'docs/nda-en.docx'
  },

  /* Aloqa ma'lumotlari (footer, kontaktlar sahifasi, mailto-fallback) */
  contacts: {
    email: 'info@identity-uz.com',
    sales: 'info@identity-uz.com',
    /* Yo'nalish bo'yicha alohida pochtalar — kontaktlar sahifasida ko'rsatiladi */
    emailBio: 'info@face-id.uz',
    emailSec: 'info@frod.uz',
    phone: '+998 (78) 555-11-75',
    phoneHref: '+998785551175',
    telegram: 'https://t.me/identity_uz',
    addressKey: 'contacts.address'
  }
};

/* public/ papkasidagi faylga manzil. Sayt manzillari ichma-ich bo'lgani
   uchun (/p/dlp, /promo/deepfake) nisbiy yo'l /p/presentations/... ga
   aylanib ketardi va fayl o'rniga sahifa yuklanardi — shuning uchun
   boshiga '/' qo'yamiz. Tashqi havolalar o'zgarishsiz qoladi. */
export function publicUrl (path) {
  if (!path) return ''
  return /^(https?:)?\/\//.test(path) ? path : '/' + String(path).replace(/^\/+/, '')
}
