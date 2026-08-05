<script setup>
import { computed } from 'vue'
import { useLang } from '@/composables/useLang.js'
import PageHero from '@/components/PageHero.vue'
import SectionHead from '@/components/SectionHead.vue'
import StatValue from '@/components/StatValue.vue'
import CtaBand from '@/components/CtaBand.vue'
import SignalField from '@/components/SignalField.vue'

const { t } = useLang()

const team = computed(() => [1, 2, 3, 4].map(n => t(`about.team${n}`)))
const metrics = computed(() => [1, 2, 3, 4].map(n => ({ b: t(`about.m${n}.b`), l: t(`about.m${n}.l`) })))
const adv = computed(() => [1, 2, 3, 4, 5, 6, 7].map(n => ({ t: t(`about.adv${n}.t`), d: t(`about.adv${n}.d`) })))
const regNote = computed(() => t('about.reg.note'))
</script>

<template>
  <div>
    <PageHero :title="t('about.title')" :lead="t('about.lead')" :crumb="t('nav.about')" />

    <!-- maqsad -->
    <section class="section">
      <div class="wrap split">
        <div>
          <div class="eyebrow" v-reveal>{{ t('about.goal.eyebrow') }}</div>
          <h2 v-reveal="60">{{ t('about.goal.title') }}</h2>
        </div>
        <div>
          <p v-reveal="120">{{ t('about.goal.p1') }}</p>
          <p v-reveal="180">{{ t('about.goal.p2') }}</p>
        </div>
      </div>
    </section>

    <!-- jamoa -->
    <section class="section section--surface">
      <div class="wrap split">
        <div>
          <div class="eyebrow" v-reveal>{{ t('about.team.eyebrow') }}</div>
          <h2 v-reveal="60">{{ t('about.team.title') }}</h2>
        </div>
        <ul class="ticks">
          <li v-for="(item, i) in team" :key="i" v-reveal="i * 80">
            <span class="ticks__mark" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none"><path d="M4 10.5l4 4 8-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- raqamlar -->
    <section class="section section--ink metrics">
      <SignalField :density="26" />
      <div class="wrap">
        <SectionHead :eyebrow="t('about.metrics.eyebrow')" :title="t('about.metrics.title')" />
        <div class="grid grid--4">
          <div v-for="(m, i) in metrics" :key="i" class="metric" v-reveal="i * 90">
            <StatValue :text="m.b" />
            <span>{{ m.l }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- afzalliklar -->
    <section class="section">
      <div class="wrap">
        <SectionHead :eyebrow="t('about.adv.eyebrow')" :title="t('about.adv.title')" />
        <div class="grid grid--3">
          <div v-for="(a, i) in adv" :key="i" class="card numcard" v-reveal="i * 70">
            <span class="numcard__n">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ a.t }}</h3>
            <p>{{ a.d }}</p>
          </div>
        </div>
        <p v-if="regNote" class="regnote" v-reveal>{{ regNote }}</p>
      </div>
    </section>

    <CtaBand source="about" />
  </div>
</template>

<style scoped>
.split{display:grid;grid-template-columns:.85fr 1.15fr;gap:56px;align-items:start}
.split p{color:var(--muted);font-size:16.5px}

.ticks{display:grid;gap:16px}
.ticks li{display:flex;gap:14px;align-items:flex-start;color:var(--muted);font-size:16px}
.ticks__mark{
  flex:none;width:26px;height:26px;border-radius:8px;display:grid;place-items:center;
  background:var(--paper);border:1px solid var(--line);color:var(--red);margin-top:2px;
}
.ticks__mark svg{width:14px}

.metrics{position:relative}
.metric{
  padding:28px 24px;border-radius:var(--r-md);
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);
  transition:background .4s,border-color .4s,transform .4s var(--ease);
}
.metric:hover{background:rgba(255,255,255,.07);border-color:rgba(226,59,51,.4);transform:translateY(-4px)}
.metric span{display:block;margin-top:14px;font-size:13.5px;color:var(--muted-dark);line-height:1.5}

.numcard{position:relative;padding-top:36px}
.numcard__n{
  position:absolute;top:22px;right:24px;font-family:var(--font-mono);font-size:12px;
  letter-spacing:.1em;color:var(--line-2);
}
.numcard h3{font-size:17.5px}
.regnote{margin-top:26px;font-size:14px;color:var(--muted-2);max-width:820px}

@media(max-width:900px){.split{grid-template-columns:1fr;gap:28px}}
</style>
