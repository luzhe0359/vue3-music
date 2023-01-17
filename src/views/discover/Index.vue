<script setup lang="ts">
import Banner from '@/components/Banner.vue'
import Personalized from '@/views/discover/Personalized.vue'
import PersonalizedNewSong from '@/views/discover/PersonalizedNewSong.vue'
import Mv from './Mv.vue'
</script>

<template>
  <Banner :per-page="3" />
  <Personalized />
  <PersonalizedNewSong />
  <Mv />
</template>

<style scoped></style>
