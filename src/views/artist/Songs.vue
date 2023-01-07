<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { PlayOne, More } from '@icon-park/vue-next'
import { usePlayerStore } from '@/stores/player'
import type { Song } from '@/models/song'
import SongList from '@/components/SongList.vue'
import { useArtistSongs } from '@/utils/api'

const route = useRoute()
const id = Number(route.query.id)
const { pushPlayList, play } = usePlayerStore()

const list = ref<Song[]>([])
const pageData = reactive({
  order: 'time',
  limit: 20,
  page: 1,
  loading: false,
  noMore: false
})

const offset = computed(() => {
  return (pageData.page - 1) * pageData.limit
})

const getData = async () => {
  pageData.loading = true
  try {
    const { songs, more } = await useArtistSongs(id, pageData.order, pageData.limit, offset.value)

    if (pageData.page === 1) {
      list.value = songs
    } else {
      list.value.push(...songs)
    }
    pageData.noMore = more
  } catch (error) {
    pageData.page--
  } finally {
    pageData.loading = false
  }
}

const loadMore = () => {
  pageData.page++
  getData()
}

const changeOrder = (order: 'hot' | 'time') => {
  pageData.order = order
  pageData.page = 1
  getData()
}

const playAll = () => {
  pushPlayList(true, ...list.value)

  play(list.value.first().id)
}

onMounted(getData)
</script>
<template>
  <div class="mt-5 flex justify-between">
    <div>
      <el-button round @click="playAll">
        <IconPark :icon="PlayOne" :size="22" theme="filled" />
        <span>播放全部</span>
      </el-button>
      <el-button class="w-8" round> <IconPark :icon="More" /> </el-button>
    </div>

    <div>
      <el-button size="small" link :type="pageData.order === 'time' ? 'primary' : ''" @click="changeOrder('time')">最新</el-button>
      <el-button size="small" link :type="pageData.order === 'hot' ? 'primary' : ''" @click="changeOrder('hot')">最热</el-button>
    </div>
  </div>
  <SongList :songs="list" />
  <el-button v-if="list.length && pageData.noMore" class="mt-4 w-full text-full" text type="primary" :loading="pageData.loading" @click="loadMore">
    加载更多
  </el-button>
</template>
