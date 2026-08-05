<script setup>
defineProps({ eyebrow: String, title: String, lead: String, center: Boolean })
</script>

<template>
  <div class="section__head" :class="{ 'is-center': center }">
    <div v-if="eyebrow" class="eyebrow" v-reveal>{{ eyebrow }}</div>
    <h2 v-if="title" v-reveal="60">{{ title }}</h2>
    <p v-if="lead" class="lead" v-reveal="120" style="margin-top:16px">{{ lead }}</p>
    <slot />
  </div>
</template>

<style scoped>
.is-center{margin-left:auto;margin-right:auto;text-align:center}
.is-center .eyebrow{justify-content:center}
</style>
