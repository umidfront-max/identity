<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLang } from '@/composables/useLang.js'
import { useAnalytics } from '@/composables/useAnalytics.js'
import { promoBySlug } from '@/data/promos.js'
import { IMAGES } from '@/data/images.js'
import PageHero from '@/components/PageHero.vue'
import SectionHead from '@/components/SectionHead.vue'
import LeadForm from '@/components/LeadForm.vue'

const props = defineProps({ slug: String })
const { t, p } = useLang()
const { track } = useAnalytics()
const router = useRouter()

const promo = computed(() => promoBySlug(props.slug))
const data = computed(() => (promo.value ? p(promo.value) : {}))

function register () {
  if (!promo.value) { router.replace('/promos'); return }
  track('view_promo', { promo: props.slug, item_name: data.value.title })
}

onMounted(register)
watch(() => props.slug, register)
</script>

<template>
  <div v-if="promo">
    <PageHero
      :title="data.title"
      :lead="data.lead"
      :code="data.badge"
      :crumb="t('nav.promos')" />

    <!-- matn + taklif -->
    <section class="section section--tight">
      <div class="wrap body">
        <div class="body__txt">
          <p v-for="(par, i) in data.body" :key="i" v-reveal="i * 70">{{ par }}</p>
        </div>
        <aside class="offer" v-reveal:right>
          <span class="offer__badge">{{ data.badge }}</span>
          <p>{{ data.offer }}</p>
          <RouterLink :to="{ hash: '#lead' }" class="btn btn--primary btn--sm">{{ t('cta.request') }}</RouterLink>
        </aside>
      </div>
    </section>

    <!-- bloklangan urinishlar galereyasi -->
    <section v-if="data.examples && data.examples.length" class="section section--surface">
      <div class="wrap">
        <SectionHead :title="data.examplesTitle" />
        <div class="shots">
          <figure v-for="(ex, i) in data.examples" :key="i" class="shot" v-reveal="i * 90">
            <div class="shot__frame">
              <img
                v-if="IMAGES[ex.img]" :src="IMAGES[ex.img]" :alt="ex.t"
                loading="lazy" decoding="async">
              <span class="shot__flag">{{ t('promo.blocked') }}</span>
            </div>
            <figcaption>
              <b>{{ ex.t }}</b>
              <span>{{ ex.d }}</span>
            </figcaption>
          </figure>
        </div>
        <p v-if="data.note" class="shots__note" v-reveal>{{ data.note }}</p>
      </div>
    </section>

    <!-- vazifalar guruhlari -->
    <section v-if="data.groups && data.groups.length" class="section section--surface">
      <div class="wrap">
        <SectionHead :title="data.examplesTitle" />
        <div class="grid grid--2">
          <div v-for="(g, i) in data.groups" :key="i" class="card grp" v-reveal="i * 80">
            <h3>{{ g.t }}</h3>
            <ul>
              <li v-for="(it, k) in g.items" :key="k">
                <span class="dot" aria-hidden="true"></span>{{ it }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ariza -->
    <section id="lead" class="section">
      <div class="wrap formgrid">
        <div>
          <SectionHead :eyebrow="promo.code" :title="t('form.title')" :lead="data.offer" />
        </div>
        <div class="formcard" v-reveal:right>
          <LeadForm :product="props.slug" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.body{display:grid;grid-template-columns:1.35fr .65fr;gap:56px;align-items:start}
.body__txt p{color:var(--muted);font-size:16.5px;line-height:1.7}
.body__txt p:first-child{font-size:19px;line-height:1.55;color:var(--ink);font-weight:500;letter-spacing:-.012em}

.offer{
  position:relative;padding:28px 26px;border-radius:var(--r-lg);overflow:hidden;
  background:linear-gradient(160deg,#FFF,#F4F6FC);
  border:1px solid var(--line);box-shadow:0 24px 54px -34px rgba(7,11,30,.35);
}
.offer::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--red)}
.offer__badge{
  display:inline-block;font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--red);margin-bottom:12px;
}
.offer p{font-size:15.5px;color:var(--ink);line-height:1.55;margin:0 0 18px}

/* ---------- bloklangan urinishlar ---------- */
.shots{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.shot{margin:0}
.shot__frame{
  position:relative;border-radius:var(--r-lg);overflow:hidden;aspect-ratio:3/4;
  background:var(--ink-2);border:1px solid var(--line-2);
  box-shadow:0 22px 48px -30px rgba(7,11,30,.5);
}
.shot__frame img{width:100%;height:100%;object-fit:cover;display:block}
.shot__frame::after{
  content:'';position:absolute;inset:0;pointer-events:none;
  box-shadow:inset 0 0 0 2px rgba(226,59,51,.85);border-radius:inherit;
}
.shot__flag{
  position:absolute;left:12px;top:12px;padding:5px 11px;border-radius:999px;
  background:var(--red);color:#fff;
  font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;
}
.shot figcaption{margin-top:14px}
.shot figcaption b{display:block;font-size:15.5px;margin-bottom:5px}
.shot figcaption span{font-size:14px;color:var(--muted);line-height:1.5}
.shots__note{margin-top:26px;font-size:13.5px;color:var(--muted-2)}

/* ---------- guruhlar ---------- */
.grp h3{font-size:17.5px;margin-bottom:14px}
.grp ul{display:grid;gap:10px}
.grp li{display:flex;gap:12px;align-items:flex-start;font-size:15px;color:var(--muted);line-height:1.5}
.dot{
  flex:none;width:6px;height:6px;border-radius:50%;background:var(--red);margin-top:8px;
  box-shadow:0 0 0 4px rgba(226,59,51,.13);
}

.formgrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:48px;align-items:start}
.formcard{background:var(--paper);border:1px solid var(--line);border-radius:var(--r-lg);padding:32px;box-shadow:var(--e1)}

@media(max-width:900px){
  .body,.formgrid{grid-template-columns:1fr;gap:28px}
  .shots{grid-template-columns:1fr}
  .formcard{padding:24px 20px}
}
@media(max-width:640px){
  .shots{gap:26px}
}
</style>
