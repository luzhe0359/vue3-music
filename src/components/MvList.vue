<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Mv } from '@/models/mv'
import type { PersonalizedMv } from '@/models/personalized'
import CoverPlay from '@/components/CoverPlay.vue'

withDefaults(
  defineProps<{
    mvList: Mv[] | PersonalizedMv[]
    num?: number // 骨架屏数量
  }>(),
  { num: 4 }
)

const router = useRouter()
</script>

<template>
  <el-skeleton class="w-full" :loading="!mvList.length" animated>
    <template #template>
      <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="item in num" :key="item" class="flex flex-col">
          <el-skeleton-item variant="image" class="!h-auto aspect-video !rounded" />
          <el-skeleton-item variant="p" class="mt-2 !w-2/3" />
          <el-skeleton-item variant="p" class="mt-2 !h-3 !w-1/3" />
        </div>
      </div>
    </template>
    <template #default>
      <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="item in mvList" :key="item.id" @click="router.push(`/mvDetail/${item.id}`)">
          <CoverPlay
            :pic-url="(item as Mv).cover || (item as PersonalizedMv).picUrl"
            video
            :name="item.name"
            :play-count="item.playCount"
            show-play-count
          />
          <div class="truncate text-xs mt-2">{{ item.name }}</div>
          <div class="truncate text-xs mt-1.5 text-title">
            <small>{{ item.artistName }}</small>
          </div>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<style lang="scss"></style>
