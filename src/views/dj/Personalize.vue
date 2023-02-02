<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useDjPersonalize } from '@/utils/api'
import type { DjPersonalize } from '@/models/dj'
import CoverPlay from '@/components/CoverPlay.vue'

const djPersonalizeList = ref<DjPersonalize[]>([])

const getData = async () => {
  djPersonalizeList.value = await useDjPersonalize()
}

onMounted(getData)
</script>

<template>
  <Title title="推荐电台" class="mt-5" />
  <el-skeleton class="w-full" :loading="!djPersonalizeList.length" animated>
    <template #template>
      <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5">
        <div v-for="item in 6" :key="item" class="flex flex-col">
          <el-skeleton-item variant="image" class="aspect-square !w-full !h-auto" />
          <el-skeleton-item variant="p" class="mt-2 !w-2/3" />
          <el-skeleton-item variant="p" class="mt-2 !w-1/3" />
        </div>
      </div>
    </template>
    <template #default>
      <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5">
        <div v-for="item in djPersonalizeList" :key="item.id">
          <CoverPlay :pic-url="item.picUrl" :name="item.name" :play-count="0" />
          <div class="truncate text-xs mt-2">{{ item.name }}</div>
          <div class="truncate text-xs mt-2 text-title">{{ item.category }}</div>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<style lang="scss"></style>
