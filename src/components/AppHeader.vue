<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useLang } from '@/composables/useLang.js'
import { useScrollY } from '@/composables/useMotion.js'
import LangSwitch from '@/components/LangSwitch.vue'
import { PRODUCTS } from '@/data/products.js'
import logoDark from '@/assets/img/logo.png'
import logoLight from '@/assets/img/logo-white.png'

const { t, p, lang } = useLang()
const route = useRoute()
const y = useScrollY()

const drawer = ref(false)
const mega = ref(false)
const navRef = ref(null)
const megaRef = ref(null)

/* suzuvchi indikator: nav elementlari orasida siljiydi */
const pill = ref({ x: 0, w: 0, on: false })

/* sahifa tepasida header qorong'i hero ustida suzadi -> oq logotip va yorug' matn */
const solid = computed(() => y.value > 10)
const overDark = computed(() => !solid.value && !drawer.value)
const products = computed(() => PRODUCTS.map(x => ({ slug: x.slug, code: x.code, name: p(x).name })))

function movePill (el) {
  if (!el || !navRef.value) return
  const a = el.getBoundingClientRect()
  const b = navRef.value.getBoundingClientRect()
  pill.value = { x: a.left - b.left, w: a.width, on: true }
}

/* sichqoncha nav'dan chiqqanda — joriy sahifaga qaytadi */
function syncPill () {
  const el = navRef.value?.querySelector('.nav__a.router-link-active')
  if (el) movePill(el)
  else pill.value = { ...pill.value, on: false }
}

/* mega panelda kursor ortidan yuruvchi yorug'lik */
function onMegaMove (e) {
  const el = megaRef.value
  if (!el) return
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

watch(() => route.fullPath, () => {
  drawer.value = false
  mega.value = false
  nextTick(syncPill)
})
watch(lang, () => nextTick(syncPill))
watch(drawer, v => { document.body.style.overflow = v ? 'hidden' : '' })

onMounted(() => {
  nextTick(syncPill)
  window.addEventListener('resize', syncPill)
  document.fonts?.ready.then(syncPill)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', syncPill)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="hdr" :class="{ 'is-solid': solid, 'is-open': drawer, 'is-over': overDark }">
    <div class="hdr__rail">
      <div class="shell">
        <RouterLink to="/" class="logo" aria-label="Identity">
          <img class="logo__img" :src="logoDark" alt="Identity" width="150">
          <img class="logo__img logo__img--light" :src="logoLight" alt="" aria-hidden="true" width="150">
          <span class="logo__sheen" aria-hidden="true"></span>
        </RouterLink>

        <nav class="nav" ref="navRef" aria-label="main" @mouseleave="syncPill">
          <span
            class="nav__pill" aria-hidden="true"
            :class="{ 'is-on': pill.on }"
            :style="{ transform: `translateX(${pill.x}px)`, width: pill.w + 'px' }"></span>

          <RouterLink to="/about" class="nav__a" @mouseenter="movePill($event.currentTarget)">
            <span>{{ t('nav.about') }}</span>
          </RouterLink>

          <div class="nav__drop" @mouseenter="mega = true" @mouseleave="mega = false">
            <RouterLink
              to="/products" class="nav__a" :class="{ 'is-open': mega }"
              @mouseenter="movePill($event.currentTarget)">
              <span>{{ t('nav.products') }}</span>
              <svg viewBox="0 0 12 8" class="nav__chev" aria-hidden="true">
                <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>

            <Transition name="mega">
              <div v-if="mega" class="mega-wrap">
                <div class="mega" ref="megaRef" @mousemove="onMegaMove">
                  <span class="mega__glow" aria-hidden="true"></span>
                  <div class="mega__grid">
                    <RouterLink
                      v-for="(pr, i) in products" :key="pr.slug"
                      :to="`/p/${pr.slug}`" class="mega__item"
                      :style="{ '--d': 40 + i * 26 + 'ms' }">
                      <span class="mega__name">{{ pr.name }}</span>
                      <svg viewBox="0 0 14 10" class="mega__arw" aria-hidden="true">
                        <path d="M1 5h11M8.5 1.5 12 5l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </RouterLink>
                  </div>
                  <RouterLink to="/products" class="mega__all">
                    <span>{{ t('nav.allProducts') }}</span>
                    <svg viewBox="0 0 14 10" aria-hidden="true">
                      <path d="M1 5h11M8.5 1.5 12 5l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </RouterLink>
                </div>
              </div>
            </Transition>
          </div>

          <RouterLink to="/promos" class="nav__a" @mouseenter="movePill($event.currentTarget)">
            <span>{{ t('nav.promos') }}</span>
          </RouterLink>
          <RouterLink to="/contacts" class="nav__a" @mouseenter="movePill($event.currentTarget)">
            <span>{{ t('nav.contacts') }}</span>
          </RouterLink>
        </nav>

        <div class="hdr__side">
          <LangSwitch />
          <RouterLink to="/contacts" class="btn btn--primary btn--sm hdr__cta" v-magnet="0.14">
            <span>{{ t('cta.discuss') }}</span>
            <svg viewBox="0 0 14 10" aria-hidden="true">
              <path d="M1 5h11M8.5 1.5 12 5l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>

          <button
            class="burger" :class="{ 'is-open': drawer }"
            :aria-expanded="drawer" aria-label="Menu"
            @click="drawer = !drawer">
            <span></span><span></span>
          </button>
        </div>
      </div>
    </div>

    <!-- mobil menyu: to'liq ekran -->
    <Transition name="drawer">
      <div v-if="drawer" class="drawer">
        <nav class="drawer__nav">
          <RouterLink v-for="(l, i) in [
              { to: '/', k: 'nav.home' },
              { to: '/about', k: 'nav.about' },
              { to: '/products', k: 'nav.products' },
              { to: '/promos', k: 'nav.promos' },
              { to: '/contacts', k: 'nav.contacts' }
            ]" :key="l.to" :to="l.to" class="drawer__a" :style="{ '--i': i }">
            <span>{{ t(l.k) }}</span>
            <svg viewBox="0 0 14 10" aria-hidden="true">
              <path d="M1 5h11M8.5 1.5 12 5l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
        </nav>

        <div class="drawer__list">
          <RouterLink
            v-for="(pr, i) in products" :key="pr.slug"
            :to="`/p/${pr.slug}`" class="drawer__p" :style="{ '--i': i + 5 }">
            <i>{{ pr.code }}</i><span>{{ pr.name }}</span>
          </RouterLink>
        </div>

        <RouterLink to="/contacts" class="btn btn--primary drawer__cta" :style="{ '--i': products.length + 5 }">
          {{ t('cta.discuss') }}
        </RouterLink>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* ============ karkas: qorong'i hero ustida suzadi, scroll'da shisha orolga aylanadi ============ */
.hdr{position:fixed;top:0;left:0;right:0;z-index:60}
.hdr::before{
  content:'';position:absolute;inset:0 0 -30px;pointer-events:none;
  background:linear-gradient(180deg,rgba(5,8,26,.55),transparent);
  opacity:0;transition:opacity .45s var(--ease);
}
.hdr.is-over::before{opacity:1}
/* menyu ochiq — panel yorug', shuning uchun tepa qism ham yorug' bo'ladi */
.hdr.is-open{
  background:rgba(255,255,255,.92);
  backdrop-filter:blur(26px) saturate(180%);
  -webkit-backdrop-filter:blur(26px) saturate(180%);
}

.hdr__rail{
  position:relative;display:flex;align-items:center;
  height:var(--header-h);width:100%;max-width:var(--wrap);margin:0 auto;padding:0 28px;
  transition:max-width .55s var(--ease),padding .55s var(--ease);
}
.hdr.is-solid .hdr__rail{max-width:calc(var(--wrap) - 36px);padding:0 18px}

.shell{
  position:relative;flex:1;display:flex;align-items:center;gap:22px;
  height:100%;padding:0;border-radius:22px;border:1px solid transparent;
  transition:height .5s var(--ease),padding .5s var(--ease),background .5s var(--ease),
             border-color .5s var(--ease),box-shadow .5s var(--ease),backdrop-filter .5s;
}
.hdr.is-solid .shell{
  height:60px;padding:0 8px 0 20px;
  background:rgba(255,255,255,.72);
  backdrop-filter:blur(22px) saturate(180%);
  -webkit-backdrop-filter:blur(22px) saturate(180%);
  border-color:rgba(207,214,232,.75);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 20px 44px -26px rgba(7,11,30,.5);
}

/* ============ logo ============ */
.logo{position:relative;display:block;overflow:hidden;border-radius:8px;flex:none}
.logo__img{height:34px;width:auto;transition:transform .5s var(--ease),opacity .4s var(--ease)}
/* oq va qora variant bir-birining ustida — o'tish yumshoq */
.logo__img--light{position:absolute;inset:0;opacity:0}
.hdr.is-over .logo__img{opacity:0}
.hdr.is-over .logo__img--light{opacity:1}
.logo:hover .logo__img{transform:scale(1.03)}
.logo__sheen{
  position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(105deg,transparent 38%,rgba(255,255,255,.85) 50%,transparent 62%);
  transform:translateX(-120%);
}
.logo:hover .logo__sheen{animation:sheen .85s var(--ease-out)}
@keyframes sheen{to{transform:translateX(120%)}}

/* ============ navigatsiya + suzuvchi indikator ============ */
.nav{position:relative;display:flex;align-items:center;gap:2px;margin-left:auto}
.nav__pill{
  position:absolute;left:0;top:50%;height:38px;margin-top:-19px;border-radius:999px;
  background:linear-gradient(180deg,rgba(46,61,143,.10),rgba(46,61,143,.05));
  border:1px solid rgba(46,61,143,.12);
  opacity:0;transform-origin:left;pointer-events:none;
  transition:transform .48s var(--ease-out),width .48s var(--ease-out),opacity .3s;
}
.nav__pill.is-on{opacity:1}

.nav__a{
  position:relative;z-index:1;display:inline-flex;align-items:center;gap:7px;
  padding:10px 15px;border-radius:999px;font-size:14.5px;font-weight:600;
  letter-spacing:-.005em;color:var(--muted);
  transition:color .3s var(--ease);
}
.nav__a:hover,.nav__a.router-link-active{color:var(--ink)}

/* --- qorong'i hero ustidagi variant --- */
.hdr.is-over .nav__a{color:rgba(255,255,255,.72)}
.hdr.is-over .nav__a:hover,.hdr.is-over .nav__a.router-link-active{color:#fff}
.hdr.is-over .nav__pill{
  background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.06));
  border-color:rgba(255,255,255,.16);
}
.hdr.is-over .nav__a::after{background:var(--red-soft)}
.hdr.is-over .burger{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.2)}
.hdr.is-over .burger:hover{background:rgba(255,255,255,.16)}
.hdr.is-over .burger span{background:#fff}
.hdr.is-over :deep(.lang__btn){
  color:#fff;background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.18);
}
.hdr.is-over :deep(.lang__btn:hover){background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.3)}
.nav__a::after{
  content:'';position:absolute;left:50%;bottom:2px;width:4px;height:4px;margin-left:-2px;
  border-radius:50%;background:var(--red);
  opacity:0;transform:scale(0);transition:opacity .3s,transform .4s var(--ease-out);
}
.nav__a.router-link-active::after{opacity:1;transform:scale(1)}
.nav__chev{width:10px;flex:none;transition:transform .35s var(--ease)}
.nav__a.is-open .nav__chev{transform:rotate(180deg)}
.nav__drop{position:relative}

/* ============ mega menyu ============ */
.mega-wrap{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:16px}
.mega{
  position:relative;width:min(740px,92vw);padding:16px;border-radius:26px;overflow:hidden;
  background:rgba(255,255,255,.86);
  backdrop-filter:blur(26px) saturate(180%);
  -webkit-backdrop-filter:blur(26px) saturate(180%);
  border:1px solid rgba(207,214,232,.8);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 34px 70px -30px rgba(7,11,30,.45);
}
.mega__glow{
  position:absolute;inset:0;pointer-events:none;opacity:.85;
  background:radial-gradient(240px 240px at var(--mx,50%) var(--my,0),rgba(91,111,214,.16),transparent 70%);
}
/* minmax(0,1fr) — bo'lmasa uzun nomlar ustunni panel tashqarisiga cho'zadi */
.mega__grid{position:relative;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2px}
.mega__item{
  display:flex;align-items:center;gap:10px;min-width:0;
  padding:11px 14px;border-radius:14px;
  font-size:14.5px;font-weight:600;line-height:1.35;
  animation:megaIn .5s var(--ease-out) both;animation-delay:var(--d);
  transition:background .28s,color .28s;
}
/* nom to'liq ko'rinadi: kerak bo'lsa ikkinchi qatorga o'tadi */
.mega__name{flex:1;min-width:0;overflow-wrap:anywhere}
.mega__arw{
  width:14px;flex:none;color:var(--blue);
  opacity:0;transform:translateX(-6px);
  transition:opacity .28s,transform .32s var(--ease-out);
}
.mega__item:hover{background:rgba(46,61,143,.07)}
.mega__item:hover .mega__arw{opacity:1;transform:none}

.mega__all{
  position:relative;display:flex;align-items:center;gap:8px;
  margin-top:12px;padding:13px 13px 2px;
  border-top:1px solid var(--line);
  font-size:14px;font-weight:700;color:var(--blue);
}
.mega__all svg{width:14px;transition:transform .32s var(--ease)}
.mega__all:hover svg{transform:translateX(5px)}

@keyframes megaIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.mega-enter-active .mega,.mega-leave-active .mega{
  transition:opacity .3s var(--ease),transform .38s var(--ease-out),filter .3s;
  transform-origin:top center;
}
.mega-enter-from .mega,.mega-leave-to .mega{
  opacity:0;transform:translateY(-10px) scale(.97);filter:blur(6px);
}

/* ============ o'ng tomon ============ */
.hdr__side{display:flex;align-items:center;gap:10px}
.hdr__cta svg{width:14px;transition:transform .32s var(--ease)}
.hdr__cta:hover svg{transform:translateX(4px)}
.hdr__side :deep(.lang__btn){
  border-color:transparent;background:rgba(46,61,143,.06);
}
.hdr__side :deep(.lang__btn:hover){border-color:var(--line-2);background:rgba(46,61,143,.1)}

/* ============ burger ============ */
.burger{
  display:none;width:44px;height:44px;flex:none;border:1px solid var(--line-2);
  background:var(--paper);border-radius:14px;position:relative;cursor:pointer;
  transition:background .3s,border-color .3s;
}
.burger:hover{background:var(--surface)}
.burger span{
  position:absolute;left:12px;width:20px;height:1.8px;background:var(--ink);border-radius:2px;
  transition:transform .42s var(--ease-out),width .42s var(--ease-out);
}
.burger span:nth-child(1){top:18px}
.burger span:nth-child(2){top:24px;width:13px}
.burger.is-open span:nth-child(1){transform:translateY(3px) rotate(45deg)}
.burger.is-open span:nth-child(2){transform:translateY(-3px) rotate(-45deg);width:20px}

/* ============ mobil menyu ============ */
.drawer{
  position:fixed;inset:var(--header-h) 0 0;z-index:55;
  display:flex;flex-direction:column;
  padding:20px 28px 60px;overflow-y:auto;
  background:rgba(255,255,255,.92);
  backdrop-filter:blur(26px) saturate(180%);
  -webkit-backdrop-filter:blur(26px) saturate(180%);
}
.drawer__nav{display:flex;flex-direction:column}
.drawer__a,.drawer__p,.drawer__cta{
  animation:drawerIn .5s var(--ease-out) both;
  animation-delay:calc(var(--i) * 45ms + 60ms);
}
.drawer__a{
  display:flex;align-items:center;justify-content:space-between;gap:14px;
  padding:15px 0;font-size:26px;font-weight:600;font-family:var(--font-display);
  letter-spacing:-.02em;border-bottom:1px solid var(--line);
  transition:color .3s;
}
.drawer__a svg{width:16px;color:var(--line-2);transition:transform .35s var(--ease),color .3s}
.drawer__a:hover,.drawer__a.router-link-active{color:var(--blue)}
.drawer__a:hover svg,.drawer__a.router-link-active svg{transform:translateX(5px);color:var(--red)}

.drawer__list{margin-top:26px;display:grid;gap:2px}
.drawer__p{
  display:flex;align-items:center;gap:12px;padding:11px 12px;margin:0 -12px;
  border-radius:12px;font-size:14.5px;color:var(--muted);font-weight:600;
  transition:background .25s,color .25s;
}
.drawer__p:hover{background:var(--surface);color:var(--ink)}
.drawer__p i{font-style:normal;font-family:var(--font-mono);font-size:10.5px;color:var(--red);min-width:38px}
.drawer__cta{margin-top:28px;align-self:flex-start}

@keyframes drawerIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.drawer-enter-active,.drawer-leave-active{transition:opacity .35s var(--ease)}
.drawer-enter-from,.drawer-leave-to{opacity:0}

/* ============ moslashuvchanlik ============ */
@media(max-width:1040px){
  .nav{display:none}
  .burger{display:block}
  .hdr__side{margin-left:auto}
  .hdr__cta{display:none}
  .hdr__rail{padding:0 20px}
  .hdr.is-solid .hdr__rail{max-width:100%;padding:0 14px}
  .hdr.is-solid .shell{padding:0 8px 0 16px}
  .hdr.is-open .shell{background:transparent;border-color:transparent;box-shadow:none}
}
@media(max-width:760px){
  .drawer{padding:16px 20px 60px}
  .drawer__a{font-size:22px}
}

@media (prefers-reduced-motion:reduce){
  .nav__pill,.mega__item,.drawer__a,.drawer__p,.drawer__cta,.logo__sheen{
    animation:none !important;transition:none !important;
  }
}
</style>
