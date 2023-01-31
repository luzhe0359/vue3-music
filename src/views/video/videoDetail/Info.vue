<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ThumbsUp, Like, ShareThree, Download } from '@icon-park/vue-next'
import { usePlayerStore } from '@/stores/player'
import type { VideoUrl, VideoDetail } from '@/models/video_detail'
import { useVideoUrl, useVideoDetail } from '@/utils/api'

const route = useRoute()
const id = String(route.params.id)
const { setPause } = usePlayerStore()

const videoUrl = ref<VideoUrl>()
const videoDetail = ref<VideoDetail>()

onMounted(async () => {
  videoUrl.value = await useVideoUrl(id)
  videoDetail.value = await useVideoDetail(id)

  setPause()
})
</script>
<template>
  <div class="pr-10 flex-1 flex flex-col gap-y-5">
    <Title title="视频详情" class="pb-0" />
    <video class="w-full aspect-video" :src="videoUrl?.url" autoplay controls />
    <div v-if="videoDetail" class="flex items-center">
      <el-avatar :size="60" :src="videoDetail.avatarUrl" />
      <div class="ml-5">{{ videoDetail.creator.nickname }}</div>
    </div>
    <div>
      <div class="text-xl font-bold">{{ videoDetail?.title }}</div>
      <div class="mt-2 text-sm text-title">
        <span>发布: {{ videoDetail?.publishTime.toDate() }}</span>
        <span class="ml-5">播放: {{ videoDetail?.playTime.numberFormat() }}次</span>
      </div>
    </div>
    <div>
      <el-button round>
        <IconPark class="mr-1" :icon="ThumbsUp" :size="18" />
        <span>赞</span>
      </el-button>
      <el-button round>
        <IconPark class="mr-1" :icon="Like" :size="18" />
        <span>收藏</span>
      </el-button>
      <el-button round>
        <IconPark class="mr-1" :icon="ShareThree" :size="18" />
        <span>分享</span>
      </el-button>
      <el-button round>
        <IconPark class="mr-1" :icon="Download" :size="18" />
        <span>下载</span>
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
