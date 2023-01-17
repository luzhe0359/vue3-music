<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { useVideoStore } from '@/stores/video'
import MvList from '@/components/MvList.vue'

const { personalizedMv } = toRefs(useVideoStore())
const { getPersonalizedMv } = useVideoStore()

onMounted(async () => {
  await getPersonalizedMv()
})
</script>

<template>
  <Title title="推荐MV" class="mt-5" />
  <MvList :mv-list="personalizedMv" />
</template>

<style lang="scss"></style>
