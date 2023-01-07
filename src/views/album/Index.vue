<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePlayerStore } from '@/stores/player'
import type { Album } from '@/models/album'
import type { Song } from '@/models/song'
import { useAlbum } from '@/utils/api'
import Info from './Info.vue'
import SongList from '@/components/SongList.vue'
import Desc from './Desc.vue'

const { pushPlayList, play } = usePlayerStore()
const route = useRoute()
const id = Number(route.query.id)
const albumDetail = ref<Album>()
const songList = ref<Song[]>([])
const currentTab = ref('music')

const playAll = () => {
  pushPlayList(true, ...songList.value)

  play(songList.value.first().id)
}

onMounted(async () => {
  const { album, songs } = await useAlbum(id)
  albumDetail.value = album
  songList.value = songs
})
</script>
<template>
  <div v-if="albumDetail" class="artist-detail p-5">
    <Info :album-detail="albumDetail" @play-all="playAll" />

    <div class="bg-view mt-2">
      <el-tabs v-model="currentTab" class="bg-view">
        <el-tab-pane lazy :label="`歌曲列表 ${songList.length}`" name="music">
          <SongList :songs="songList" />
        </el-tab-pane>
        <el-tab-pane lazy :label="`评论 ${0}`" name="album"> comments </el-tab-pane>
        <el-tab-pane lazy label="专辑详情" name="desc">
          <Desc :desc="albumDetail.description" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
