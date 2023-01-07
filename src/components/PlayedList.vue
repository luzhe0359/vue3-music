<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/stores/player'
import { useFormatDuring } from '@/utils/number'
import type { Song } from '@/models/song'

const { play, clearPlayList } = usePlayerStore()
const { playList, showPlayList, playListCount, id } = storeToRefs(usePlayerStore())

const tableRowClassName = ({ row }: { row: Song }) => {
  return row.id == id.value ? 'table-playing' : ''
}

const dblclick = (row: Song, column: any, event: any) => {
  play(row.id)
}
</script>

<template>
  <el-drawer v-model="showPlayList" :show-close="false" :with-header="false" direction="rtl" size="50%">
    <div class="text-2xl font-bold">当前播放</div>
    <div class="my-3 flex justify-between">
      <div class="text-sm text-dc">总{{ playListCount }}首</div>
      <el-button type="primary" link @click="clearPlayList">清空列表</el-button>
    </div>
    <el-table class="border-t" :data="playList" :show-header="false" :row-class-name="tableRowClassName" @cell-dblclick="dblclick">
      <el-table-column label="" width="50">
        <template #default="scope">
          <Playing :index="scope.$index" :playing-id="scope.row.id" />
        </template>
      </el-table-column>
      <el-table-column label="歌名" min-width="150">
        <template #default="scope">
          <span>{{ scope.row.name }}</span>
          <span v-if="scope.row.sq" class="ml-1 text-xs text-active border rounded border-emerald-400">SQ</span>
        </template>
      </el-table-column>
      <el-table-column prop="al.name" label="歌手" />
      <el-table-column label="时间">
        <template #default="scope">
          {{ useFormatDuring(scope.row.dt / 1000) }}
        </template>
      </el-table-column>
    </el-table>
  </el-drawer>
</template>

<style lang="scss"></style>
