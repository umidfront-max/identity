export const CONFIG = {
  /* Sayt tili: 'uz' | 'ru' | 'en' — birinchi ochilganda ko'rinadigan til */
  defaultLang: 'uz',

  /* Google Analytics 4 — o'lchov ID sini shu yerga qo'ying: 'G-XXXXXXXXXX'
     Bo'sh bo'lsa GA yuklanmaydi (lokal test uchun qulay). */
  gaMeasurementId: '',

  /* Google Tag Manager konteyner ID (ixtiyoriy): 'GTM-XXXXXXX' */
  gtmId: '',

  /* Forma qayerga yuboriladi. POST JSON qabul qiluvchi manzil:
     o'z backendingiz, Formspree, Google Apps Script va h.k.
     Bo'sh bo'lsa — forma mailto orqali yuboriladi. */
  formEndpoint: '',

  /* Mahsulot taqdimotlari. Kalit — mahsulot slug'i, qiymat — fayl manzili.
     Faylni public/presentations/ ichiga qo'ying va shu yerga yozing, masalan:
       'faceid': 'presentations/faceid.pdf'
     Slug ro'yxatda bo'lmasa — «Taqdimotni yuklab olish» tugmasi ko'rsatilmaydi
     (buzilgan havola paydo bo'lmasligi uchun). */
  presentations: {},

  /* Aloqa ma'lumotlari (footer, kontaktlar sahifasi, mailto-fallback) */
  contacts: {
    email: 'info@identity-uz.com',
    sales: 'info@identity-uz.com',
    /* Yo'nalish bo'yicha alohida pochtalar — kontaktlar sahifasida ko'rsatiladi */
    emailBio: 'info@face-id.uz',
    emailSec: 'info@frod.uz',
    phone: '+998 (33) 500-60-77',
    phoneHref: '+998335006077',
    telegram: 'https://t.me/identity_uz',
    addressKey: 'contacts.address'
  }
};
