<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { useVideoStore } from '@/stores/video'
import CoverPlay from '@/components/CoverPlay.vue'
import { useRouter } from 'vue-router'
import { usePersonalizedStore } from '@/stores/personalized'

const { djProgram } = toRefs(usePersonalizedStore())
const { getDjProgram } = usePersonalizedStore()

const router = useRouter()

onMounted(async () => {
  await getDjProgram()
})
</script>

<template>
  <Title title="推荐电台" class="mt-5" />
  <el-skeleton class="w-full" :loading="!djProgram.length" animated>
    <template #template>
      <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5">
        <div v-for="item in 6" :key="item" class="flex flex-col">
          <el-skeleton-item variant="image" class="aspect-square !w-full !h-auto" />
          <el-skeleton-item variant="p" class="mt-2 !w-2/3" />
        </div>
      </div>
    </template>
    <template #default>
      <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5">
        <div v-for="item in djProgram" :key="item.id" @click="router.push({ name: 'video', query: { id: item.id } })">
          <CoverPlay :pic-url="item.picUrl" :name="item.name" :play-count="0" />
          <div class="truncate text-xs mt-2">{{ item.name }}</div>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<style lang="scss"></style>
