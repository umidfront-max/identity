<script setup>
import { useLang } from '@/composables/useLang.js'
import { CONFIG } from '@/data/config.js'
import PageHero from '@/components/PageHero.vue'
import LeadForm from '@/components/LeadForm.vue'
import SectionHead from '@/components/SectionHead.vue'
import { useAnalytics } from '@/composables/useAnalytics.js'

const { t } = useLang()
const { track } = useAnalytics()
const c = CONFIG.contacts
</script>

<template>
  <div>
    <PageHero :title="t('contacts.title')" :lead="t('contacts.lead')" :crumb="t('nav.contacts')" />

    <section class="section">
      <div class="wrap cgrid">
        <aside class="cinfo">
          <a :href="`tel:${c.phoneHref}`" class="cinfo__row" v-reveal
             @click="track('contact_click', { channel: 'phone' })">
            <span>{{ t('contacts.phone') }}</span><b>{{ c.phone }}</b>
          </a>
          <a :href="`mailto:${c.email}`" class="cinfo__row" v-reveal="70"
             @click="track('contact_click', { channel: 'email' })">
            <span>{{ t('contacts.email') }}</span><b>{{ c.email }}</b>
          </a>
          <a :href="`mailto:${c.emailBio}`" class="cinfo__row" v-reveal="105"
             @click="track('contact_click', { channel: 'email-bio' })">
            <span>{{ t('contacts.emailBio') }}</span><b>{{ c.emailBio }}</b>
          </a>
          <a :href="`mailto:${c.emailSec}`" class="cinfo__row" v-reveal="140"
             @click="track('contact_click', { channel: 'email-sec' })">
            <span>{{ t('contacts.emailSec') }}</span><b>{{ c.emailSec }}</b>
          </a>
          <a :href="c.telegram" target="_blank" rel="noopener" class="cinfo__row" v-reveal="175"
             @click="track('contact_click', { channel: 'telegram' })">
            <span>{{ t('contacts.tg') }}</span><b>@identity_uz</b>
          </a>
          <div class="cinfo__row is-static" v-reveal="210">
            <span>{{ t('contacts.addressLabel') }}</span><b>{{ t('contacts.address') }}</b>
          </div>
          <div class="cinfo__row is-static" v-reveal="245">
            <span>{{ t('contacts.hours') }}</span><b>{{ t('contacts.hoursVal') }}</b>
          </div>
        </aside>

        <div id="lead" class="cform" v-reveal:right>
          <SectionHead :eyebrow="t('cta.request')" :title="t('form.title')" />
          <LeadForm />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cgrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:48px;align-items:start}
.cinfo{display:grid;gap:2px}
.cinfo__row{
  display:grid;gap:5px;padding:20px 22px;border-radius:14px;
  border:1px solid transparent;transition:background .3s,border-color .3s,transform .3s var(--ease);
}
.cinfo__row:not(.is-static):hover{background:var(--surface);border-color:var(--line);transform:translateX(4px)}
.cinfo__row span{
  font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted-2);
}
.cinfo__row b{font-size:17px;font-weight:700;letter-spacing:-.015em}
.cform{background:var(--paper);border:1px solid var(--line);border-radius:var(--r-lg);padding:34px;box-shadow:var(--e1)}
.cform :deep(.section__head){margin-bottom:28px}
@media(max-width:900px){
  .cgrid{grid-template-columns:1fr;gap:28px}
  .cform{padding:24px 20px}
}
</style>
