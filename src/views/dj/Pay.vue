<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useDjPay } from '@/utils/api'
import type { DjPay } from '@/models/dj'
import CoverPlay from '@/components/CoverPlay.vue'

const djPayList = ref<DjPay[]>([])

const getData = async () => {
  djPayList.value = await useDjPay()
}

onMounted(getData)
</script>

<template>
  <Title title="付费精品" class="mt-5" />
  <el-skeleton class="w-full" :loading="!djPayList.length" animated>
    <template #template>
      <div class="grid grid-flow-row grid-cols-5 2xl:grid-cols-10 gap-5">
        <div v-for="item in 6" :key="item" class="flex flex-col">
          <el-skeleton-item variant="image" class="aspect-square !w-full !h-auto" />
          <el-skeleton-item variant="p" class="mt-2 !w-2/3" />
          <el-skeleton-item variant="p" class="mt-2 !w-1/3" />
        </div>
      </div>
    </template>
    <template #default>
      <div class="grid grid-flow-row grid-cols-5 2xl:grid-cols-10 gap-5">
        <div v-for="item in djPayList" :key="item.id">
          <CoverPlay :pic-url="item.picUrl" :name="item.name" :play-count="0" />
          <div class="truncate text-xs mt-2">{{ item.name }}</div>
          <div class="truncate text-xs mt-2 text-title">{{ item.creatorName }}</div>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<style lang="scss"></style>
