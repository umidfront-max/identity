<script setup>
/* Mahsulot sahifasidagi rasm galereyasi (masalan, bloklangan DeepFake urinishlari). */
import { IMAGES } from '@/data/images.js'

defineProps({
  items: { type: Array, required: true },
  flagText: { type: String, default: '' }
})
</script>

<template>
  <div class="gal">
    <figure v-for="(it, i) in items" :key="i" class="gal__it" v-reveal="i * 80">
      <div class="gal__frame" :class="{ 'is-flagged': it.flag !== false }">
        <img
          v-if="IMAGES[it.img]" :src="IMAGES[it.img]" :alt="it.t"
          loading="lazy" decoding="async">
        <span v-if="it.flag !== false && flagText" class="gal__flag">{{ flagText }}</span>
      </div>
      <figcaption>
        <b>{{ it.t }}</b>
        <span>{{ it.d }}</span>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.gal{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.gal__it{margin:0}
.gal__frame{
  position:relative;border-radius:var(--r-lg);overflow:hidden;aspect-ratio:3/4;
  background:var(--ink-2);border:1px solid var(--line-2);
  box-shadow:0 22px 48px -30px rgba(7,11,30,.5);
}
.gal__frame img{width:100%;height:100%;object-fit:cover;display:block}
/* qizil ramka — «bu kadr rad etilgan» degan vizual belgi */
.gal__frame.is-flagged::after{
  content:'';position:absolute;inset:0;pointer-events:none;border-radius:inherit;
  box-shadow:inset 0 0 0 2px rgba(226,59,51,.85);
}
.gal__flag{
  position:absolute;left:12px;top:12px;padding:5px 11px;border-radius:999px;
  background:var(--red);color:#fff;
  font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;
}
.gal figcaption{margin-top:14px}
.gal figcaption b{display:block;font-size:15px;margin-bottom:5px}
.gal figcaption span{font-size:13.5px;color:var(--muted);line-height:1.5}

@media(max-width:1000px){.gal{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.gal{grid-template-columns:1fr;gap:26px}}
</style>
