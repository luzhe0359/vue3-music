<script setup lang="ts">
import { useMusicMenu } from '@/views/music/MusicController'
const { menus, currentMenu, handleTabClick } = useMusicMenu()
</script>

<template>
  <div class="px-5 music">
    <h1 class="text-3xl font-bold pt-8 pb-4 select-none">音乐馆</h1>
    <el-affix target=".music" :offset="56">
      <div>
        <el-tabs v-model="currentMenu" @tab-click="handleTabClick">
          <el-tab-pane v-for="menu in menus" :key="menu.name" :label="menu.label" :name="menu.name" />
        </el-tabs>
      </div>
    </el-affix>
    <div class="mt-5">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss"></style>
