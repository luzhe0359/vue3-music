<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import Title from '@/components/Title.vue'
import { usePlayerStore } from '@/stores/player'
import { useMusicStore } from '@/stores/music'

const { play } = usePlayerStore()
const { personalizedNewSong } = toRefs(useMusicStore())
const { getPersonalizedNewSong } = useMusicStore()

onMounted(async () => {
  await getPersonalizedNewSong()
})
</script>

<template>
  <Title title="推荐新音乐" />
  <div class="grid grid-flow-row grid-cols-2 2xl:grid-cols-5 gap-y-2.5 gap-x-5 cursor-pointer">
    <div
      v-for="(item, index) in personalizedNewSong"
      :key="index"
      class="hover-bg-view rounded transition-all flex items-center"
      @click="play(item.id)"
    >
      <img :src="item.picUrl" alt="" class="w-12 h-12 object-cover rounded flex-shrink-0" />
      <div class="px-2 text-xs flex-auto flex flex-col w-1/3">
        <div class="text-xs flex-1 truncate">
          {{ item.name }}
        </div>
        <div class="mt-1.5 text-dc">
          {{ item.song.artists[0].name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
