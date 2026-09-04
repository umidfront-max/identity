<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { useLang } from '@/composables/useLang.js'
import { useAnalytics, topInterest } from '@/composables/useAnalytics.js'
import { CONFIG } from '@/data/config.js'
import { PRODUCTS } from '@/data/products.js'

const props = defineProps({ product: { type: String, default: '' } })
const { t, p, lang } = useLang()
const { track } = useAnalytics()

/* Rozilik sukut bo'yicha belgilangan, ism majburiy emas */
const form = reactive({ name: '', phone: '', email: '', product: '', message: '', consent: true })
const errors = reactive({ phone: false, consent: false })
const state = ref('idle') // idle | sending | ok | err
const errText = ref('')   // backend qaytargan validatsiya xabari

const options = computed(() => PRODUCTS.map(x => ({ slug: x.slug, name: p(x).name })))
const busy = computed(() => state.value === 'sending')

/* Rozilik matnidagi {link} o'rniga maxfiylik siyosatiga havola qo'yiladi */
const consentParts = computed(() => t('form.consent').split('{link}'))

/* Mahsulot slug'i -> Lead API ning direction enum'i (lead-api-doc.html, 1.1) */
const DIRECTION = {
  'custom-development': 'CUSTOM_DEV',
  'faceid':             'FACE_ID',
  'video-analytics':    'VIDEO_ANALYTICS',
  'antifraud':          'ANTIFRAUD',
  'edr':                'EDR',
  'dlp':                'DLP',
  'ips-ids':            'IPS_IDS',
  'waf-antiddos':       'WAF_DDOS',
  'sast-dast':          'SAST_DAST'
}

/* API cheklovlari: phone majburiy, qolganlari ixtiyoriy va uzunligi chegaralangan */
const PHONE_RE = /^\+?[0-9()\-\s]{7,20}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

onMounted(() => {
  /* Qiziqish tarixi bo'yicha mahsulotni oldindan tanlaymiz */
  form.product = props.product || topInterest() || ''
})

function validate () {
  errors.phone = !PHONE_RE.test(form.phone.trim())
  errors.consent = !form.consent
  return !errors.phone && !errors.consent
}

/* Menejer zayavka qaysi sahifadan kelganini ko'rishi uchun (max 200 belgi) */
function sourceLine () {
  const prod = PRODUCTS.find(x => x.slug === form.product)
  const page = prod ? p(prod).name : document.title
  /* Hujjatdagi standart ko'rinish: identity-uz.com — страница «Название» */
  return `${location.hostname} — страница «${page}»`.slice(0, 200)
}

/* Lead API kutadigan payload; bo'sh ixtiyoriy maydonlar umuman yuborilmaydi */
function leadPayload () {
  const out = {
    direction: DIRECTION[form.product] || 'GENERAL',
    phone: form.phone.trim(),
    source: sourceLine()
  }
  const name = form.name.trim()
  const email = form.email.trim()
  const task = form.message.trim()
  if (name) out.name = name.slice(0, 100)
  if (email && EMAIL_RE.test(email)) out.email = email
  if (task) out.task = task.slice(0, 2000)
  return out
}

async function submit () {
  if (busy.value) return
  if (!validate()) return

  state.value = 'sending'
  errText.value = ''
  const payload = leadPayload()

  track('generate_lead', {
    product: form.product || 'any',
    interest: topInterest() || '',
    language: lang.value
  })

  if (!CONFIG.formEndpoint) {
    /* Endpoint sozlanmagan — mailto orqali yuboramiz */
    const body = Object.entries(payload).map(([k, v]) => `${k}: ${v}`).join('\n')
    location.href = `mailto:${CONFIG.contacts.sales}?subject=${encodeURIComponent('Identity — ' + t('form.title'))}&body=${encodeURIComponent(body)}`
    state.value = 'ok'
    return
  }

  try {
    const res = await fetch(CONFIG.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    /* 202 Accepted — zayavka qabul qilindi va Telegram botga yuborilyapti */
    if (res.status === 202 || res.ok) {
      state.value = 'ok'
      Object.assign(form, { name: '', phone: '', email: '', message: '', consent: true })
      return
    }
    if (res.status === 400) {
      const err = await res.json().catch(() => ({}))
      errText.value = err.message || ''
    }
    state.value = 'err'
  } catch (e) {
    state.value = 'err'
  }
}
</script>

<template>
  <form class="form" novalidate @submit.prevent="submit">
    <div class="field">
      <label for="f-name">{{ t('form.name') }} <em>{{ t('form.optional') }}</em></label>
      <input id="f-name" v-model="form.name" type="text" autocomplete="name">
    </div>

    <div class="field">
      <label for="f-phone">{{ t('form.phone') }}</label>
      <input id="f-phone" v-model="form.phone" type="tel" autocomplete="tel" :class="{ 'has-err': errors.phone }">
    </div>

    <div class="field">
      <label for="f-email">{{ t('form.email') }} <em>{{ t('form.optional') }}</em></label>
      <input id="f-email" v-model="form.email" type="email" autocomplete="email">
    </div>

    <div class="field">
      <label for="f-product">{{ t('form.product') }}</label>
      <select id="f-product" v-model="form.product">
        <option value="">{{ t('form.productAny') }}</option>
        <option v-for="o in options" :key="o.slug" :value="o.slug">{{ o.name }}</option>
      </select>
    </div>

    <div class="field field--full">
      <label for="f-message">{{ t('form.message') }} <em>{{ t('form.optional') }}</em></label>
      <textarea id="f-message" v-model="form.message" rows="4" :placeholder="t('form.messagePh')"></textarea>
    </div>

    <label class="consent field--full" :class="{ 'has-err': errors.consent }">
      <input type="checkbox" v-model="form.consent">
      <span>{{ consentParts[0]
        }}<RouterLink
          v-if="consentParts.length > 1" to="/privacy"
          class="consent__link" @click.stop>{{ t('form.consentLink') }}</RouterLink>{{ consentParts[1] }}</span>
    </label>

    <p v-if="errors.phone" class="msg msg--err field--full">{{ t('form.reqErr') }}</p>
    <p v-else-if="errors.consent" class="msg msg--err field--full">{{ t('form.consentErr') }}</p>

    <div class="field--full form__foot">
      <button type="submit" class="btn btn--primary" :disabled="busy" v-magnet="0.12">
        {{ busy ? t('cta.sending') : t('cta.send') }}
      </button>
      <Transition name="pop">
        <p v-if="state === 'ok'" class="msg msg--ok">{{ CONFIG.formEndpoint ? t('form.ok') : t('form.mailto') }}</p>
      </Transition>
      <Transition name="pop">
        <p v-if="state === 'err'" class="msg msg--err">{{ errText || t('form.err') }}</p>
      </Transition>
    </div>
  </form>
</template>

<style scoped>
.form{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.field{display:flex;flex-direction:column;gap:8px}
.field--full{grid-column:1/-1}
label{font-size:13.5px;font-weight:700;letter-spacing:-.01em}
label em{font-style:normal;font-weight:500;color:var(--muted-2)}
input[type=text],input[type=tel],input[type=email],select,textarea{
  width:100%;padding:14px 16px;border-radius:12px;font:inherit;font-size:15.5px;
  border:1px solid var(--line-2);background:var(--paper);color:var(--ink);
  transition:border-color .3s,box-shadow .3s,background .3s;
}
input:focus,select:focus,textarea:focus{
  outline:none;border-color:var(--blue);box-shadow:0 0 0 4px rgba(46,61,143,.12);
}
.has-err{border-color:var(--red) !important}
textarea{resize:vertical;min-height:110px}

.consent{
  display:flex;gap:12px;align-items:flex-start;font-weight:500;font-size:14px;color:var(--muted);
  padding:14px 16px;border:1px solid var(--line);border-radius:12px;background:var(--surface);
  cursor:pointer;transition:border-color .3s;
}
.consent input{margin-top:3px;accent-color:var(--red);width:17px;height:17px}
.consent__link{
  color:var(--blue);text-decoration:underline;text-decoration-thickness:1px;
  text-underline-offset:3px;font-weight:700;
  transition:color .25s,text-decoration-color .25s;
}
.consent__link:hover{color:var(--red);text-decoration-thickness:2px}
.consent.has-err{border-color:var(--red)}

.form__foot{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.msg{margin:0;font-size:14px;font-weight:600}
.msg--ok{color:#1E8A5B}
.msg--err{color:var(--red)}
.pop-enter-active{transition:opacity .3s,transform .3s var(--ease)}
.pop-enter-from{opacity:0;transform:translateY(6px)}

button[disabled]{opacity:.65;cursor:progress}
@media(max-width:640px){.form{grid-template-columns:1fr}}
</style>
