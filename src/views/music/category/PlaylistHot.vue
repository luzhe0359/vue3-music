<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { usePlaylistHighqualityTags } from '@/utils/api'
import type { PlaylistHighqualityTag } from '@/models/playlist'

const emit = defineEmits<{
  (e: 'changeTag', tag: string): void
}>()

const changeTag = (tag: string): void => {
  currentTag.value = tag
  emit('changeTag', tag)
}

const currentTag = ref<string>('全部')
const tags = ref<PlaylistHighqualityTag[]>()

onMounted(async () => {
  tags.value = await usePlaylistHighqualityTags()
})
</script>

<template>
  <div class="grid grid-flow-row grid-cols-8 2xl:lg:grid-cols-12 gap-5">
    <div class="button-dc" :class="{ active: currentTag == '全部' }" @click="changeTag('全部')">全部</div>
    <div v-for="tag in tags" :key="tag.id" class="button-dc" :class="{ active: currentTag == tag.name }" @click="changeTag(tag.name)">
      {{ tag.name }}
    </div>
  </div>
</template>

<style lang="scss">
.active {
  @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}
</style>
