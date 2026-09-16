/* Sahifalar uchun SEO ma'lumotlari: title, description, keywords — uch tilda.
   Kalit so'zlar mijoz bergan ro'yxatdan sahifalar bo'yicha taqsimlangan.

   Title uzunligi ~60 belgigacha, description ~155 belgigacha bo'lishi ma'qul:
   qidiruv natijalarida shundan uzog'i kesib tashlanadi. */

export const SITE = {
  name: 'IDENTITY',
  legal: '«IDENTITY» MChJ',
  url: 'https://identity-uz.com',
  image: 'https://identity-uz.com/favicon.png'
}

/* Har bir sahifada takrorlanadigan umumiy kalit so'zlar */
const BASE = {
  uz: ['kiberxavfsizlik', 'axborot xavfsizligi', 'Identity kiberxavfsizlik'],
  ru: ['кибербезопасность Узбекистан', 'информационная безопасность Ташкент', 'ООО Identity', 'identity-uz'],
  en: ['cybersecurity Uzbekistan', 'cybersecurity company Tashkent', 'Identity Uzbekistan']
}

/* Marshrut nomi bo'yicha (mahsulot sahifalaridan tashqari) */
export const PAGES = {

home: {
  uz: {
    title: 'IDENTITY — kiberxavfsizlik va sun\'iy intellekt yechimlari',
    description: 'Identity himoyani qatlamma-qatlam quradi: biometrik identifikatsiya, videoanalitika, antifrod, EDR, DLP, IPS/IDS, WAF va kod xavfsizligi. O\'zbekistonda.',
    keywords: ['kiberxavfsizlik kompaniyasi', 'sun\'iy intellekt kiberxavfsizlik', 'sun\'iy intellekt yechimlari']
  },
  ru: {
    title: 'IDENTITY — кибербезопасность и AI-решения в Узбекистане',
    description: 'Identity строит защиту слой за слоем: биометрия, видеоаналитика, антифрод, EDR, DLP, IPS/IDS, WAF и анализ кода. Защита информации для бизнеса.',
    keywords: ['защита информации для бизнеса', 'AI решения для безопасности']
  },
  en: {
    title: 'IDENTITY — Cybersecurity & AI Solutions in Uzbekistan',
    description: 'Identity builds protection layer by layer: biometrics, video analytics, fraud detection, EDR, DLP, IPS/IDS, WAF and code security for business.',
    keywords: ['information security solutions', 'AI cybersecurity solutions']
  }
},

about: {
  uz: {
    title: 'Biz haqimizda — IDENTITY kiberxavfsizlik kompaniyasi',
    description: '«IDENTITY» MChJ — O\'zbekistonda sun\'iy intellekt asosida kiberxavfsizlik va biometrik identifikatsiya yechimlarini yaratadigan kompaniya.',
    keywords: ['kiberxavfsizlik kompaniyasi', 'Identity kiberxavfsizlik']
  },
  ru: {
    title: 'О компании — IDENTITY, кибербезопасность в Узбекистане',
    description: 'ООО «IDENTITY» — компания, создающая решения кибербезопасности и биометрической идентификации на базе искусственного интеллекта в Узбекистане.',
    keywords: ['ООО Identity', 'информационная безопасность Ташкент']
  },
  en: {
    title: 'About — IDENTITY, Cybersecurity Company in Tashkent',
    description: 'IDENTITY LLC builds AI-powered cybersecurity and biometric identification solutions in Uzbekistan: biometrics, video analytics, fraud detection and more.',
    keywords: ['cybersecurity company Tashkent', 'Identity Uzbekistan']
  }
},

products: {
  uz: {
    title: 'Mahsulot va xizmatlar — kiberxavfsizlik yechimlari',
    description: 'Biometrik identifikatsiya, videoanalitika, antifrod, EDR, DLP, IPS/IDS, WAF va AntiDDoS, kod xavfsizligi hamda buyurtma asosida dastur ishlab chiqish.',
    keywords: ['axborot xavfsizligi', 'tarmoq himoyasi', 'sun\'iy intellekt yechimlari']
  },
  ru: {
    title: 'Продукты и услуги — решения информационной безопасности',
    description: 'Биометрия, видеоаналитика, антифрод, EDR, DLP, IPS/IDS, WAF и AntiDDoS, анализ кода и заказная разработка ПО. Полный каталог решений Identity.',
    keywords: ['защита информации для бизнеса', 'AI решения для безопасности']
  },
  en: {
    title: 'Products & Services — Information Security Solutions',
    description: 'Biometrics, video analytics, fraud detection, EDR, DLP, IPS/IDS, WAF and AntiDDoS, code analysis and custom software development by Identity.',
    keywords: ['information security solutions', 'network security solutions']
  }
},

promos: {
  uz: {
    title: 'Aksiyalar va maxsus takliflar — IDENTITY',
    description: 'Kiberxavfsizlik va biometrik yechimlar bo\'yicha joriy aksiyalar, pilot loyihalar va maxsus takliflar. Sinov muddati va chegirmalar.',
    keywords: ['kiberxavfsizlik aksiya', 'pilot loyiha']
  },
  ru: {
    title: 'Акции и специальные предложения — IDENTITY',
    description: 'Текущие акции, пилотные проекты и специальные предложения по решениям кибербезопасности и биометрии. Тестовый период и скидки.',
    keywords: ['акции кибербезопасность', 'пилотный проект']
  },
  en: {
    title: 'Offers & Special Deals — IDENTITY',
    description: 'Current offers, pilot projects and special deals on cybersecurity and biometric solutions. Trial periods and discounts.',
    keywords: ['cybersecurity offer', 'pilot project']
  }
},

contacts: {
  uz: {
    title: 'Kontaktlar — IDENTITY, Toshkent',
    description: 'Kiberxavfsizlik va biometrik yechimlar bo\'yicha bog\'laning: telefon +998 (78) 555-11-75, info@identity-uz.com. Toshkent, O\'zbekiston.',
    keywords: ['kiberxavfsizlik kompaniyasi aloqa', 'Toshkent']
  },
  ru: {
    title: 'Контакты — IDENTITY, Ташкент',
    description: 'Свяжитесь с нами по решениям кибербезопасности и биометрии: +998 (78) 555-11-75, info@identity-uz.com. Ташкент, Узбекистан.',
    keywords: ['информационная безопасность Ташкент', 'ООО Identity']
  },
  en: {
    title: 'Contacts — IDENTITY, Tashkent',
    description: 'Get in touch about cybersecurity and biometric solutions: +998 (78) 555-11-75, info@identity-uz.com. Tashkent, Uzbekistan.',
    keywords: ['cybersecurity company Tashkent', 'Identity Uzbekistan']
  }
},

privacy: {
  uz: {
    title: 'Maxfiylik siyosati — IDENTITY',
    description: 'Shaxsga doir ma\'lumotlarni qayta ishlash tartibi, biometrik ma\'lumotlarni O\'zbekiston hududida saqlash va foydalanuvchining huquqlari.',
    keywords: ['shaxsga doir ma\'lumotlar', 'maxfiylik siyosati']
  },
  ru: {
    title: 'Политика конфиденциальности — IDENTITY',
    description: 'Порядок обработки персональных данных, хранение биометрических данных на территории Узбекистана и права пользователя.',
    keywords: ['персональные данные', 'политика конфиденциальности']
  },
  en: {
    title: 'Privacy Policy — IDENTITY',
    description: 'Personal data processing procedure, storage of biometric data within Uzbekistan and the rights of the user.',
    keywords: ['personal data', 'privacy policy']
  }
},

notfound: {
  uz: { title: 'Sahifa topilmadi — IDENTITY', description: 'So\'ralgan sahifa mavjud emas. Bosh sahifaga qayting yoki mahsulotlar katalogini ko\'ring.', keywords: [] },
  ru: { title: 'Страница не найдена — IDENTITY', description: 'Запрошенная страница не существует. Вернитесь на главную или посмотрите каталог продуктов.', keywords: [] },
  en: { title: 'Page Not Found — IDENTITY', description: 'The requested page does not exist. Return to the home page or browse the product catalogue.', keywords: [] }
}

}

/* Mahsulot sahifalari — slug bo'yicha */
export const PRODUCT_SEO = {

'faceid': {
  uz: {
    title: 'Yuzni tanish tizimi va biometrik identifikatsiya — Face ID',
    description: 'Face ID tizimi: yuz orqali kirish, biometrik identifikatsiya, liveness tekshiruvi va antispoofing. Yuzni aniqlash dasturi O\'zbekistonda.',
    keywords: ['yuzni tanish tizimi', 'Face ID tizimi', 'biometrik identifikatsiya', 'yuz orqali kirish tizimi', 'yuzni aniqlash dasturi', 'kamera orqali yuzni aniqlash']
  },
  ru: {
    title: 'Распознавание лиц и биометрическая идентификация — Face ID',
    description: 'Система распознавания лиц на нейросети: биометрическая идентификация, проверка liveness и антиспуфинг. Купить систему распознавания лиц в Узбекистане.',
    keywords: ['распознавание лиц', 'биометрическая идентификация', 'система распознавания лиц купить', 'распознавание лиц нейросеть', 'антиспуфинг', 'проверка liveness']
  },
  en: {
    title: 'Face Recognition & Biometric Identification — Face ID',
    description: 'AI face recognition system: biometric identification, liveness detection and anti-spoofing. Face recognition in Uzbekistan by Identity.',
    keywords: ['face recognition', 'biometric identification', 'AI face recognition system', 'liveness detection', 'face recognition Uzbekistan']
  }
},

'video-analytics': {
  uz: {
    title: 'Videoanalitika va aqlli videokuzatuv — sun\'iy intellekt',
    description: 'Sun\'iy intellekt asosidagi videoanalitika: aqlli videokuzatuv, kamera orqali yuzni aniqlash, xavfsizlik va tor ixtisoslashgan analitika.',
    keywords: ['videoanalitika', 'aqlli videokuzatuv', 'sun\'iy intellekt videokuzatuv', 'kamera orqali yuzni aniqlash']
  },
  ru: {
    title: 'Видеоаналитика и интеллектуальное видеонаблюдение на ИИ',
    description: 'Видеоаналитика на базе ИИ: интеллектуальное видеонаблюдение, детекция событий и лиц. VisionLabs LUNA в Узбекистане.',
    keywords: ['видеоаналитика', 'интеллектуальное видеонаблюдение', 'видеоаналитика на базе ИИ', 'VisionLabs LUNA Узбекистан']
  },
  en: {
    title: 'Video Analytics & Intelligent Video Surveillance — AI',
    description: 'AI video analytics: intelligent video surveillance, smart CCTV analytics, event and face detection for retail, industry and public safety.',
    keywords: ['video analytics', 'AI video analytics', 'intelligent video surveillance', 'smart CCTV analytics']
  }
},

'antifraud': {
  uz: {
    title: 'Antifrod tizimi va firibgarlikka qarshi himoya',
    description: 'Antifrod tizimi: bank firibgarligini aniqlash, tranzaksiyalarni real vaqtda kuzatish va deepfake aniqlash. Firibgarlikka qarshi tizim.',
    keywords: ['antifrod tizimi', 'firibgarlikka qarshi tizim', 'bank firibgarligini aniqlash', 'deepfake aniqlash']
  },
  ru: {
    title: 'Антифрод система для банков — защита от дипфейков',
    description: 'Антифрод для банков: транзакционный антифрод, мониторинг операций в реальном времени и защита от дипфейков.',
    keywords: ['антифрод система', 'антифрод для банков', 'транзакционный антифрод', 'защита от дипфейков']
  },
  en: {
    title: 'Fraud Detection System — AI & Deepfake Protection',
    description: 'AI fraud detection: transaction monitoring in real time, behavioural analysis and deepfake detection for banks and fintech.',
    keywords: ['fraud detection system', 'AI fraud detection', 'transaction monitoring', 'deepfake detection']
  }
},

'edr': {
  uz: {
    title: 'EDR tizimi — ish stansiyalarini himoya qilish',
    description: 'EDR nima va nega kerak: ish stansiyalari himoyasi, kompyuterlarni viruslardan himoya, anomal faoliyatni kuzatish. Markaziy bank talabi.',
    keywords: ['EDR tizimi', 'ish stansiyalari himoyasi', 'kompyuterlarni viruslardan himoya', 'EDR nima']
  },
  ru: {
    title: 'EDR система — защита рабочих станций | купить в Узбекистане',
    description: 'EDR что это: защита рабочих станций, обнаружение аномальной активности и реагирование. MaxPatrol EDR и Solar EDR купить в Узбекистане.',
    keywords: ['EDR система', 'защита рабочих станций', 'MaxPatrol EDR купить', 'Solar EDR купить', 'EDR что это']
  },
  en: {
    title: 'EDR Solution — Endpoint Detection and Response',
    description: 'AI-powered EDR: endpoint protection, detection of anomalous activity and rapid response across workstations and servers.',
    keywords: ['EDR solution', 'endpoint protection', 'endpoint detection and response', 'AI-powered EDR']
  }
},

'dlp': {
  uz: {
    title: 'DLP tizimi — ma\'lumot sizib chiqishining oldini olish',
    description: 'DLP tizimi: maxfiy ma\'lumotlarning sizib chiqishining oldini olish, kanallarni nazorat qilish va xodimlar nazorati dasturi.',
    keywords: ['DLP tizimi', 'ma\'lumot sizib chiqishining oldini olish', 'xodimlar nazorati dasturi']
  },
  ru: {
    title: 'DLP система — защита от утечки данных | Solar Dozor',
    description: 'DLP система: защита от утечки данных, контроль каналов передачи и программа контроля сотрудников. Solar Dozor в Узбекистане.',
    keywords: ['DLP система', 'защита от утечки данных', 'Solar Dozor', 'контроль сотрудников программа']
  },
  en: {
    title: 'DLP Solution — Data Loss Prevention & Insider Threats',
    description: 'DLP solution: data loss prevention, control of transfer channels and insider threat protection for corporate information.',
    keywords: ['DLP solution', 'data loss prevention', 'insider threat protection']
  }
},

'ips-ids': {
  uz: {
    title: 'IPS IDS nima — tarmoq himoyasi va firewall o\'rnatish',
    description: 'Tarmoq himoyasi: IPS/IDS hujumlarni aniqlash va to\'sish tizimlari, keyingi avlod firewall o\'rnatish va tarmoq trafigini nazorat qilish.',
    keywords: ['tarmoq himoyasi', 'firewall o\'rnatish', 'IPS IDS nima']
  },
  ru: {
    title: 'NGFW купить — межсетевой экран и система IDS IPS',
    description: 'Межсетевой экран нового поколения и система IDS/IPS: обнаружение и блокировка атак. PT NGFW, Positive Technologies в Узбекистане.',
    keywords: ['NGFW купить', 'межсетевой экран', 'IDS IPS система', 'PT NGFW', 'Positive Technologies Узбекистан']
  },
  en: {
    title: 'NGFW Firewall & Intrusion Detection System — IPS/IDS',
    description: 'Network security solutions: next-generation firewall, intrusion detection system and traffic inspection to block attacks at the perimeter.',
    keywords: ['NGFW firewall', 'intrusion detection system', 'network security solutions']
  }
},

'waf-antiddos': {
  uz: {
    title: 'WAF nima va DDoS hujumdan himoya — saytni himoya qilish',
    description: 'Saytni himoya qilish: WAF veb-ilovalar himoyasi va DDoS hujumdan himoya. Ilova darajasidagi hujumlarni to\'sish.',
    keywords: ['DDoS hujumdan himoya', 'saytni himoya qilish', 'WAF nima']
  },
  ru: {
    title: 'Защита от DDoS атак и WAF защита сайта',
    description: 'WAF защита сайта и защита от DDoS атак: блокировка атак на уровне приложения. PT Application Firewall в Узбекистане.',
    keywords: ['защита от DDoS атак', 'WAF защита сайта', 'PT Application Firewall']
  },
  en: {
    title: 'DDoS Protection & Web Application Firewall (WAF)',
    description: 'Web application firewall and AntiDDoS service: blocking application-layer attacks and keeping your site available under load.',
    keywords: ['DDoS protection', 'web application firewall', 'AntiDDoS service']
  }
},

'sast-dast': {
  uz: {
    title: 'Kod xavfsizligini tekshirish — dastur zaifliklarini topish',
    description: 'SAST/DAST: kod xavfsizligini tekshirish, dastur zaifliklarini topish va ishlab chiqish jarayoniga xavfsizlikni kiritish.',
    keywords: ['kod xavfsizligini tekshirish', 'dastur zaifliklarini topish']
  },
  ru: {
    title: 'SAST анализ кода — статический анализатор кода',
    description: 'SAST и DAST: статический анализатор кода и динамическое тестирование. Solar appScreener и PT BlackBox в Узбекистане.',
    keywords: ['SAST анализ кода', 'статический анализатор кода', 'Solar appScreener', 'PT BlackBox']
  },
  en: {
    title: 'SAST DAST Tools — AI Code Security Scanner',
    description: 'Static code analysis and dynamic testing: an AI code security scanner that finds vulnerabilities before release.',
    keywords: ['SAST DAST tools', 'static code analysis', 'AI code security scanner']
  }
},

'custom-development': {
  uz: {
    title: 'Dastur ishlab chiqish buyurtma — sun\'iy intellekt yechimlari',
    description: 'Buyurtma asosida dastur ishlab chiqish va sun\'iy intellekt yechimlari: integratsiya, backend, mobil ilovalar va AI modellari.',
    keywords: ['dastur ishlab chiqish buyurtma', 'sun\'iy intellekt yechimlari']
  },
  ru: {
    title: 'Заказная разработка ПО Ташкент — разработка AI решений',
    description: 'Заказная разработка ПО и разработка AI решений: интеграции, backend, мобильные приложения и модели искусственного интеллекта.',
    keywords: ['заказная разработка ПО Ташкент', 'разработка AI решений']
  },
  en: {
    title: 'Custom Software Development Uzbekistan — AI Solutions',
    description: 'Custom software development and AI solutions development: integrations, backend, mobile apps and machine learning models.',
    keywords: ['custom software development Uzbekistan', 'AI solutions development']
  }
}

}

/* Aksiya sahifalari — slug bo'yicha */
export const PROMO_SEO = {

'deepfake': {
  uz: {
    title: 'DeepFake aniqlash — biznesni soxta video va ovozdan himoya',
    description: 'DeepFake aniqlash yechimi: soxta video va ovozni fosh etish, antispoofing va liveness tekshiruvi. Aksiya shartlari bilan tanishing.',
    keywords: ['deepfake aniqlash', 'antifrod tizimi', 'yuzni tanish tizimi']
  },
  ru: {
    title: 'Защита от дипфейков — обнаружение поддельного видео',
    description: 'Решение для защиты от дипфейков: выявление поддельного видео и голоса, антиспуфинг и проверка liveness. Условия акции.',
    keywords: ['защита от дипфейков', 'антифрод система', 'антиспуфинг']
  },
  en: {
    title: 'Deepfake Detection — Protect Your Business from Fakes',
    description: 'Deepfake detection: exposing forged video and voice, anti-spoofing and liveness detection. See the current offer.',
    keywords: ['deepfake detection', 'fraud detection system', 'liveness detection']
  }
},

'luna-line': {
  uz: {
    title: 'Luna Line — yuzni tanish asosidagi videoanalitika aksiyasi',
    description: 'Luna Line yechimi bo\'yicha maxsus taklif: aqlli videokuzatuv, kamera orqali yuzni aniqlash va tashriflar analitikasi.',
    keywords: ['videoanalitika', 'aqlli videokuzatuv', 'yuzni tanish tizimi']
  },
  ru: {
    title: 'Luna Line — акция на видеоаналитику с распознаванием лиц',
    description: 'Специальное предложение на решение Luna Line: интеллектуальное видеонаблюдение и распознавание лиц. VisionLabs LUNA в Узбекистане.',
    keywords: ['VisionLabs LUNA Узбекистан', 'видеоаналитика', 'распознавание лиц']
  },
  en: {
    title: 'Luna Line — Face Recognition Video Analytics Offer',
    description: 'Special offer on the Luna Line solution: intelligent video surveillance and face recognition with visitor analytics.',
    keywords: ['video analytics', 'intelligent video surveillance', 'face recognition']
  }
}

}

/* Sahifa uchun yakuniy SEO obyekti. Topilmasa — bosh sahifanikiga qaytadi. */
export function seoFor (routeName, slug, lang) {
  const L = lang || 'uz'
  const pick = o => (o && (o[L] || o.uz)) || null
  let found = null
  if (routeName === 'product') found = pick(PRODUCT_SEO[slug])
  else if (routeName === 'promo') found = pick(PROMO_SEO[slug])
  else found = pick(PAGES[routeName])
  const base = pick(PAGES.home)
  const seo = found || base
  return {
    title: seo.title,
    description: seo.description,
    /* sahifa kalit so'zlari + umumiy kalit so'zlar, takrorlanmasdan */
    keywords: [...new Set([...(seo.keywords || []), ...BASE[L]])].join(', ')
  }
}
