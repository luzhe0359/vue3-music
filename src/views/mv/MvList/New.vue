<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue'
import MvList from '@/components/MvList.vue'
import { useNewMv } from '@/utils/api'
import type { Mv } from '@/models/mv'

const currentArea = ref('')
const areas: string[] = ['内地', '港台', '欧美', '日本', '韩国']
const newMvList = ref<Mv[]>([])

const changeArea = (area: string) => {
  newMvList.value = []
  currentArea.value = area
  getData()
}

const getData = async () => {
  const { data } = await useNewMv(currentArea.value, 8)
  newMvList.value = data
}

onMounted(async () => {
  getData()
})
</script>

<template>
  <div class="flex items-center justify-between">
    <Title title="最新MV" class="mt-0" />
    <div class="flex gap-x-4">
      <el-button v-for="item in areas" :key="item" :type="item === currentArea ? 'primary' : ''" link round @click="changeArea(item)">
        {{ item }}
      </el-button>
    </div>
  </div>

  <MvList :mv-list="newMvList" :num="8" />
</template>

<style lang="scss"></style>
