<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PlayListInfo from '@/views/playlist/PlayListInfo.vue'
import SongsList from '@/views/playlist/SongsList.vue'
import { usePlayerStore } from '@/stores/player'
import { usePlayListDetail, usePlayListTrackAll } from '@/utils/api'
import type { PlayListDetail } from '@/models/playlist'
import type { Song } from '@/models/song'

const route = useRoute()
const { pushPlayList, play } = usePlayerStore()

const playlist = ref<PlayListDetail>()
const activeName = ref('tracks')
const songs = ref<Song[]>([])

const getData = () => {
  const id = Number(route.query.id)

  usePlayListDetail(id).then((res) => {
    playlist.value = res
  })
  usePlayListTrackAll(id).then((res) => {
    songs.value = res
  })
}

const playAll = () => {
  pushPlayList(true, ...songs.value)

  play(songs.value.first().id)
}

onMounted(getData)
</script>
<template>
  <div v-if="playlist" class="playlist p-5">
    <PlayListInfo :playlist="playlist" @play-all="playAll" />
    <el-tabs v-model="activeName" class="mt-2">
      <el-tab-pane :label="`歌曲 ${songs.length}`" name="tracks">
        <SongsList :songs="songs" />
      </el-tab-pane>
      <el-tab-pane label="评论" name="comments">comments</el-tab-pane>
    </el-tabs>
  </div>
</template>
