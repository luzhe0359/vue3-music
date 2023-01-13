<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { ArtistDetail } from '@/models/artist_detail'
import { useArtistDetail } from '@/utils/api'
import Info from './Info.vue'
import Songs from './Songs.vue'
import Album from './Album.vue'
import Mv from './Mv.vue'
import Desc from './Desc.vue'

const route = useRoute()
const id = Number(route.query.id)
const artistDetail = ref<ArtistDetail>()
const currentTab = ref('music')

onMounted(async () => {
  artistDetail.value = await useArtistDetail(id)
})
</script>
<template>
  <div v-if="artistDetail" class="artist-detail p-5">
    <Info :artist-detail="artistDetail" />

    <!-- <el-affix target=".artist-detail" :offset="56"> -->
    <div class="mt-2">
      <el-tabs v-model="currentTab">
        <el-tab-pane lazy :label="`歌曲 ${artistDetail.artist.musicSize}`" name="music">
          <Songs />
        </el-tab-pane>
        <el-tab-pane lazy :label="`专辑 ${artistDetail.artist.albumSize}`" name="album">
          <Album />
        </el-tab-pane>
        <el-tab-pane lazy :label="`MV ${artistDetail.artist.mvSize}`" name="mv">
          <Mv />
        </el-tab-pane>
        <el-tab-pane lazy label="歌手详情" name="desc">
          <Desc />
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- </el-affix> -->
  </div>
</template>

<style lang="scss" scoped></style>
