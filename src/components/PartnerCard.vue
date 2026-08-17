<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { PARTNER_LOGOS } from '@/data/partnerLogos.js'

const props = defineProps({ partner: { type: Object, required: true }, index: { type: Number, default: 0 } })
const { t } = useLang()

/* Logotip bo'lmasa — monogramma (VL, PT...) ko'rsatiladi */
const logo = computed(() => PARTNER_LOGOS[props.partner.logo] || null)
</script>

<template>
  <a :href="partner.url" target="_blank" rel="noopener" class="prt" v-reveal="index * 70">
    <div v-if="logo" class="prt__logo">
      <img :src="logo" :alt="partner.name" loading="lazy" decoding="async">
    </div>
    <div v-else class="prt__mark">{{ partner.mark }}</div>
    <div>
      <h3>{{ partner.name }}</h3>
      <p>
        {{ t(partner.k) }}
        <span v-if="partner.note" class="fnote" tabindex="0">*
          <span class="fnote__pop">{{ t('partners.note') }}</span>
        </span>
      </p>
      <span class="prt__site">{{ partner.site }} <i>&#8599;</i></span>
    </div>
  </a>
</template>

<style scoped>
.prt{
  display:flex;gap:20px;padding:26px;border-radius:var(--r-md);
  background:var(--paper);border:1px solid var(--line);
  transition:transform .4s var(--ease),box-shadow .4s var(--ease),border-color .3s;
}
.prt:hover{transform:translateY(-4px);box-shadow:var(--e2);border-color:var(--line-2)}
.prt__mark{
  flex:none;width:54px;height:54px;border-radius:14px;display:grid;place-items:center;
  background:linear-gradient(140deg,var(--ink),var(--blue));color:#fff;
  font-family:var(--font-mono);font-size:15px;letter-spacing:.05em;
  transition:transform .4s var(--ease);
}
.prt:hover .prt__mark{transform:rotate(-6deg) scale(1.05)}

/* logotiplarning nisbati har xil — balandligi bo'yicha tenglashtiramiz */
.prt__logo{
  flex:none;width:92px;height:54px;display:grid;place-items:center;
  transition:transform .4s var(--ease);
}
.prt__logo img{max-width:100%;max-height:36px;width:auto;height:auto;object-fit:contain}
.prt:hover .prt__logo{transform:scale(1.04)}
.prt h3{font-size:18px;margin-bottom:6px}
.prt p{color:var(--muted);font-size:15px;margin:0 0 10px}
.prt__site{font-family:var(--font-mono);font-size:12px;color:var(--blue);letter-spacing:.02em}
.prt__site i{font-style:normal}
.fnote{position:relative;color:var(--red);cursor:help;font-weight:700}
.fnote__pop{
  position:absolute;left:50%;bottom:calc(100% + 8px);transform:translateX(-50%) translateY(4px);
  width:250px;padding:10px 12px;border-radius:10px;background:var(--ink);color:#fff;
  font-size:12.5px;line-height:1.5;opacity:0;pointer-events:none;
  transition:opacity .25s,transform .25s var(--ease);z-index:5;
}
.fnote:hover .fnote__pop,.fnote:focus .fnote__pop{opacity:1;transform:translateX(-50%) translateY(0)}
</style>
