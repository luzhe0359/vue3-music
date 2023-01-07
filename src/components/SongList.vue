<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/stores/player'
import { useFormatDuring } from '@/utils/number'
import type { Song } from '@/models/song'
import Playing from '@/components/Playing.vue'

const { play } = usePlayerStore()
const { id } = storeToRefs(usePlayerStore())

defineProps<{ songs: Song[] }>()

const tableRowClassName = ({ row, rowIndex }: { row: Song; rowIndex: number }) => {
  return row.id == id.value ? 'table-playing' : ''
}

const tableRowDblclick = (row: Song) => {
  play(row.id)
}
</script>

<template>
  <el-table :data="songs" style="width: 100%" :row-class-name="tableRowClassName" @cell-dblclick="tableRowDblclick">
    <el-table-column label="" width="50">
      <template #default="scope">
        <Playing :index="scope.$index" :playing-id="scope.row.id" />
      </template>
    </el-table-column>
    <el-table-column label="歌曲" min-width="150">
      <template #default="scope">
        <span>{{ scope.row.name }}</span>
        <span v-if="scope.row.sq" class="ml-1 text-xs text-active border rounded border-emerald-400">SQ</span>
      </template>
    </el-table-column>
    <el-table-column prop="ar[0].name" label="歌手" />
    <el-table-column prop="al.name" label="专辑" />
    <el-table-column label="时间">
      <template #default="scope">
        {{ useFormatDuring(scope.row.dt / 1000) }}
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
.el-button:hover {
  color: var(--el-color-primary-light-3);
  background-color: transparent !important;
}
</style>
