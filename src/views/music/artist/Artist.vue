<script setup lang="ts">
import { h, ref, reactive, computed, onMounted } from 'vue'
import { ElDivider } from 'element-plus'
import { userArtistList } from '@/utils/api'
import { Artist } from '@/models/artist'

const spacer = h(ElDivider, { direction: 'vertical' })

const options: {
  name: string
  key: string
  list: { name: string | number; key: string | number }[]
}[] = [
  {
    name: '语种',
    key: 'area',
    list: [
      { key: -1, name: '全部' },
      { key: 7, name: '华语' },
      { key: 96, name: '欧美' },
      { key: 8, name: '日本' },
      { key: 16, name: '韩国' },
      { key: 0, name: '其他' }
    ]
  },
  {
    name: '分类',
    key: 'type',
    list: [
      { key: -1, name: '全部' },
      { key: 1, name: '男歌手' },
      { key: 2, name: '女歌手' },
      { key: 3, name: '乐队组合' }
    ]
  },
  {
    name: '筛选',
    key: 'initial',
    list: [
      { key: '-1', name: '热门' },
      { key: 'a', name: 'A' },
      { key: 'b', name: 'B' },
      { key: 'c', name: 'C' },
      { key: 'd', name: 'D' },
      { key: 'e', name: 'E' },
      { key: 'f', name: 'F' },
      { key: 'g', name: 'G' },
      { key: 'h', name: 'H' },
      { key: 'i', name: 'I' },
      { key: 'j', name: 'J' },
      { key: 'k', name: 'K' },
      { key: 'l', name: 'L' },
      { key: 'm', name: 'M' },
      { key: 'n', name: 'N' },
      { key: 'o', name: 'O' },
      { key: 'p', name: 'P' },
      { key: 'q', name: 'Q' },
      { key: 'r', name: 'R' },
      { key: 's', name: 'S' },
      { key: 't', name: 'T' },
      { key: 'u', name: 'U' },
      { key: 'v', name: 'V' },
      { key: 'w', name: 'W' },
      { key: 'x', name: 'X' },
      { key: 'y', name: 'Y' },
      { key: 'z', name: 'Z' },
      { key: '0', name: '#' }
    ]
  }
]

const list = ref<Artist[]>([])
const pageData = reactive({
  init: false,
  loading: false,
  page: 1,
  limit: 60,
  initial: '-1',
  type: -1,
  area: -1
})

const isActive = computed(() => (optionName: string, valueName: string | number) => {
  return (
    (optionName === 'area' && valueName === pageData.area) ||
    (optionName === 'type' && valueName === pageData.type) ||
    (optionName === 'initial' && valueName === pageData.initial)
  )
})

const changeOption = (optionName: string, valueName: string | number) => {
  if (optionName === 'area') pageData.area = valueName as number
  if (optionName === 'type') pageData.type = valueName as number
  if (optionName === 'initial') pageData.initial = valueName as string

  list.value = []
  getData()
}

const getData = async () => {
  pageData.loading = true
  try {
    const data = await userArtistList(pageData)

    if (pageData.page === 1) {
      list.value = data
    } else {
      list.value?.push(...data)
    }

    pageData.init = true
    pageData.loading = false
  } catch (error) {
    pageData.page--
    pageData.loading = false
  }
}

const loadMore = () => {
  pageData.page++
  getData()
}

onMounted(getData)
</script>

<template>
  <div class="pb-5">
    <div v-for="option in options" :key="option.key" class="flex text-xs mb-5">
      <div class="flex-shrink-0 leading-loose text-slate-400">{{ option.name }}:</div>
      <div class="ml-3">
        <el-space wrap :size="5" :spacer="spacer">
          <el-button
            v-for="item in option.list"
            :key="item.key"
            :type="isActive(option.key, item.key) ? 'primary' : ''"
            :link="!isActive(option.key, item.key)"
            size="small"
            round
            @click="changeOption(option.key, item.key)"
          >
            {{ item.name }}
          </el-button>
        </el-space>
      </div>
    </div>
  </div>
  <div class="grid grid-flow-row grid-cols-6 xl:grid-cols- 2xl:grid-cols-10 gap-5">
    <div v-for="item in list" :key="item.id" class="flex flex-col items-center">
      <!-- <el-avatar class="w-full" :src="item.img1v1Url + '?param=120y120'" /> -->
      <img :src="item.img1v1Url + '?param=120y120'" alt="" class="rounded-full cursor-pointer w-full aspect-square object-cover bg-dc" />
      <div class="mt-2 text-sm">{{ item.name }}</div>
    </div>
  </div>
  <div class="pt-8">
    <el-button text type="primary" class="w-full text-full" :loading="pageData.loading" @click="loadMore">加载更多</el-button>
  </div>
</template>

<style lang="scss">
/* el-divider样式无效bug */
.el-divider--vertical {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
  border-left: 1px var(--el-border-color) var(--el-border-style);
}
</style>
