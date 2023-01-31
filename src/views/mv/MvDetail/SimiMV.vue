<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { SimiMv } from '@/models/mv'
import { useSimiMv } from '@/utils/api'
import CoverPlay from '@/components/CoverPlay.vue'

const router = useRouter()
const route = useRoute()
const id = Number(route.params.id)

const simiMvList = ref<SimiMv[]>([])
const getData = async () => {
  simiMvList.value = await useSimiMv(id)
}

onMounted(getData)
</script>
<template>
  <div class="hidden lg:block w-60 xl:w-96">
    <div class="grid gap-y-5">
      <Title class="pb-0" title="相关推荐" icon />

      <template v-for="item in simiMvList" :key="item.id">
        <div class="flex cursor-pointer" @click="router.push(`/mvDetail/${item.id}`)">
          <CoverPlay class="w-1/2 flex-shrink-0" :pic-url="item.cover" video />
          <div class="flex-1 w-0 ml-2">
            <div class="truncate">{{ item.name }}</div>
            <div class="text-sm text-title">by {{ item.artistName }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
