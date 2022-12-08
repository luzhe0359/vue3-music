<script setup lang="ts">
import Banner from '@/components/common/Banner.vue'
import DjProgram from '@/views/discover/DjProgram.vue'
import Video from './Video.vue'
import Mv from '@/views/discover/Mv.vue'
</script>

<template>
  <Banner :per-page="3" />
  <Video />
  <DjProgram />
  <Mv />
</template>

<style scoped></style>
