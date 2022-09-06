<script setup lang="ts">
// import { storeToRefs } from 'pinia'
// import { useRouter } from 'vue-router'
// import { useSearchStore } from '@/stores/search'
// import { usePlayerStore } from '@/stores/player'

// const { suggestData, showSearchView } = storeToRefs(useSearchStore())

// const { play } = usePlayerStore()
// const router = useRouter()

// const routerPush = (name: string, id: number) => {
//   router.push({ name: name, query: { id: id } }).then(() => {
//     showSearchView.value = false
//   })
// }

// const getTitle = (name: string) => {
//   switch (name) {
//     case 'songs':
//       return '单曲'
//     case 'albums':
//       return '专辑'
//     case 'artists':
//       return '歌手'
//     case 'playlists':
//       return '歌单'
//     default:
//       return name
//   }
// }
</script>

<template>
  <div>suggestData</div>
  <!-- <div v-for="order in suggestData.order" v-if="suggestData">
    <div class="pt-2 pb-1.5 px-2.5">{{ getTitle(order) }}</div>
    <div
      v-for="item in suggestData.songs"
      v-if="order === 'songs'"
      :key="item.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
      @click="play(item.id)"
    >
      <span class="text-emerald-500">{{ item.name }}</span>
      <span class="pl-1"> - {{ item.artists.first()?.name }}</span>
    </div>
    <div
      v-for="item in suggestData.albums"
      v-if="order === 'albums'"
      :key="item.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
      @click="routerPush('album', item.id)"
    >
      <span class="text-emerald-500">{{ item.name }}</span>
      <span class="pl-1"> - {{ item.artist.name }}</span>
    </div>
    <div
      v-for="item in suggestData.artists"
      v-if="order === 'artists'"
      :key="item.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
      @click="routerPush('artistDetail', item.id)"
    >
      <el-avatar size="small" :src="item.img1v1Url" />
      <span class="text-emerald-500 ml-2">{{ item.name }}</span>
    </div>
    <div
      v-for="item in suggestData.playlists"
      v-if="order === 'playlists'"
      :key="item.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
      @click="routerPush('playlist', item.id)"
    >
      <el-avatar size="small" :src="item.coverImgUrl" />
      <div class="text-emerald-500 ml-2 truncate flex-1 w-1">{{ item.name }}</div>
    </div>
  </div> -->
</template>

<style lang="scss"></style>
