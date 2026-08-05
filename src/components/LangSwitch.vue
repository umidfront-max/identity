<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useLang } from '@/composables/useLang.js'

const { langs, current, setLang, t } = useLang()
const open = ref(false)
const root = ref(null)

function pick (code) { setLang(code); open.value = false }
function onDoc (e) { if (root.value && !root.value.contains(e.target)) open.value = false }

onMounted(() => document.addEventListener('click', onDoc))
onBeforeUnmount(() => document.removeEventListener('click', onDoc))
</script>

<template>
  <div class="lang" ref="root">
    <button class="lang__btn" :aria-expanded="open" :aria-label="t('lang.title')" @click="open = !open">
      <span>{{ current.short }}</span>
      <svg viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </button>
    <Transition name="pop">
      <ul v-if="open" class="lang__menu" role="listbox">
        <li v-for="l in langs" :key="l.code">
          <button :class="{ 'is-on': l.code === current.code }" @click="pick(l.code)">
            <i>{{ l.short }}</i>{{ l.label }}
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.lang{position:relative}
.lang__btn{
  display:flex;align-items:center;gap:7px;padding:9px 13px;border-radius:999px;
  border:1px solid var(--line-2);background:var(--paper);cursor:pointer;
  font-family:var(--font-mono);font-size:12px;letter-spacing:.08em;font-weight:500;
  transition:border-color .3s,background .3s;
}
.lang__btn:hover{border-color:var(--ink);background:var(--surface)}
.lang__btn svg{width:9px}
.lang__menu{
  position:absolute;right:0;top:calc(100% + 8px);min-width:172px;padding:6px;
  background:var(--paper);border:1px solid var(--line);border-radius:14px;box-shadow:var(--e3);z-index:20;
}
.lang__menu button{
  width:100%;display:flex;align-items:center;gap:10px;padding:9px 11px;border:0;background:none;
  border-radius:9px;cursor:pointer;font-size:14px;font-weight:600;text-align:left;
  transition:background .2s;
}
.lang__menu button:hover{background:var(--surface)}
.lang__menu button.is-on{color:var(--red)}
.lang__menu i{font-style:normal;font-family:var(--font-mono);font-size:10.5px;color:var(--muted-2);letter-spacing:.08em}
.pop-enter-active,.pop-leave-active{transition:opacity .2s,transform .2s var(--ease)}
.pop-enter-from,.pop-leave-to{opacity:0;transform:translateY(-6px) scale(.97)}
</style>
