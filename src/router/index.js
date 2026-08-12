import { createRouter, createWebHashHistory } from 'vue-router'

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

export const router = createRouter({
  history: createWebHashHistory(),
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
