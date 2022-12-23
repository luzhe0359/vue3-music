<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useMusicStore } from '@/stores/music'
import CoverPlay from '@/components/common/CoverPlay.vue'
import type { TopListDetail } from '@/models/toplist_detail'

const { topListDetailData } = toRefs(useMusicStore())
const { getTopListDetailData } = useMusicStore()

const router = useRouter()

onMounted(async () => {
  await getTopListDetailData()
})

const toPlaylist = (topListDetail: TopListDetail) => {
  router.push({ name: 'playlist', query: { id: topListDetail.id } })
}
</script>

<template>
  <div class="text-xl pb-5 font-bold">官方榜</div>
  <div class="grid grid-flow-row grid-cols-2 2xl:lg:grid-cols-4 gap-5">
    <div
      v-for="item in topListDetailData.slice(0, 4)"
      :key="item.id"
      class="flex items-center bg-dc rounded-lg cursor-pointer"
      @click="toPlaylist(item)"
    >
      <CoverPlay :name="item.name" :pic-url="item.coverImgUrl" show-play-count :play-count="item.playCount" class="w-36 flex-shrink-0" />
      <div class="px-5 flex-1 flex-shrink-0 flex-col">
        <div class="text-xl font-bold">{{ item.name }}</div>
        <div class="mt-2 text-xs text-main">
          <div v-for="(track, index) in item.tracks" :key="index" class="flex mt-2">
            <span class="mr-1">{{ index + 1 }}</span>
            <div class="flex-auto w-20 truncate">{{ track.first }} - {{ track.second }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-xl py-5 font-bold">全球榜</div>
  <div class="grid grid-flow-row grid-cols-5 2xl:lg:grid-cols-10 gap-5">
    <div v-for="item in topListDetailData.slice(4)" :key="item.id" class="flex flex-col rounded-lg cursor-pointer" @click="toPlaylist(item)">
      <CoverPlay :name="item.name" :pic-url="item.coverImgUrl" show-play-count :play-count="item.playCount" />
      <div class="text-xs mt-2">{{ item.name }}</div>
    </div>
  </div>
</template>

<style lang="scss"></style>
