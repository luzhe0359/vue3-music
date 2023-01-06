<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue'
import MvList from '@/components/common/MvList.vue'
import { useNewMv } from '@/utils/api'
import type { NewMv } from '@/models/mv'

const currentArea = ref('')
const areas: string[] = ['内地', '港台', '欧美', '日本', '韩国']
const newMvList = ref<NewMv[]>([])

const changeArea = (area: string) => {
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
  <MvList :mv-list="newMvList" />
</template>

<style lang="scss"></style>
