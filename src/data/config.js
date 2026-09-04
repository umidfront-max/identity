export const CONFIG = {
  /* Sayt tili: 'uz' | 'ru' | 'en' — birinchi ochilganda ko'rinadigan til */
  defaultLang: 'uz',

  /* Google Analytics 4 — o'lchov ID sini shu yerga qo'ying: 'G-XXXXXXXXXX'
     Bo'sh bo'lsa GA yuklanmaydi (lokal test uchun qulay). */
  gaMeasurementId: '',

  /* Google Tag Manager konteyner ID (ixtiyoriy): 'GTM-XXXXXXX' */
  gtmId: '',

  /* Lead API — forma shu manzilga POST qiladi, backend esa zayavkani
     Telegram botga yuboradi. Spetsifikatsiya: lead-api-doc.html
     Muvaffaqiyat = 202 Accepted. Bo'sh bo'lsa forma mailto ga qaytadi. */
  formEndpoint: 'https://api.identity-uz.com/api/call/lead',

  /* Mahsulot taqdimotlari. Kalit — mahsulot slug'i, qiymat — fayl manzili.
     Faylni public/presentations/ ichiga qo'ying va shu yerga yozing, masalan:
       'faceid': 'presentations/faceid.pdf'
     Slug ro'yxatda bo'lmasa — «Taqdimotni yuklab olish» tugmasi ko'rsatilmaydi
     (buzilgan havola paydo bo'lmasligi uchun). */
  presentations: {
    'video-analytics': 'presentations/video-analytics.pptx',
    'faceid': 'presentations/faceid.pptx'
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
