<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { useVideoStore } from '@/stores/video'
import CoverPlay from '@/components/CoverPlay.vue'
import { useRouter } from 'vue-router'

const { personalizedPrivateContent } = toRefs(useVideoStore())
const { getPersonalizedPrivateContent } = useVideoStore()

const router = useRouter()

onMounted(async () => {
  await getPersonalizedPrivateContent()
})
</script>

<template>
  <Title title="独家放送" class="mt-5" />
  <el-skeleton class="w-full" :loading="!personalizedPrivateContent.length" animated>
    <template #template>
      <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="item in 4" :key="item" class="flex flex-col">
          <el-skeleton-item variant="image" class="!h-auto aspect-video !rounded" />
          <el-skeleton-item variant="p" class="mt-2 !w-2/3" />
        </div>
      </div>
    </template>
    <template #default>
      <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="item in personalizedPrivateContent" :key="item.id" @click="router.push({ name: 'mvDetail', query: { id: item.id } })">
          <CoverPlay :pic-url="item.sPicUrl" video :name="item.name" />
          <div class="truncate text-xs mt-2">{{ item.name }}</div>
        </div>
      </div>
    </template>
  </el-skeleton>
</template>

<style lang="scss"></style>
