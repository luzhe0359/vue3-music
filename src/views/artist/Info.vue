<script setup lang="ts">
import { Avatar, Plus, More } from '@icon-park/vue-next'
import type { ArtistDetail } from '@/models/artist_detail'
import { useNumberFormat } from '@/utils/number'

defineProps<{
  artistDetail: ArtistDetail
}>()
</script>
<template>
  <div class="flex items-stretch">
    <img :src="artistDetail.artist.cover" alt="" class="w-44 h-44 object-cover rounded-xl flex-shrink-0" />
    <div class="ml-5 flex flex-col justify-between">
      <div class="grid gap-y-2">
        <div class="text-2xl font-bold">{{ artistDetail.artist.name }}</div>
        <div class="text-sm">{{ artistDetail.identify.imageDesc }}</div>
        <div class="text-xs flex">
          <div>单曲数：{{ useNumberFormat(artistDetail.artist.musicSize) }}</div>
          <div class="ml-5">专辑数：{{ useNumberFormat(artistDetail.artist.albumSize) }}</div>
          <div class="ml-5">MV数：{{ useNumberFormat(artistDetail.artist.mvSize) }}</div>
        </div>
      </div>
      <div class="gap-x-6">
        <el-button type="primary" round>
          <IconPark class="mr-1" :icon="Avatar" :size="14" theme="filled" />
          <span>个人主页</span>
        </el-button>
        <el-button round>
          <IconPark class="mr-1" :icon="Plus" :size="18" />
          <span>关注</span>
        </el-button>
        <el-button class="w-8" round> <IconPark :icon="More" /> </el-button>
      </div>
    </div>
  </div>
</template>
