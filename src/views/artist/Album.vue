<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Album } from '@/models/album'
import CoverPlay from '@/components/CoverPlay.vue'
import { useArtistAlbum } from '@/utils/api'

const router = useRouter()
const route = useRoute()
const id = Number(route.query.id)

const list = ref<Album[]>([])
const pageData = reactive({
  page: 1,
  limit: 40,
  loading: false,
  noMore: false
})

const offset = computed(() => {
  return (pageData.page - 1) * pageData.limit
})

const getData = async () => {
  pageData.loading = true
  try {
    const { hotAlbums, more } = await useArtistAlbum(id, pageData.limit, offset.value)

    if (pageData.page === 1) {
      list.value = hotAlbums
    } else {
      list.value.push(...hotAlbums)
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

onMounted(getData)
</script>
<template>
  <div class="mt-5 grid grid-flow-row grid-cols-3 lg:grid-cols-5 2xl:grid-cols-8 gap-5">
    <div v-for="item in list" :key="item.id" @click="router.push({ name: 'album', query: { id: item.id } })">
      <CoverPlay :name="item.name" :pic-url="item.picUrl" />
      <div class="mt-2 text-xs truncate">{{ item.name }}</div>
      <div class="mt-2 text-xs text-slate-400 truncate">{{ item.publishTime.toDate() }}</div>
    </div>
  </div>
  <el-button v-if="list.length && pageData.noMore" class="mt-4 w-full text-full" text type="primary" :loading="pageData.loading" @click="loadMore"
    >加载更多</el-button
  >
</template>
