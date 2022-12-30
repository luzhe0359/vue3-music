<script setup lang="ts">
defineProps<{
  desc: string
}>()
</script>
<template>
  <div class="mt-6 mb-2 text-sm font-bold">专题介绍</div>
  <div class="text-sm text-desc leading-7 whitespace-pre-wrap">{{ desc }}</div>
</template>
