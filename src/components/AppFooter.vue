<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { CONFIG } from '@/data/config.js'
import { PRODUCTS } from '@/data/products.js'
import logoLight from '@/assets/img/logo-white.png'

const { t, p } = useLang()
const c = CONFIG.contacts
const year = new Date().getFullYear()
const products = computed(() => PRODUCTS.slice(0, 8).map(x => ({ slug: x.slug, name: p(x).name })))
</script>

<template>
  <footer class="ftr">
    <div class="ftr__line" aria-hidden="true"></div>
    <div class="wrap ftr__grid">
      <div class="ftr__brand">
        <img :src="logoLight" alt="Identity" width="150">
        <p>{{ t('hero.mission') }}</p>
      </div>

      <div>
        <h4>{{ t('footer.products') }}</h4>
        <ul>
          <li v-for="pr in products" :key="pr.slug">
            <RouterLink :to="`/p/${pr.slug}`">{{ pr.name }}</RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h4>{{ t('footer.company') }}</h4>
        <ul>
          <li><RouterLink to="/about">{{ t('footer.about') }}</RouterLink></li>
          <li><RouterLink to="/products">{{ t('nav.allProducts') }}</RouterLink></li>
          <li><RouterLink to="/promos">{{ t('nav.promos') }}</RouterLink></li>
          <li><RouterLink to="/contacts">{{ t('nav.contacts') }}</RouterLink></li>
          <li><RouterLink to="/privacy">{{ t('footer.privacy') }}</RouterLink></li>
        </ul>
      </div>

      <div>
        <h4>{{ t('footer.contacts') }}</h4>
        <ul>
          <li><a :href="`tel:${c.phoneHref}`">{{ c.phone }}</a></li>
          <li><a :href="`mailto:${c.email}`">{{ c.email }}</a></li>
          <li><a :href="c.telegram" target="_blank" rel="noopener">Telegram</a></li>
          <li class="ftr__addr">{{ t('contacts.address') }}</li>
        </ul>
      </div>
    </div>

    <div class="wrap ftr__bot">
      <span>© {{ year }} {{ t('footer.rights') }}</span>
      <RouterLink to="/privacy">{{ t('footer.privacy') }}</RouterLink>
    </div>
  </footer>
</template>

<style scoped>
.ftr{position:relative;background:var(--ink);color:#fff;padding:72px 0 34px;overflow:hidden}
.ftr__line{
  position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--blue),var(--red),transparent);
  background-size:200% 100%;animation:slide 8s linear infinite;
}
@keyframes slide{from{background-position:0 0}to{background-position:200% 0}}
.ftr__grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:44px}
.ftr__brand img{height:32px;width:auto;margin-bottom:18px}
.ftr__brand p{color:var(--muted-dark);font-size:15px;max-width:300px}
h4{
  font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;
  color:var(--muted-2);margin:0 0 16px;font-weight:500;
}
ul{display:grid;gap:9px}
li a{font-size:14.5px;color:rgba(255,255,255,.82);transition:color .25s,transform .25s var(--ease);display:inline-block}
li a:hover{color:var(--red-soft);transform:translateX(3px)}
.ftr__addr{font-size:13.5px;color:var(--muted-dark);line-height:1.5}
.ftr__bot{
  display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;
  margin-top:54px;padding-top:22px;border-top:1px solid rgba(255,255,255,.1);
  font-size:13px;color:var(--muted-2);
}
.ftr__bot a:hover{color:#fff}
@media(max-width:900px){.ftr__grid{grid-template-columns:1fr 1fr;gap:34px}}
@media(max-width:560px){.ftr__grid{grid-template-columns:1fr}}
</style>
