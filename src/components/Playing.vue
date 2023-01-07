<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { WavesLeft, Music } from '@icon-park/vue-next'
import IconPark from '@/components/IconPark.vue'
import { usePlayerStore } from '@/stores/player'

defineProps<{
  index: number
  playingId: number
}>()

const { id, isPlaying } = storeToRefs(usePlayerStore())
</script>

<template>
  <template v-if="playingId == id">
    <IconPark v-if="isPlaying" class="text-active" :icon="WavesLeft" size="16" :stroke-width="2" />
    <IconPark v-else class="text-active" :icon="Music" size="16" :stroke-width="2" />
  </template>
  <div v-else>{{ index + 1 }}</div>
</template>

<style lang="scss"></style>
