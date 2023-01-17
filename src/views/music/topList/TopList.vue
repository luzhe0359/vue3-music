<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { useMusicStore } from '@/stores/music'
import OfficialList from './OfficialList.vue'
import GlobalList from './GlobalList.vue'

const { topListDetailData } = toRefs(useMusicStore())
const { getTopListDetailData } = useMusicStore()

onMounted(async () => {
  await getTopListDetailData()
})
</script>

<template>
  <OfficialList :top-list="topListDetailData.slice(0, 4)" />
  <GlobalList :top-list="topListDetailData.slice(4)" />
</template>

<style lang="scss"></style>
