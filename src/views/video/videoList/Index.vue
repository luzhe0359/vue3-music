<script setup lang="ts">
import { onMounted, ref, reactive, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Right } from '@icon-park/vue-next'
import { useVideoStore } from '@/stores/video'
import type { Video } from '@/models/video'
import { useVideoGroup } from '@/utils/api'
import IconPark from '@/components/IconPark.vue'
import CoverPlay from '@/components/CoverPlay.vue'

const router = useRouter()

const { videoGroup } = toRefs(useVideoStore())
const { getVideoGroup } = useVideoStore()

const videoList = ref<Video[]>([])
const pageData = reactive({
  page: 0,
  id: 0
})
const loading = ref(false)
const noMore = ref(false)
const disabled = computed(() => loading.value || noMore.value)
const popoverRef = ref()

const getData = async () => {
  try {
    const { datas, hasmore } = await useVideoGroup(pageData.id, pageData.page - 1)
    videoList.value = [...videoList.value, ...datas]
    loading.value = false
    noMore.value = !hasmore
  } catch (error) {
    loading.value = false
    noMore.value = true
  }
}

const loadMore = () => {
  loading.value = true
  pageData.page++
  getData()
}

const changeGroup = (id: number) => {
  popoverRef.value.hide()
  pageData.page = 0
  videoList.value = []
  pageData.id = id // 切换id，刷新key，重新渲染列表
}

onMounted(() => {
  getVideoGroup()
})
</script>

<template>
  <div class="flex justify-between items-center">
    <el-popover ref="popoverRef" placement="bottom-start" width="50%" trigger="hover">
      <template #reference>
        <el-button class="m-2" round>
          <span>全部视频</span>
          <IconPark :icon="Right" />
        </el-button>
      </template>
      <ElScrollbar>
        <el-button :type="pageData.id === 0 ? 'primary' : ''" :text="pageData.id === 0" round @click="changeGroup(0)"> 全部视频 </el-button>
        <div class="h-96 mt-4 p-5 border-t">
          <div class="text-xs gap-5 grid grid-flow-row grid-cols-5">
            <el-button
              v-for="item in videoGroup"
              :key="item.id"
              :type="item.id === pageData.id ? 'primary' : ''"
              :text="item.id !== pageData.id"
              round
              @click="changeGroup(item.id)"
            >
              {{ item.name }}
            </el-button>
          </div>
        </div>
      </ElScrollbar>
    </el-popover>
    <div class="flex gap-x-4">
      <el-button
        v-for="item in videoGroup.slice(0, 8)"
        :key="item.id"
        :type="item.id === pageData.id ? 'primary' : ''"
        link
        round
        @click="changeGroup(item.id)"
      >
        {{ item.name }}
      </el-button>
    </div>
  </div>
  <div
    :key="pageData.id"
    v-infinite-scroll="loadMore"
    :infinite-scroll-disabled="disabled"
    class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5 mt-5"
  >
    <div v-for="{ data } in videoList" :key="data.vid">
      <CoverPlay :pic-url="data.coverUrl || data.liveData.liveRoom.coverUrl" video @click="router.push(`/videoDetail/${data.vid}`)" />
      <div class="text-xs mt-3 truncate">{{ data.title || data.liveData.liveRoom.title }}</div>
    </div>
  </div>
  <Loading v-show="loading" />
</template>

<style lang="scss">
.el-button + .el-button {
  margin-left: 0;
}
</style>
