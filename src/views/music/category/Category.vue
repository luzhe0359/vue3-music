<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import PlaylistHot from './PlaylistHot.vue'
import CoverPlay from '@/components/CoverPlay.vue'
import type { PlayListDetail } from '@/models/playlist'
import { useTopPlaylistHighquality } from '@/utils/api'

const router = useRouter()

const list = ref<PlayListDetail[]>()
const pageData = reactive({
  init: false,
  loading: false,
  limit: 35,
  before: 0,
  more: false,
  cat: '全部'
})

const changeTag = (tag: string) => {
  pageData.cat = tag
  pageData.before = 0
  pageData.more = false

  list.value = []
  getData()
}

const getData = async () => {
  pageData.loading = true
  try {
    const { playlists, lasttime, more } = await useTopPlaylistHighquality({
      limit: pageData.limit,
      before: pageData.before,
      cat: pageData.cat
    })
    if (pageData.before <= 0) {
      list.value = playlists
    } else {
      list.value?.push(...playlists)
    }

    pageData.init = true
    pageData.loading = false
    pageData.before = lasttime
    pageData.more = more
  } catch (error) {}
}

const loadMore = () => {
  getData()
}

onMounted(getData)
</script>

<template>
  <PlaylistHot @change-tag="changeTag" />
  <div class="py-5 text-xl text-blod">{{ pageData.cat }}歌单</div>
  <div class="grid grid-flow-row grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-5">
    <div v-for="item in list" :key="item.id" @click="router.push({ name: 'playlist', query: { id: item.id } })">
      <CoverPlay :name="item.name" :pic-url="item.coverImgUrl" show-play-count :play-count="item.playCount" />
      <div class="mt-2 text-xs text-main leading-5">{{ item.name }}</div>
      <div class="mt-2 text-xs text-main text-dc truncate">{{ item.creator.nickname }}</div>
    </div>
  </div>
  <div class="pt-8">
    <el-button text type="primary" class="w-full text-full" :loading="pageData.loading" @click="loadMore">加载更多</el-button>
  </div>
</template>

<style lang="scss" scoped>
.el-button:hover {
  color: var(--el-color-primary-light-3);
  background-color: transparent !important;
}
</style>
