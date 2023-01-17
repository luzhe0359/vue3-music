<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, toRefs } from 'vue'
import Title from '@/components/Title.vue'
import CoverPlay from '@/components/CoverPlay.vue'
import { useMusicStore } from '@/stores/music'

const router = useRouter()
const { personalized } = toRefs(useMusicStore())
const { getPersonalized } = useMusicStore()

onMounted(async () => {
  await getPersonalized()
})
</script>

<template>
  <Title title="你的专属歌单" />
  <el-skeleton class="w-full" :loading="!personalized.length" animated>
    <template #template>
      <div class="grid grid-flow-row gap-5 grid-cols-3 lg:grid-cols-5 2xl:grid-cols-10">
        <div v-for="item in 10" :key="item">
          <el-skeleton-item variant="image" class="skeleton-image" />
          <el-skeleton-item variant="p" class="mt-2 !w-2/3" />
        </div>
      </div>
    </template>
    <template #default>
      <div class="grid grid-flow-row gap-5 grid-cols-3 lg:grid-cols-5 2xl:grid-cols-10">
        <div
          v-for="(item, index) in personalized.sampleSize(10)"
          :key="index"
          :class="{ 'hidden lg:block': index === 9 }"
          @click="router.push({ name: 'playlist', query: { id: item.id } })"
        >
          <CoverPlay :name="item.name" :pic-url="item.picUrl" :play-count="item.playCount" show-play-count />
          <div class="mt-2 text-xs text-main truncate">{{ item.name }}</div>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<style lang="scss">
.skeleton-image {
  @apply aspect-square w-full h-auto rounded-lg;
}
</style>
