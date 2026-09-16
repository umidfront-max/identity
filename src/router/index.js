import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
  { path: '/products', name: 'products', component: () => import('@/views/ProductsView.vue') },
  { path: '/p/:slug', name: 'product', component: () => import('@/views/ProductView.vue'), props: true },
  { path: '/promos', name: 'promos', component: () => import('@/views/PromosView.vue') },
  { path: '/promo/:slug', name: 'promo', component: () => import('@/views/PromoView.vue'), props: true },
  { path: '/contacts', name: 'contacts', component: () => import('@/views/ContactsView.vue') },
  { path: '/privacy', name: 'privacy', component: () => import('@/views/PrivacyView.vue') },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('@/views/NotFoundView.vue') }
]

/* Eski #/... havolalar (ilgari tarqatilgan, qidiruvda saqlanib qolgan)
   yangi manzilga yo'naltiriladi: /#/p/faceid -> /p/faceid.
   Router yaratilishidan oldin bajarilishi shart. */
if (typeof window !== 'undefined' && window.location.hash.startsWith('#/')) {
  const target = window.location.hash.slice(1)
  window.history.replaceState(null, '', target)
}

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, saved) {
    if (saved) return saved
    if (to.hash) {
      /* Boshqa sahifaga o'tilsa — sahifa o'tish animatsiyasi tugashini kutamiz,
         aks holda anchor hali DOM'da bo'lmaydi va scroll ishlamaydi. */
      const wait = to.path === from.path ? 0 : 420
      return new Promise(resolve => {
        setTimeout(() => resolve({ el: to.hash, behavior: 'smooth', top: 92 }), wait)
      })
    }
    return { top: 0 }
  }
})
