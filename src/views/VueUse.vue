<script lang="ts" setup>
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>
<template>
  <div class="text-2xl font-bold mb-2">Mouse: {{ x }} x {{ y }}</div>
  <h1>测试 vueUse 的鼠标坐标</h1>
</template>
