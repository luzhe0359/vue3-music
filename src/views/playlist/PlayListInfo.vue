<script setup lang="ts">
import { PlayOne, Like, More } from '@icon-park/vue-next'
import type { PlayListDetail } from '@/models/playlist'
import MoreText from '@/components/common/MoreText.vue'
import { useNumberFormat } from '@/utils/number'

defineProps<{
  playlist: PlayListDetail
}>()

const emit = defineEmits<{
  (e: 'playAll'): void
}>()
</script>
<template>
  <div class="flex items-stretch">
    <img :src="playlist.coverImgUrl" alt="" class="w-44 h-44 object-cover rounded-xl flex-shrink-0" />
    <div class="ml-5 flex flex-col justify-between">
      <div class="text-2xl font-bold">{{ playlist.name }}</div>
      <div class="my-2 flex text-xs items-center">
        <el-avatar :src="playlist.creator.avatarUrl" size="small" round />
        <div class="mx-2 text-active">{{ playlist.creator.nickname }}</div>
        <div class="flex text-dc">
          <div v-for="tag in playlist.tags" :key="tag" class="mr-2 hover-text">#{{ tag }}</div>
        </div>
        <div class="ml-2 text-dc">{{ playlist.createTime.toDate() }}创建</div>
      </div>
      <div class="text-xs text-gray-500" leading-normal>
        <MoreText :text="playlist.description" :end="90" />
      </div>
      <div class="mt-2 text-xs flex">
        <div>歌曲：{{ useNumberFormat(playlist.trackCount) }}</div>
        <div class="ml-5">播放：{{ useNumberFormat(playlist.playCount) }}</div>
      </div>
      <div class="justify-self-stretch mt-2 gap-x-6">
        <el-button type="primary" round> <IconPark :icon="PlayOne" :size="22" theme="filled" @click="emit('playAll')" />播放全部 </el-button>
        <el-button round> <IconPark class="mr-1" :icon="Like" :size="18" />收藏 </el-button>
        <el-button class="w-8" round> <IconPark :icon="More" /> </el-button>
      </div>
    </div>
  </div>
</template>
