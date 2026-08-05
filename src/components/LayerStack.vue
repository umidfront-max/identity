<script setup>
import { ref } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { LAYERS } from '@/data/catalog.js'
import { PRODUCTS } from '@/data/products.js'

const { t, p } = useLang()
const active = ref(0)

function items (layer) {
  return layer.p
    .map(slug => PRODUCTS.find(x => x.slug === slug))
    .filter(Boolean)
    .map(x => ({ slug: x.slug, code: x.code, name: p(x).name }))
}
</script>

<template>
  <div class="stack">
    <article
      v-for="(l, i) in LAYERS" :key="l.k"
      class="layer" :class="{ 'is-active': active === i }"
      :style="{ '--accent': l.c, '--i': i }"
      v-reveal="i * 90"
      @mouseenter="active = i" @focusin="active = i">
      <div class="layer__bar" aria-hidden="true"></div>

      <div class="layer__head">
        <span class="layer__n">{{ l.n }}</span>
        <div>
          <div class="layer__t">{{ t(l.k + '.t') }}</div>
          <div class="layer__q">{{ t(l.k + '.q') }}</div>
        </div>
      </div>

      <div class="layer__body">
        <p>{{ t(l.k + '.d') }}</p>
        <div class="chips">
          <RouterLink v-for="it in items(l)" :key="it.slug" :to="`/p/${it.slug}`" class="chip">
            <i>{{ it.code }}</i>{{ it.name }}
          </RouterLink>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.stack{display:grid;gap:14px}
.layer{
  position:relative;overflow:hidden;
  display:grid;grid-template-columns:minmax(240px,.9fr) 1.4fr;gap:32px;
  padding:26px 30px 26px 34px;border-radius:var(--r-lg);
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);
  transition:background .4s var(--ease),border-color .4s,transform .4s var(--ease);
}
.layer:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.18);transform:translateX(6px)}
.layer__bar{
  position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--accent);
  transform:scaleY(0);transform-origin:top;transition:transform .55s var(--ease-out);
}
.layer.is-active .layer__bar{transform:scaleY(1)}

.layer__head{display:flex;gap:18px;align-items:flex-start}
.layer__n{
  font-family:var(--font-mono);font-size:12px;letter-spacing:.12em;
  color:var(--accent);padding-top:4px;
}
.layer__t{font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em;color:#fff}
.layer__q{font-size:14px;color:var(--muted-dark);margin-top:4px}

.layer__body p{color:var(--muted-dark);font-size:15.5px;margin:0 0 16px}
.layer__body .chip{
  background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.14);color:#fff;
}
.layer__body .chip:hover{border-color:var(--accent);background:rgba(255,255,255,.1)}
.layer__body .chip i{color:var(--accent)}

@media(max-width:900px){
  .layer{grid-template-columns:1fr;gap:16px;padding:22px 22px 22px 26px}
}
</style>
