<script lang="ts" setup>
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>
<template>
  <div class="text-4xl text-blue-500 font-bold mb-6">Pinia 简单使用</div>

  <div class="text-2xl font-bold mb-2">Mouse: {{ x }} x {{ y }}</div>
  <h1>测试 vueUse 的鼠标坐标</h1>

  <div class="mt-10">
    官网地址：
    <el-link class="text-blue-400" href="https://vueuse.org/"> https://vueuse.org </el-link>
  </div>
</template>
