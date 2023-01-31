<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MvList from '@/components/MvList.vue'
import { useAllMv } from '@/utils/api'
import type { Mv } from '@/models/mv'

const hotMvList = ref<Mv[]>([])

const getData = async () => {
  const { data } = await useAllMv()
  hotMvList.value = data
}

onMounted(async () => {
  getData()
})
</script>

<template>
  <Title title="热播MV" class="mt-5" />
  <MvList :mv-list="hotMvList" />
</template>

<style lang="scss"></style>
