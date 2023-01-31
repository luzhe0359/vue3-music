<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ThumbsUp, Like, ShareThree, Download } from '@icon-park/vue-next'
import { usePlayerStore } from '@/stores/player'
import type { MvUrl, MvDetail } from '@/models/mv'
import { useMvUrl, useMvDetail } from '@/utils/api'

const router = useRouter()
const route = useRoute()
const id = Number(route.params.id)
const { setPause } = usePlayerStore()

const mvUrl = ref<MvUrl>()
const mvDetail = ref<MvDetail>()

onMounted(async () => {
  mvUrl.value = await useMvUrl(id)
  mvDetail.value = await useMvDetail(id)

  setPause()
})
</script>
<template>
  <div class="pr-10 flex-1 flex flex-col gap-y-5">
    <Title title="mv详情" class="pb-0" />
    <video class="w-full aspect-video" :src="mvUrl?.url" autoplay controls />
    <div v-if="mvDetail" class="flex items-center" @click="router.push({ name: 'artistDetail', query: { id: mvDetail?.artists[0].id } })">
      <el-avatar :size="60" :src="mvDetail.artists[0].img1v1Url" />
      <div class="ml-5">{{ mvDetail.artists[0].name }}</div>
    </div>
    <div>
      <div class="text-xl font-bold">{{ mvDetail?.name }}</div>
      <div class="mt-2 text-sm text-title">
        <span>发布: {{ mvDetail?.publishTime }}</span>
        <span class="ml-5">播放: {{ mvDetail?.playCount.numberFormat() }}次</span>
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
