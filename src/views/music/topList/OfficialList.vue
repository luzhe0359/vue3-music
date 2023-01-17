<script setup lang="ts">
import { useRouter } from 'vue-router'
import CoverPlay from '@/components/CoverPlay.vue'
import type { TopListDetail } from '@/models/toplist_detail'

defineProps<{ topList: TopListDetail[] }>()

const router = useRouter()

const toPlaylist = (topListDetail: TopListDetail) => {
  router.push({ name: 'playlist', query: { id: topListDetail.id } })
}
</script>

<template>
  <div class="text-xl pb-5 font-bold">官方榜</div>
  <el-skeleton class="w-full" :loading="!topList.length" animated>
    <template #template>
      <div class="grid grid-flow-row grid-cols-2 2xl:lg:grid-cols-4 gap-5">
        <div v-for="item in 4" :key="item" class="flex bg-card rounded-lg">
          <el-skeleton-item variant="image" class="!w-36 !h-36 aspect-square !rounded-lg" />
          <div class="px-5 flex-1 flex-shrink-0 flex flex-col justify-center gap-2">
            <el-skeleton-item variant="h3" class="!w-16 mb-2" />
            <el-skeleton-item variant="p" class="!w-2/3" />
            <el-skeleton-item variant="p" class="!w-3/5" />
            <el-skeleton-item variant="p" class="!w-4/5" />
          </div>
        </div>
      </div>
    </template>
    <template #default>
      <div class="grid grid-flow-row grid-cols-2 2xl:lg:grid-cols-4 gap-5">
        <div v-for="item in topList" :key="item.id" class="flex items-center bg-card rounded-lg cursor-pointer" @click="toPlaylist(item)">
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
    </template>
  </el-skeleton>
</template>

<style lang="scss"></style>
