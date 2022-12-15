<script setup lang="ts">
import { h, ref, onMounted } from 'vue'
import { ElDivider } from 'element-plus'
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/stores/player'
import { useTopSong } from '@/utils/api'
import { useFormatDuring } from '@/utils/number'
import type { TopSong } from '@/models/top_song'
import { Play } from '@icon-park/vue-next'

const { play } = usePlayerStore()
const { id } = storeToRefs(usePlayerStore())

const spacer = h(ElDivider, { direction: 'vertical' })
const tabs: {
  name: string
  key: number
}[] = [
  {
    name: '全部',
    key: 0
  },
  {
    name: '华语',
    key: 7
  },
  {
    name: '欧美',
    key: 96
  },
  {
    name: '日本',
    key: 8
  },
  {
    name: '韩国',
    key: 16
  }
]

const currentTab = ref(0)
const loading = ref(false)

const list = ref<TopSong[]>([])

const getData = async () => {
  try {
    loading.value = true
    list.value = []
    list.value = await useTopSong(currentTab.value)
  } catch (error) {
  } finally {
    loading.value = false
  }
}

const changeTab = (key: number) => {
  currentTab.value = key
  getData()
}

const tableRowClassName = ({ row }: { row: TopSong }) => {
  return row.id == id.value ? 'table-playing' : ''
}

const dblclick = (row: TopSong) => {
  play(row.id)
}

onMounted(getData)
</script>

<template>
  <div class="mb-5">
    <el-space wrap :size="5" :spacer="spacer">
      <el-button
        v-for="item in tabs"
        :key="item.key"
        :type="currentTab == item.key ? 'primary' : ''"
        :link="currentTab != item.key"
        size="small"
        round
        @click="changeTab(item.key)"
      >
        {{ item.name }}
      </el-button>
    </el-space>
  </div>

  <el-table v-loading="loading" :data="list" :show-header="false" style="width: 100%" :row-class-name="tableRowClassName" @cell-dblclick="dblclick">
    <el-table-column type="index" width="50" />
    <el-table-column label="标题" min-width="150">
      <template #default="scope">
        <div class="flex items-center">
          <div class="relative">
            <el-image class="w-16 h-16 mr-2 flex-shrink-0 rounded" fit="cover" loading="lazy" lazy :src="scope.row.album.picUrl" />
            <div class="absolute inset-0 flex justify-center items-center">
              <IconPark :icon="Play" theme="filled" class="hover-text text-emerald-300" :size="30" />
            </div>
          </div>
          <span class="truncate">{{ scope.row.name }}</span>
          <!-- <span v-if="scope.row.sq" class="ml-1 text-xs text-active border rounded border-emerald-400">SQ</span> -->
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="artists[0].name" label="专题" />
    <el-table-column prop="album.name" label="歌手" />
    <el-table-column label="时间">
      <template #default="scope">
        {{ useFormatDuring(scope.row.duration / 1000) }}
      </template>
    </el-table-column>
  </el-table>
</template>
