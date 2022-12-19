<script setup lang="ts">
import Banner from '@/components/common/Banner.vue'
import Personalized from '@/views/discover/Personalized.vue'
import PersonalizedNewSong from '@/views/discover/PersonalizedNewSong.vue'
import Mv from './Mv.vue'
</script>

<template>
  <div class="px-5">
    <h1 class="text-3xl font-bold pt-8 pb-4 select-none">推荐</h1>
    <Banner :per-page="3" />
    <Personalized />
    <PersonalizedNewSong />
    <Mv />
  </div>
</template>

<style scoped></style>
