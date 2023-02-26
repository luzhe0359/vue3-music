<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Mvs } from '@/models/artist'
import CoverPlay from '@/components/CoverPlay.vue'
import { useArtistMv } from '@/utils/api'

const route = useRoute()
const id = Number(route.query.id)

const list = ref<Mvs[]>([])
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
    const { mvs, hasMore } = await useArtistMv(id, pageData.limit, offset.value)

    if (pageData.page === 1) {
      list.value = mvs
    } else {
      list.value.push(...mvs)
    }
    pageData.noMore = hasMore
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
  <div class="mt-5 grid grid-flow-row grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-5">
    <div v-for="item in list" :key="item.id">
      <CoverPlay :name="item.name" :pic-url="item.imgurl" :duration="item.duration" video />
      <div class="mt-2 text-xs truncate">{{ item.name }}</div>
    </div>
  </div>
  <el-button v-if="list.length && pageData.noMore" class="mt-4 w-full text-full" text type="primary" :loading="pageData.loading" @click="loadMore"
    >加载更多</el-button
  >
</template>
