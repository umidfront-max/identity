<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLang } from '@/composables/useLang.js'
import { useAnalytics } from '@/composables/useAnalytics.js'
import { PRODUCTS } from '@/data/products.js'
import { CONFIG } from '@/data/config.js'
import PageHero from '@/components/PageHero.vue'
import SectionHead from '@/components/SectionHead.vue'
import LeadForm from '@/components/LeadForm.vue'
import ProductTabs from '@/components/ProductTabs.vue'
import ProductModules from '@/components/ProductModules.vue'
import ProductTracks from '@/components/ProductTracks.vue'
import ProductGallery from '@/components/ProductGallery.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'

const props = defineProps({ slug: String })
const { t, p } = useLang()
const { track, bumpInterest } = useAnalytics()
const router = useRouter()

const product = computed(() => PRODUCTS.find(x => x.slug === props.slug) || null)
const data = computed(() => (product.value ? p(product.value) : {}))

/* Taqdimot fayli config'da ko'rsatilgan bo'lsagina tugma chiziladi */
const presentation = computed(() => (CONFIG.presentations || {})[props.slug] || null)

/* Matnni bo'laklarga ajratadi: **qalin** va [[havola]] — v-html ishlatmasdan.
   [[...]] product.sourceUrl ga olib boradigan havola bo'lib chiziladi. */
function parts (text) {
  return String(text || '')
    .split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/)
    .filter(Boolean)
    .map(s => {
      if (s.startsWith('**')) return { s: s.slice(2, -2), b: true }
      if (s.startsWith('[[')) return { s: s.slice(2, -2), l: true }
      return { s }
    })
}

const related = computed(() =>
  PRODUCTS.filter(x => x.slug !== props.slug)
    .slice(0, 4)
    .map(x => ({ slug: x.slug, code: x.code, name: p(x).name, short: p(x).short }))
)

/* Ro'yxat ko'rinishidagi bo'limlar — faqat ma'lumot bo'lsa chiziladi */
const lists = computed(() => [
  { key: 'p.tasks', items: data.value.tasks },
  { key: 'p.delivery', items: data.value.delivery },
  { key: 'p.compliance', items: data.value.compliance },
  { key: 'p.detectors', items: data.value.detectors },
  { key: 'p.solutions', items: data.value.solutions },
  { key: 'p.attacks', items: data.value.attacks },
  { key: 'p.roadmap', items: data.value.roadmap }
].filter(s => Array.isArray(s.items) && s.items.length))

function register () {
  if (!product.value) { router.replace('/products'); return }
  bumpInterest(props.slug)
  track('view_item', { product: props.slug, item_name: data.value.name })
}

onMounted(register)
watch(() => props.slug, register)
</script>

<template>
  <div v-if="product">
    <PageHero
      :title="data.name"
      :lead="data.short"
      :code="product.code"
      :crumb="data.name" />

    <!-- kirish -->
    <section class="section section--tight">
      <div class="wrap intro">
        <div class="intro__txt">
          <p v-if="data.introBadge" class="intro__badge" v-reveal>{{ data.introBadge }}</p>

          <p class="intro__lead" v-reveal="40">
            <template v-for="(part, k) in parts(data.intro)" :key="k"
              ><a
                v-if="part.l" class="intro__doc"
                :href="product.docUrl" target="_blank" rel="noopener"
                >{{ part.s }}</a
              ><strong v-else-if="part.b">{{ part.s }}</strong><template v-else>{{ part.s }}</template
            ></template>
          </p>

          <div v-if="data.alert" class="intro__alert" v-reveal="80">
            <p>
              <template v-for="(part, k) in parts(data.alert)" :key="k"
                ><strong v-if="part.b">{{ part.s }}</strong><template v-else>{{ part.s }}</template
              ></template>
            </p>
            <a
              v-if="data.sourceLabel" class="intro__src"
              :href="product.sourceUrl" target="_blank" rel="noopener">{{ data.sourceLabel }}</a>
          </div>

          <p v-else-if="data.sourceLabel" v-reveal="60">
            <a class="intro__src" :href="product.sourceUrl" target="_blank" rel="noopener">{{ data.sourceLabel }}</a>
          </p>
        </div>
        <div class="intro__act" v-reveal="80">
          <RouterLink :to="{ hash: '#lead' }" class="btn btn--primary" v-magnet="0.15"
            @click="track('cta_click', { cta: 'product-pilot', product: props.slug })">
            {{ t('cta.pilot') }}
          </RouterLink>
          <a
            v-if="presentation" class="btn btn--ghost" :href="presentation" download
            @click="track('cta_click', { cta: 'product-presentation', product: props.slug })">
            {{ t('cta.presentation') }}
          </a>
        </div>
      </div>
    </section>

    <!-- rasmli galereya (masalan, bloklangan DeepFake urinishlari) -->
    <section v-if="data.gallery && data.gallery.items" class="section">
      <div class="wrap">
        <SectionHead :title="data.gallery.title" :lead="data.gallery.lead" />
        <ProductGallery :items="data.gallery.items" :flag-text="data.gallery.flag" />
        <p v-if="data.gallery.note" class="galnote" v-reveal>{{ data.gallery.note }}</p>
      </div>
    </section>

    <!-- yo'nalishlar: ikki tab, har birida o'z kontenti -->
    <section v-if="data.tracks && data.tracks.length" class="section">
      <div class="wrap" v-reveal>
        <ProductTracks :tracks="data.tracks" />
      </div>
    </section>

    <!-- modullar: rasm + imkoniyatlar -->
    <section v-if="data.modules && data.modules.length" class="section">
      <div class="wrap">
        <SectionHead :title="t('p.modules')" :lead="t('p.modulesLead')" />
        <ProductModules :modules="data.modules" />
      </div>
    </section>

    <!-- ro'yxatli bo'limlar -->
    <section
      v-for="(sec, si) in lists" :key="sec.key"
      class="section section--tight" :class="{ 'section--surface': si % 2 === 0 }">
      <div class="wrap listgrid">
        <h2 v-reveal>{{ t(sec.key) }}</h2>
        <ul>
          <li v-for="(item, i) in sec.items" :key="i" v-reveal="i * 60">
            <span class="dot" aria-hidden="true"></span>{{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- tarkib: karusel yoki tab ko'rinishida -->
    <section v-if="data.tabs && data.tabs.length" class="section section--tight">
      <div class="wrap" v-reveal>
        <SectionHead v-if="product.tabsKey" :title="t(product.tabsKey)" />
        <ProductCarousel v-if="product.tabsAs === 'carousel'" :items="data.tabs" />
        <ProductTabs v-else :tabs="data.tabs" />
      </div>
    </section>

    <!-- keyslar -->
    <section v-if="data.cases && data.cases.length" class="section">
      <div class="wrap">
        <SectionHead :title="t(product.casesKey || 'p.cases')" />
        <div class="grid grid--3">
          <article v-for="(c, i) in data.cases" :key="i" class="card casecard" v-reveal="i * 80">
            <span class="casecard__n">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ c.t }}</h3>
            <p>{{ c.d }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- afzalliklar -->
    <section v-if="data.adv && data.adv.length" class="section section--ink">
      <div class="wrap">
        <SectionHead :title="t('p.adv')" />
        <div class="grid grid--2">
          <div v-for="(a, i) in data.adv" :key="i" class="advcard" v-reveal="i * 70">
            <h3>{{ a.t }}</h3>
            <p>{{ a.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- so'rov formasi -->
    <section id="lead" class="section section--surface">
      <div class="wrap formgrid">
        <div>
          <SectionHead :eyebrow="product.code" :title="t('form.title')" :lead="t('p.ctaText')" />
        </div>
        <div class="formcard" v-reveal:right>
          <LeadForm :product="props.slug" />
        </div>
      </div>
    </section>

    <!-- yaqin yo'nalishlar -->
    <section class="section">
      <div class="wrap">
        <SectionHead :title="t('p.related')" />
        <div class="grid grid--4">
          <RouterLink
            v-for="(r, i) in related" :key="r.slug"
            :to="`/p/${r.slug}`" class="card rel" v-reveal="i * 70">
            <i>{{ r.code }}</i>
            <h3>{{ r.name }}</h3>
            <p>{{ r.short }}</p>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.intro{display:grid;grid-template-columns:1.4fr auto;gap:40px;align-items:center}
.intro__act{display:flex;flex-wrap:wrap;gap:12px}
.galnote{margin-top:26px;font-size:13.5px;color:var(--muted-2)}
.intro__lead{font-size:clamp(15px,1.35vw,17.5px);color:var(--ink);margin:0;line-height:1.6;max-width:66ch}
.intro__lead strong{font-weight:700;color:var(--ink)}
/* majburiy talab — diqqatni tortuvchi qator */
.intro__badge{
  margin:0 0 14px;font-family:var(--font-display);
  font-size:clamp(19px,1.9vw,23px);font-weight:600;line-height:1.25;
  color:var(--ink);letter-spacing:-.025em;
}
/* qaror raqami — hujjatga havola */
.intro__doc{
  color:var(--blue);font-weight:700;
  text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px;
  transition:color .25s,text-decoration-thickness .25s;
}
.intro__doc:hover{color:var(--red);text-decoration-thickness:2px}

/* jarima haqidagi izoh — fon va ramkasiz, shrifti yuqoridagi matn bilan bir xil */
.intro__alert{margin-top:14px;max-width:66ch}
.intro__alert p{
  margin:0;font-size:clamp(15px,1.35vw,17.5px);line-height:1.6;color:var(--ink);
}
.intro__alert strong{font-weight:700;color:var(--red)}

.intro__src{
  display:inline-block;margin-top:10px;
  font-size:clamp(15px,1.35vw,17.5px);line-height:1.6;color:var(--blue);font-weight:600;
  text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px;
  transition:color .25s,text-decoration-thickness .25s;
}
.intro__src:hover{color:var(--red);text-decoration-thickness:2px}

.listgrid{display:grid;grid-template-columns:.75fr 1.25fr;gap:48px;align-items:start}
.listgrid ul{display:grid;gap:14px}
.listgrid li{display:flex;gap:14px;align-items:flex-start;color:var(--muted);font-size:16px}
.dot{
  flex:none;width:7px;height:7px;border-radius:50%;background:var(--red);margin-top:10px;
  box-shadow:0 0 0 4px rgba(226,59,51,.14);
}

.casecard{position:relative;padding-top:36px}
.advcard{
  padding:26px 28px;border-radius:var(--r-md);
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);
  transition:background .4s,border-color .4s,transform .4s var(--ease);
}
.advcard:hover{background:rgba(255,255,255,.07);border-color:rgba(226,59,51,.35);transform:translateY(-3px)}
.advcard h3{font-size:17.5px;margin-bottom:8px}
.advcard p{margin:0;font-size:15px}

.formgrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:48px;align-items:start}
.formcard{background:var(--paper);border:1px solid var(--line);border-radius:var(--r-lg);padding:32px;box-shadow:var(--e1)}

.rel i{
  font-style:normal;font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;
  color:var(--red);display:block;margin-bottom:10px;
}
.rel h3{font-size:16.5px;margin-bottom:6px}
.rel p{font-size:14px}

@media(max-width:900px){
  .intro,.listgrid,.formgrid{grid-template-columns:1fr;gap:24px}
  .formcard{padding:24px 20px}
}
</style>
