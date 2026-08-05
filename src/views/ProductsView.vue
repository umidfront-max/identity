<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { useAnalytics } from '@/composables/useAnalytics.js'
import { PRODUCTS } from '@/data/products.js'
import PageHero from '@/components/PageHero.vue'
import CtaBand from '@/components/CtaBand.vue'

const { t, p } = useLang()
const { track, bumpInterest } = useAnalytics()

const list = computed(() => PRODUCTS.map(x => ({
  slug: x.slug,
  code: x.code,
  name: p(x).name,
  short: p(x).short,
  tasks: (p(x).tasks || []).slice(0, 3)
})))

function open (slug, i) {
  bumpInterest(slug)
  track('product_card_click', { product: slug, position: i + 1, source: 'catalog' })
}
</script>

<template>
  <div>
    <PageHero :title="t('products.title')" :lead="t('products.lead')" :crumb="t('nav.products')" />

    <section class="section">
      <div class="wrap catalog">
        <RouterLink
          v-for="(pr, i) in list" :key="pr.slug"
          :to="`/p/${pr.slug}`" class="row" v-reveal="i * 55"
          @click="open(pr.slug, i)">
          <span class="row__code">{{ pr.code }}</span>
          <span class="row__main">
            <span class="row__name">{{ pr.name }}</span>
            <span class="row__short">{{ pr.short }}</span>
            <span class="row__tags">
              <em v-for="task in pr.tasks" :key="task">{{ task }}</em>
            </span>
          </span>
          <span class="row__go" aria-hidden="true">&rarr;</span>
        </RouterLink>
      </div>
    </section>

    <CtaBand source="products" />
  </div>
</template>

<style scoped>
.catalog{display:grid;gap:10px}
.row{
  position:relative;overflow:hidden;
  display:grid;grid-template-columns:88px 1fr 44px;gap:24px;align-items:center;
  padding:26px 28px;border-radius:var(--r-md);
  background:var(--paper);border:1px solid var(--line);
  transition:border-color .35s,box-shadow .4s var(--ease),transform .4s var(--ease);
}
.row::before{
  content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--red);
  transform:scaleY(0);transform-origin:top;transition:transform .45s var(--ease-out);
}
.row:hover{border-color:transparent;box-shadow:var(--e2);transform:translateX(6px)}
.row:hover::before{transform:scaleY(1)}
.row__code{
  font-family:var(--font-mono);font-size:12px;letter-spacing:.12em;color:var(--muted-2);
  transition:color .3s;
}
.row:hover .row__code{color:var(--red)}
.row__name{display:block;font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em}
.row__short{display:block;margin-top:6px;color:var(--muted);font-size:15px}
.row__tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.row__tags em{
  font-style:normal;font-size:12.5px;color:var(--muted-2);
  padding:4px 10px;border-radius:999px;background:var(--surface);
}
.row__go{
  font-size:20px;color:var(--muted-2);justify-self:end;
  transition:transform .35s var(--ease),color .3s;
}
.row:hover .row__go{transform:translateX(6px);color:var(--red)}
@media(max-width:760px){
  .row{grid-template-columns:1fr;gap:10px;padding:22px}
  .row__go{display:none}
}
</style>
