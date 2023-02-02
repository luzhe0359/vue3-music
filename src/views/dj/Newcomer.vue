<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useDjNewcomer } from '@/utils/api'
import type { DjNewcomer } from '@/models/dj'

const djNewcomerList = ref<DjNewcomer[]>([])
const getData = async () => {
  djNewcomerList.value = await useDjNewcomer()
}

onMounted(getData)
</script>

<template>
  <Title title="主播新人榜" />
  <el-skeleton class="w-full" :loading="!djNewcomerList.length" animated>
    <template #template>
      <div class="grid grid-flow-row gap-5 grid-cols-3 lg:grid-cols-5 2xl:grid-cols-10">
        <div v-for="item in 10" :key="item">
          <el-skeleton-item variant="image" class="skeleton-image" />
          <el-skeleton-item variant="p" class="mt-2 !w-2/3" />
        </div>
      </div>
    </template>
    <template #default>
      <div class="grid grid-flow-row gap-5 grid-cols-5 2xl:grid-cols-10">
        <div v-for="(item, index) in djNewcomerList" :key="index">
          <el-avatar class="!w-full !h-auto" :src="item.avatarUrl" />
          <div class="mt-2 text-xs text-main text-center truncate">{{ item.nickName }}</div>
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
