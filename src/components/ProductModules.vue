<script setup>
/* Mahsulot modullari: rasm + tavsif + imkoniyatlar ro'yxati.
   Rasmlar statik import qilinadi — Vite ularni hash bilan bundle qiladi. */
import ppe from '@/assets/img/va/ppe.jpg'
import zones from '@/assets/img/va/zones.jpg'
import fire from '@/assets/img/va/fire.jpg'
import vehicle from '@/assets/img/va/vehicle.jpg'

const IMAGES = { ppe, zones, fire, vehicle }

defineProps({ modules: { type: Array, required: true } })

/* rasm o'z tomonidan suzib chiqadi: toq qatorlarda o'ngdan, juftlarida chapdan */
const dir = i => (i % 2 === 1 ? 'right' : 'left')
</script>

<template>
  <div class="mods">
    <article
      v-for="(m, i) in modules" :key="m.t"
      class="mod" :class="{ 'is-flip': i % 2 === 1 }">

      <figure class="mod__media" v-reveal:[dir(i)]>
        <div class="mod__frame">
          <img
            v-if="IMAGES[m.img]" :src="IMAGES[m.img]" :alt="m.t"
            width="1024" height="1024" loading="lazy" decoding="async">
          <span class="mod__scan" aria-hidden="true"></span>
          <span class="mod__corners" aria-hidden="true"></span>
        </div>
      </figure>

      <div class="mod__body" v-reveal="60">
        <span class="mod__n">{{ String(i + 1).padStart(2, '0') }}</span>
        <h3>{{ m.t }}</h3>
        <p class="mod__d">{{ m.d }}</p>
        <ul class="mod__list">
          <li v-for="(item, k) in m.list" :key="k">
            <span class="dot" aria-hidden="true"></span>{{ item }}
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<style scoped>
.mods{display:grid;gap:88px}
.mod{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.mod.is-flip .mod__media{order:2}

/* ---------- rasm ---------- */
.mod__media{margin:0}
.mod__frame{
  position:relative;border-radius:var(--r-xl);overflow:hidden;
  aspect-ratio:16/11;background:var(--ink-2);
  border:1px solid var(--line);
  box-shadow:0 34px 70px -38px rgba(7,11,30,.6);
}
.mod__frame img{
  width:100%;height:100%;object-fit:cover;display:block;
  transition:transform .8s var(--ease);
}
.mod:hover .mod__frame img{transform:scale(1.04)}

/* kadr ustidan o'tuvchi skaner chizig'i */
.mod__scan{
  position:absolute;left:0;right:0;height:34%;pointer-events:none;
  background:linear-gradient(180deg,transparent,rgba(226,59,51,.16) 78%,rgba(226,59,51,.9));
  animation:modScan 5.5s cubic-bezier(.45,0,.55,1) infinite;
}
@keyframes modScan{0%,100%{transform:translateY(-40%)}50%{transform:translateY(300%)}}

/* burchak qavslari — "analiz qilinmoqda" hissi */
.mod__corners{
  position:absolute;inset:16px;pointer-events:none;border-radius:14px;
  background:
    linear-gradient(var(--red),var(--red)) left top/22px 2px no-repeat,
    linear-gradient(var(--red),var(--red)) left top/2px 22px no-repeat,
    linear-gradient(var(--red),var(--red)) right top/22px 2px no-repeat,
    linear-gradient(var(--red),var(--red)) right top/2px 22px no-repeat,
    linear-gradient(var(--red),var(--red)) left bottom/22px 2px no-repeat,
    linear-gradient(var(--red),var(--red)) left bottom/2px 22px no-repeat,
    linear-gradient(var(--red),var(--red)) right bottom/22px 2px no-repeat,
    linear-gradient(var(--red),var(--red)) right bottom/2px 22px no-repeat;
  opacity:.75;
}

/* ---------- matn ---------- */
.mod__n{
  display:block;font-family:var(--font-mono);font-size:12px;letter-spacing:.16em;
  color:var(--red);margin-bottom:14px;
}
.mod__body h3{font-size:clamp(21px,2.1vw,27px);letter-spacing:-.025em;margin-bottom:12px}
.mod__d{font-size:17px;color:var(--ink);line-height:1.55;margin:0 0 22px;max-width:46ch}
.mod__list{display:grid;gap:11px}
.mod__list li{
  display:flex;gap:13px;align-items:flex-start;
  font-size:15.5px;color:var(--muted);line-height:1.5;
}
.dot{
  flex:none;width:6px;height:6px;border-radius:50%;background:var(--red);margin-top:9px;
  box-shadow:0 0 0 4px rgba(226,59,51,.13);
}

@media(max-width:900px){
  .mods{gap:56px}
  .mod{grid-template-columns:1fr;gap:26px}
  .mod.is-flip .mod__media{order:0}
  .mod__d{font-size:16px}
}
@media (prefers-reduced-motion:reduce){
  .mod__scan{animation:none;opacity:0}
  .mod:hover .mod__frame img{transform:none}
}
</style>
