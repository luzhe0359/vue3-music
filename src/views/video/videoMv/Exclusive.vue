<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MvList from '@/components/common/MvList.vue'
import { useExclusiveMv } from '@/utils/api'
import type { Mv } from '@/models/mv'

const exclusiveMvList = ref<Mv[]>([])

const getData = async () => {
  const { data } = await useExclusiveMv(8)
  exclusiveMvList.value = data
}

onMounted(async () => {
  getData()
})
</script>

<template>
  <Title title="网易出品" class="mt-5" />
  <MvList :mv-list="exclusiveMvList" />
</template>

<style lang="scss"></style>
