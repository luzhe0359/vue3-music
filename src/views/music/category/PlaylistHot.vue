<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { usePlaylistHighqualityTags } from '@/utils/api'
import type { PlaylistHighqualityTag } from '@/models/playlist'

const emit = defineEmits<{
  (e: 'changeTag', tag: string): void
}>()

const changeTag = (tag: string): void => {
  emit('changeTag', tag)
}
const tags = ref<PlaylistHighqualityTag[]>()

onMounted(async () => {
  tags.value = await usePlaylistHighqualityTags()
})
</script>

<template>
  <div class="grid grid-flow-row grid-cols-8 2xl:lg:grid-cols-12 gap-5">
    <div class="button-dc" @click="changeTag('全部')">全部</div>
    <div v-for="tag in tags" :key="tag.id" class="button-dc" @click="changeTag(tag.name)">
      {{ tag.name }}
    </div>
  </div>
</template>

<style lang="scss"></style>
