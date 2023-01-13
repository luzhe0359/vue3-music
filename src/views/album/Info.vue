<script setup lang="ts">
import { useRouter } from 'vue-router'
import { PlayOne, Like, More } from '@icon-park/vue-next'
import type { Album } from '@/models/album'

const router = useRouter()

defineProps<{
  albumDetail: Album
}>()

const emit = defineEmits<{
  (e: 'playAll'): void
}>()
</script>
<template>
  <div class="flex items-stretch">
    <img :src="albumDetail.picUrl" alt="" class="w-44 h-44 object-cover rounded-xl flex-shrink-0" />
    <div class="ml-5 flex flex-col justify-between">
      <div class="grid gap-y-2">
        <div class="text-2xl font-bold flex items-center">
          <span class="px-1 mr-2 text-sm text-active border rounded border-emerald-400">专辑</span>
          {{ albumDetail.name }}
          <span v-if="albumDetail.alias.first()" class="text-[#888]">({{ albumDetail.alias.first() }})</span>
        </div>
        <div class="text-xs">
          <span>歌手：</span>
          <span v-for="(item, index) in albumDetail.artists" :key="item.id">
            <span class="text-active cursor-pointer" @click="router.push({ name: 'artistDetail', query: { id: item.id } })"> {{ item.name }}</span>
            <span v-if="index !== albumDetail.artists.length - 1" class="text-title"> / </span>
          </span>
        </div>
        <div class="text-xs">
          <span>时间：</span>
          <span class="text-title">{{ albumDetail.publishTime.toDate() }}</span>
        </div>
      </div>
      <div class="gap-x-6">
        <el-button type="primary" round @click="emit('playAll')">
          <IconPark class="mr-1" :icon="PlayOne" :size="22" theme="filled" />
          <span>播放全部</span>
        </el-button>
        <el-button round>
          <IconPark class="mr-1" :icon="Like" :size="18" />
          <span>收藏</span>
        </el-button>
        <el-button class="w-8" round> <IconPark :icon="More" /> </el-button>
      </div>
    </div>
  </div>
</template>
