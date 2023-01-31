<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { SimiVideo } from '@/models/video_detail'
import { useSimiVideo } from '@/utils/api'
import CoverPlay from '@/components/CoverPlay.vue'

const router = useRouter()
const route = useRoute()
const id = String(route.params.id)

const simiVideoList = ref<SimiVideo[]>([])
const getData = async () => {
  simiVideoList.value = await useSimiVideo(id)
}

onMounted(getData)
</script>
<template>
  <div class="hidden lg:block w-60 xl:w-96">
    <div class="grid gap-y-5">
      <Title class="pb-0" title="相关推荐" icon />

      <template v-for="item in simiVideoList" :key="item.vid">
        <div class="flex cursor-pointer" @click="router.push(`/videoDetail/${item.vid}`)">
          <CoverPlay class="w-1/2 flex-shrink-0" :pic-url="item.coverUrl" video />
          <div class="flex-1 w-0 ml-2">
            <div class="truncate">{{ item.title }}</div>
            <div class="text-sm text-title">by {{ item.creator[0].userName }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
