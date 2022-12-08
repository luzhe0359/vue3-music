<script setup lang="ts">
import { onMounted, toRefs, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import PlaylistHot from './PlaylistHot.vue'
import { useMusicStore } from '@/stores/music'
import CoverPlay from '@/components/common/CoverPlay.vue'
import type { TopListDetail } from '@/models/toplist_detail'
import type { PlayListDetail } from '@/models/playlist'
import { useTopPlaylistHighquality } from '@/utils/api'

const { topListDetailData } = toRefs(useMusicStore())
const { getTopListDetailData } = useMusicStore()

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
  console.log(tag)
  pageData.cat = tag
  pageData.before = 0
  pageData.more = false

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

onMounted(getData)

const toPlaylist = (topListDetail: TopListDetail) => {
  // router.push({ name: 'playlist', query: { id: topListDetail.id } })
}
</script>

<template>
  <PlaylistHot @change-tag="changeTag" />
  <div class="py-5 text-xl text-blod">全部歌单</div>
  <!-- gap-5 grid grid-flow-row grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7 -->
  <div class="grid grid-flow-row grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-5">
    <div v-for="item in list" :key="item.id">
      <CoverPlay :name="item.name" :pic-url="item.coverImgUrl" show-play-count :play-count="item.playCount" />
      <div class="mt-2 text-xs text-main leading-5">{{ item.name }}</div>
      <div class="mt-2 text-xs text-main text-dc truncate">{{ item.creator.nickname }}</div>
    </div>
  </div>
</template>

<style lang="scss"></style>
