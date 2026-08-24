/* Bosh sahifa plitkalari, himoya qatlamlari va hamkorlar */

export const ICONS = {
  faceid: '<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="10.3" r="2.6"/><path d="M7.6 16.8c1-2.1 2.7-3.1 4.4-3.1s3.4 1 4.4 3.1"/>',
  deepfake: '<rect x="3.5" y="5" width="13" height="11" rx="2"/><circle cx="8.2" cy="8.6" r="1.1"/><path d="M6.3 13.6l3-3 2.4 2.4 1.8-1.8"/><path d="M17.2 14.4l4.2 4.2M21.4 14.4l-4.2 4.2"/>',
  vision: '<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.7"/>',
  nocode: '<path d="M4 7.5h16M4 16.5h16"/><circle cx="9.5" cy="7.5" r="2.4"/><circle cx="14.5" cy="16.5" r="2.4"/>',
  fraud: '<path d="M12 3l7 2.6v5.1c0 4.6-3 8.1-7 9.8-4-1.7-7-5.2-7-9.8V5.6z"/><path d="M9 12l2.2 2.2 4.2-4.4"/>',
  code: '<path d="M8.5 8l-4 4 4 4M15.5 8l4 4-4 4M13.2 6.5l-2.4 11"/>',
  edr: '<rect x="3" y="4.5" width="18" height="12.5" rx="2"/><path d="M6.5 11h2.4l1.5-2.8 2.4 5.6 1.5-2.8h3.2"/><path d="M9.5 21h5M12 17v4"/>',
  dlp: '<path d="M13 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.5z"/><path d="M13 3.5V9.5h6"/><rect x="9" y="13" width="6" height="4.6" rx="1"/><path d="M10.6 13v-1.3a1.4 1.4 0 0 1 2.8 0V13"/>',
  ids: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.4"/><path d="M12 12l5.6-5.6"/><circle cx="15.6" cy="14.8" r="1.2" fill="currentColor" stroke="none"/>',
  waf: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2.5 2.3 3.8 5.2 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.2-3.8-8.5s1.3-6.2 3.8-8.5z"/>',
  ddos: '<path d="M3 8.5c1.5-1.7 3-1.7 4.5 0s3 1.7 4.5 0 3-1.7 4.5 0 3 1.7 4.5 0"/><path d="M3 13c1.5-1.7 3-1.7 4.5 0s3 1.7 4.5 0 3-1.7 4.5 0 3 1.7 4.5 0"/><path d="M3 17.5c1.5-1.7 3-1.7 4.5 0s3 1.7 4.5 0 3-1.7 4.5 0 3 1.7 4.5 0" opacity=".45"/>',
  other: '<rect x="4" y="4" width="6.4" height="6.4" rx="1.5"/><rect x="13.6" y="4" width="6.4" height="6.4" rx="1.5"/><rect x="4" y="13.6" width="6.4" height="6.4" rx="1.5"/><path d="M16.8 13.8v6M13.8 16.8h6"/>',
  dev: '<path d="M14.7 6.3a4.1 4.1 0 0 0-5.4 5.1L4 16.7V20h3.3l5.3-5.3a4.1 4.1 0 0 0 5.1-5.4l-2.9 2.9-2.3-.7-.7-2.3z"/>'
}

/* Bosh sahifadagi plitkalar: kontent hujjati bo'yicha 13 ta yo'nalish */
export const TILES = [
  { slug: 'faceid', k: 'tile.faceid', icon: 'faceid' },
  { slug: 'faceid', k: 'tile.deepfake', icon: 'deepfake' },
  { slug: 'video-analytics', k: 'tile.vision', icon: 'vision' },
  /* No-code sahifasi Luna Line bilan birlashtirildi — videoanalitika sahifasiga olib boradi */
  { slug: 'video-analytics', k: 'tile.nocode', icon: 'nocode' },
  { slug: 'antifraud', k: 'tile.fraud', icon: 'fraud' },
  { slug: 'sast-dast', k: 'tile.code', icon: 'code' },
  { slug: 'edr', k: 'tile.edr', icon: 'edr' },
  { slug: 'dlp', k: 'tile.dlp', icon: 'dlp' },
  { slug: 'ips-ids', k: 'tile.ids', icon: 'ids' },
  { slug: 'waf-antiddos', k: 'tile.waf', icon: 'waf' },
  { slug: 'waf-antiddos', k: 'tile.ddos', icon: 'ddos' },
  { slug: '', to: '/contacts', k: 'tile.other', icon: 'other' },
  { slug: 'custom-development', k: 'tile.dev', icon: 'dev' }
]

/* Himoya qatlamlari — tashqi perimetrdan kodgacha */
export const LAYERS = [
  { n: '01', k: 'layer1', c: '#E23B33', p: ['faceid', 'video-analytics'] },
  { n: '02', k: 'layer2', c: '#8E9BE4', p: ['antifraud'] },
  { n: '03', k: 'layer3', c: '#5B6FD6', p: ['antifraud'] },
  { n: '04', k: 'layer4', c: '#4155C0', p: ['edr', 'dlp', 'ips-ids', 'waf-antiddos'] },
  { n: '05', k: 'layer5', c: '#2E3D8F', p: ['sast-dast', 'custom-development'] }
]

export const PARTNERS = [
  { mark: 'VL', logo: 'visionlabs', name: 'VisionLabs', k: 'partners.p1.d', site: 'visionlabs.ai', url: 'https://visionlabs.ai' },
  { mark: 'FZ', logo: 'fzlabs', name: 'Fuzzy Logic Labs', k: 'partners.p2.d', site: 'fzlabs.ru', url: 'https://fzlabs.ru', note: true },
  { mark: 'SL', logo: 'solar', name: 'Solar', k: 'partners.p3.d', site: 'rt-solar.ru', url: 'https://rt-solar.ru' },
  /* PT logotipi hali yo'q — fayl qo'shilgach partnerLogos.js ga yozing */
  { mark: 'PT', name: 'Positive Technologies', k: 'partners.p4.d', site: 'ptsecurity.com', url: 'https://www.ptsecurity.com' }
]

/* Bosh sahifadagi ko'rsatkichlar (hero) */
export const HERO_STATS = ['hero.stat1', 'hero.stat2', 'hero.stat3', 'hero.stat4']

/* "Biz haqimizda" — raqamlar. value: sanaladigan son, suffix: qo'shimcha */
export const METRICS = [
  { key: 'about.m1', value: 99.8, suffix: '%', decimals: 1 },
  { key: 'about.m2', value: 20, suffix: '+ mln', decimals: 0 },
  { key: 'about.m3', value: 700, suffix: '+', decimals: 0 },
  { key: 'about.m4', value: 4, suffix: '+ mln', decimals: 0 }
]
