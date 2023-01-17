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
  <div class="text-xl py-5 font-bold">全球榜</div>
  <el-skeleton class="w-full" :loading="!topList.length" animated>
    <template #template>
      <div class="grid grid-flow-row grid-cols-5 2xl:lg:grid-cols-10 gap-5">
        <div v-for="item in 30" :key="item" class="rounded-lg">
          <el-skeleton-item variant="image" class="!h-auto aspect-square !rounded-lg" />
          <el-skeleton-item variant="p" class="mt-2 !w-2/3" />
        </div>
      </div>
    </template>
    <template #default>
      <div class="grid grid-flow-row grid-cols-5 2xl:lg:grid-cols-10 gap-5">
        <div v-for="item in topList" :key="item.id" class="flex flex-col rounded-lg cursor-pointer" @click="toPlaylist(item)">
          <CoverPlay :name="item.name" :pic-url="item.coverImgUrl" show-play-count :play-count="item.playCount" />
          <div class="text-xs mt-2">{{ item.name }}</div>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<style lang="scss"></style>
