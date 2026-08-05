<script setup>
/* Ba'zi mahsulotlarda (masalan, antifrod) yo'nalishlar bo'yicha
   qo'shimcha ma'lumot bo'ladi — ularni tab ko'rinishida ko'rsatamiz. */
import { ref } from 'vue'

defineProps({ tabs: { type: Array, required: true } })
const active = ref(0)
</script>

<template>
  <div class="tabs">
    <div class="tabs__bar" role="tablist">
      <button
        v-for="(tab, i) in tabs" :key="tab.t"
        class="tabs__btn" :class="{ 'is-on': active === i }"
        role="tab" :aria-selected="active === i"
        @click="active = i">
        <span>{{ tab.t }}</span>
      </button>
    </div>

    <Transition name="fade" mode="out-in">
      <div class="tabs__panel" :key="active" role="tabpanel">
        <p class="tabs__d">{{ tabs[active].d }}</p>
        <ul v-if="tabs[active].list">
          <li v-for="(item, i) in tabs[active].list" :key="i" :style="{ '--d': i * 70 + 'ms' }">
            <span class="dot" aria-hidden="true"></span>{{ item }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.tabs__bar{
  display:flex;gap:6px;flex-wrap:wrap;
  padding:6px;border-radius:999px;background:var(--surface);border:1px solid var(--line);
  width:fit-content;max-width:100%;margin-bottom:28px;
}
.tabs__btn{
  position:relative;border:0;background:none;cursor:pointer;
  padding:11px 22px;border-radius:999px;font-size:14.5px;font-weight:700;color:var(--muted);
  transition:color .3s,background .35s var(--ease);
}
.tabs__btn.is-on{background:var(--ink);color:#fff}
.tabs__btn:not(.is-on):hover{color:var(--ink)}

.tabs__panel{max-width:820px}
.tabs__d{font-size:17px;color:var(--ink);margin-bottom:20px}
.tabs__panel ul{display:grid;gap:13px}
.tabs__panel li{
  display:flex;gap:14px;align-items:flex-start;color:var(--muted);font-size:15.5px;
  animation:itemIn .5s var(--ease-out) both;animation-delay:var(--d);
}
@keyframes itemIn{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:none}}
.dot{
  flex:none;width:7px;height:7px;border-radius:50%;background:var(--red);margin-top:9px;
  box-shadow:0 0 0 4px rgba(226,59,51,.14);
}
.fade-enter-active,.fade-leave-active{transition:opacity .25s var(--ease),transform .25s var(--ease)}
.fade-enter-from{opacity:0;transform:translateY(8px)}
.fade-leave-to{opacity:0}
@media(max-width:620px){
  .tabs__bar{border-radius:16px;width:100%}
  .tabs__btn{flex:1;padding:10px 14px;font-size:13.5px}
}
</style>
