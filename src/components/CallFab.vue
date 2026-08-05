<script setup>
import { ref } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { useAnalytics } from '@/composables/useAnalytics.js'
import { CONFIG } from '@/data/config.js'

const { t } = useLang()
const { track } = useAnalytics()
const open = ref(false)
const c = CONFIG.contacts

function toggle () {
  open.value = !open.value
  if (open.value) track('contact_widget_open')
}
</script>

<template>
  <div class="fab">
    <Transition name="panel">
      <div v-if="open" class="fab__panel">
        <button class="fab__x" :aria-label="t('chat.close')" @click="open = false">&times;</button>
        <div class="fab__title">{{ t('chat.title') }}</div>
        <a :href="`tel:${c.phoneHref}`" class="fab__row" @click="track('contact_click', { channel: 'phone' })">
          <i>TEL</i>{{ c.phone }}
        </a>
        <a :href="`mailto:${c.email}`" class="fab__row" @click="track('contact_click', { channel: 'email' })">
          <i>MAIL</i>{{ c.email }}
        </a>
        <a :href="c.telegram" target="_blank" rel="noopener" class="fab__row" @click="track('contact_click', { channel: 'telegram' })">
          <i>TG</i>Telegram
        </a>
        <RouterLink to="/contacts" class="btn btn--primary btn--sm fab__cta" @click="open = false">
          {{ t('cta.request') }}
        </RouterLink>
      </div>
    </Transition>

    <button class="fab__btn" :aria-expanded="open" :aria-label="t('chat.open')" @click="toggle">
      <span class="fab__ping" aria-hidden="true"></span>
      <svg v-if="!open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
        <path d="M21 15.5v3a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3 19 19 0 0 1-6-6 19.5 19.5 0 0 1-3-8.6A2 2 0 0 1 3.3 1h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7.4 8.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/>
      </svg>
      <span v-else class="fab__close">&times;</span>
    </button>
  </div>
</template>

<style scoped>
.fab{position:fixed;right:24px;bottom:24px;z-index:70;display:flex;flex-direction:column;align-items:flex-end;gap:12px}
.fab__btn{
  position:relative;width:58px;height:58px;border-radius:50%;border:0;cursor:pointer;
  background:var(--red);color:#fff;display:grid;place-items:center;
  box-shadow:0 18px 34px -14px rgba(226,59,51,.85);
  transition:transform .35s var(--ease),background .3s;
}
.fab__btn:hover{transform:translateY(-3px) scale(1.04);background:var(--red-600)}
.fab__btn svg{width:23px}
.fab__close{font-size:30px;line-height:1;margin-top:-3px}
.fab__ping{
  position:absolute;inset:0;border-radius:50%;border:2px solid var(--red);
  animation:ping 2.6s var(--ease-out) infinite;
}
@keyframes ping{0%{opacity:.7;scale:1}70%{opacity:0;scale:1.55}100%{opacity:0;scale:1.55}}

.fab__panel{
  position:relative;width:288px;padding:22px 20px 20px;border-radius:20px;
  background:var(--paper);border:1px solid var(--line);box-shadow:var(--e3);
}
.fab__x{position:absolute;right:12px;top:8px;border:0;background:none;font-size:24px;cursor:pointer;color:var(--muted-2)}
.fab__title{font-family:var(--font-display);font-weight:600;font-size:17px;margin-bottom:14px}
.fab__row{
  display:flex;align-items:center;gap:12px;padding:10px 0;font-size:14.5px;font-weight:600;
  border-bottom:1px solid var(--line);transition:color .25s;
}
.fab__row:hover{color:var(--red)}
.fab__row i{font-style:normal;font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;color:var(--muted-2);min-width:34px}
.fab__cta{width:100%;margin-top:16px}
.panel-enter-active,.panel-leave-active{transition:opacity .3s,transform .3s var(--ease)}
.panel-enter-from,.panel-leave-to{opacity:0;transform:translateY(12px) scale(.96)}
@media(max-width:600px){.fab{right:16px;bottom:16px}.fab__panel{width:min(300px,86vw)}}
</style>
