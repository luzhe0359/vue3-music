<script setup lang="ts">
import CoverPlay from '@/components/CoverPlay.vue'
import { useRouter } from 'vue-router'
import type { Mv } from '@/models/mv'

defineProps<{ mvList: Mv[] }>()

const router = useRouter()
</script>

<template>
  <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
    <div v-for="item in mvList" :key="item.id" @click="router.push({ name: 'mvDetail', query: { id: item.id } })">
      <CoverPlay :pic-url="item.cover" video :name="item.name" :play-count="item.playCount" show-play-count />
      <div class="truncate text-xs mt-2">{{ item.name }}</div>
      <div class="truncate text-xs mt-1.5 text-title">
        <small>{{ item.artistName }}</small>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
