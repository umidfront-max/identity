<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLang } from '@/composables/useLang.js'
import { useScrollY } from '@/composables/useMotion.js'
import LangSwitch from '@/components/LangSwitch.vue'
import { PRODUCTS } from '@/data/products.js'
import logoDark from '@/assets/img/logo.png'

const { t, p } = useLang()
const route = useRoute()
const y = useScrollY()
const drawer = ref(false)
const mega = ref(false)

const solid = computed(() => y.value > 12)
const products = computed(() => PRODUCTS.map(x => ({ slug: x.slug, code: x.code, name: p(x).name })))

watch(() => route.fullPath, () => { drawer.value = false; mega.value = false })
watch(drawer, v => { document.body.style.overflow = v ? 'hidden' : '' })
</script>

<template>
  <header class="hdr" :class="{ 'is-solid': solid }">
    <div class="wrap hdr__bar">
      <RouterLink to="/" class="logo" aria-label="Identity">
        <img :src="logoDark" alt="Identity" width="150">
      </RouterLink>

      <nav class="nav" aria-label="main">
        <RouterLink to="/about" class="nav__a">{{ t('nav.about') }}</RouterLink>

        <div class="nav__drop" @mouseenter="mega = true" @mouseleave="mega = false">
          <RouterLink to="/products" class="nav__a" :class="{ 'is-open': mega }">
            {{ t('nav.products') }}
            <svg viewBox="0 0 12 8" class="nav__chev" aria-hidden="true"><path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </RouterLink>

          <Transition name="mega">
            <div v-if="mega" class="mega">
              <div class="mega__grid">
                <RouterLink
                  v-for="(pr, i) in products" :key="pr.slug"
                  :to="`/p/${pr.slug}`" class="mega__item"
                  :style="{ '--d': i * 28 + 'ms' }">
                  <i>{{ pr.code }}</i><span>{{ pr.name }}</span>
                </RouterLink>
              </div>
              <RouterLink to="/products" class="mega__all">
                {{ t('nav.allProducts') }} <i>&rarr;</i>
              </RouterLink>
            </div>
          </Transition>
        </div>

        <RouterLink to="/promos" class="nav__a">{{ t('nav.promos') }}</RouterLink>
        <RouterLink to="/contacts" class="nav__a">{{ t('nav.contacts') }}</RouterLink>
      </nav>

      <div class="hdr__side">
        <LangSwitch />
        <RouterLink to="/contacts" class="btn btn--primary btn--sm hdr__cta" v-magnet="0.14">
          {{ t('cta.discuss') }}
        </RouterLink>
        <button
          class="burger" :class="{ 'is-open': drawer }"
          :aria-expanded="drawer" aria-label="Menu"
          @click="drawer = !drawer">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- mobil menyu -->
    <Transition name="drawer">
      <div v-if="drawer" class="drawer">
        <RouterLink to="/" class="drawer__a">{{ t('nav.home') }}</RouterLink>
        <RouterLink to="/about" class="drawer__a">{{ t('nav.about') }}</RouterLink>
        <RouterLink to="/products" class="drawer__a">{{ t('nav.products') }}</RouterLink>
        <RouterLink to="/promos" class="drawer__a">{{ t('nav.promos') }}</RouterLink>
        <RouterLink to="/contacts" class="drawer__a">{{ t('nav.contacts') }}</RouterLink>
        <div class="drawer__list">
          <RouterLink v-for="pr in products" :key="pr.slug" :to="`/p/${pr.slug}`" class="drawer__p">
            <i>{{ pr.code }}</i>{{ pr.name }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.hdr{
  position:sticky;top:0;z-index:60;
  transition:background .4s var(--ease),box-shadow .4s var(--ease),backdrop-filter .4s;
}
.hdr.is-solid{
  background:rgba(255,255,255,.86);
  backdrop-filter:saturate(180%) blur(14px);
  box-shadow:0 1px 0 var(--line),0 10px 30px -22px rgba(7,11,30,.4);
}
.hdr__bar{display:flex;align-items:center;gap:24px;height:var(--header-h)}
.logo img{height:34px;width:auto;transition:transform .4s var(--ease)}
.logo:hover img{transform:scale(1.04)}

.nav{display:flex;align-items:center;gap:4px;margin-left:auto}
.nav__a{
  position:relative;display:inline-flex;align-items:center;gap:6px;
  padding:10px 14px;border-radius:999px;font-size:15px;font-weight:600;color:var(--ink);
  transition:color .3s,background .3s;
}
.nav__a::after{
  content:'';position:absolute;left:14px;right:14px;bottom:4px;height:1.5px;
  background:var(--red);transform:scaleX(0);transform-origin:right;
  transition:transform .4s var(--ease-out);
}
.nav__a:hover::after,.nav__a.router-link-active::after{transform:scaleX(1);transform-origin:left}
.nav__chev{width:10px;transition:transform .3s var(--ease)}
.nav__a.is-open .nav__chev{transform:rotate(180deg)}
.nav__drop{position:relative}

.mega{
  position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%);
  width:min(640px,86vw);padding:18px;border-radius:var(--r-lg);
  background:var(--paper);border:1px solid var(--line);box-shadow:var(--e3);
}
.mega__grid{display:grid;grid-template-columns:1fr 1fr;gap:4px}
.mega__item{
  display:flex;align-items:center;gap:12px;padding:11px 13px;border-radius:12px;
  font-size:14.5px;font-weight:600;
  animation:megaIn .4s var(--ease-out) both;animation-delay:var(--d);
  transition:background .25s,transform .25s var(--ease);
}
.mega__item i{
  font-style:normal;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.06em;
  color:var(--red);min-width:38px;
}
.mega__item:hover{background:var(--surface);transform:translateX(3px)}
.mega__all{
  display:block;margin-top:12px;padding-top:14px;border-top:1px solid var(--line);
  font-size:14px;font-weight:700;color:var(--blue);
}
.mega__all i{font-style:normal;display:inline-block;transition:transform .3s}
.mega__all:hover i{transform:translateX(5px)}
@keyframes megaIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.mega-enter-active,.mega-leave-active{transition:opacity .25s var(--ease),transform .25s var(--ease)}
.mega-enter-from,.mega-leave-to{opacity:0;transform:translate(-50%,8px)}

.hdr__side{display:flex;align-items:center;gap:12px}

.burger{
  display:none;width:42px;height:42px;border:1px solid var(--line-2);background:var(--paper);
  border-radius:12px;position:relative;cursor:pointer;
}
.burger span{
  position:absolute;left:11px;width:20px;height:1.8px;background:var(--ink);border-radius:2px;
  transition:transform .35s var(--ease),opacity .2s;
}
.burger span:nth-child(1){top:14px}
.burger span:nth-child(2){top:20px}
.burger span:nth-child(3){top:26px}
.burger.is-open span:nth-child(1){transform:translateY(6px) rotate(45deg)}
.burger.is-open span:nth-child(2){opacity:0}
.burger.is-open span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}

.drawer{
  position:fixed;inset:var(--header-h) 0 0;background:var(--paper);
  padding:24px 28px 60px;overflow-y:auto;z-index:55;
}
.drawer__a{display:block;padding:14px 0;font-size:21px;font-weight:700;font-family:var(--font-display);border-bottom:1px solid var(--line)}
.drawer__list{margin-top:22px;display:grid;gap:2px}
.drawer__p{display:flex;gap:12px;padding:11px 0;font-size:14.5px;color:var(--muted);font-weight:600}
.drawer__p i{font-style:normal;font-family:var(--font-mono);font-size:10.5px;color:var(--red);min-width:38px}
.drawer-enter-active,.drawer-leave-active{transition:opacity .3s,transform .3s var(--ease)}
.drawer-enter-from,.drawer-leave-to{opacity:0;transform:translateY(-8px)}

@media(max-width:1040px){
  .nav{display:none}
  .burger{display:block}
  .hdr__side{margin-left:auto}
  .hdr__cta{display:none}
  .hdr{background:rgba(255,255,255,.9);backdrop-filter:blur(12px)}
}
</style>
