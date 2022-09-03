<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const userStore = useUserStore()

const changeName = () => {
  userStore.updateName('李四')
}

const resetName = () => {
  userStore.updateName('张三')
}
</script>
<template>
  <div class="text-2xl font-bold mb-2">{{ userStore.name }}</div>

  <div>
    <el-button type="info" text bg @click="changeName">修改store中name的值为：李四</el-button>
    <el-button type="warning" text bg @click="resetName">重置</el-button>
  </div>
</template>
