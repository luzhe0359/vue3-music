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
  <div class="text-4xl text-blue-500 font-bold mb-6">Pinia 简单使用</div>

  <div class="grid gap-y-4">
    <div class="text-2xl font-bold mb-2">{{ userStore.name }}</div>
    <el-button type="info" text bg @click="changeName">修改store中name的值为：李四</el-button>
    <el-button type="warning" text bg @click="resetName">重置</el-button>
  </div>

  <div class="mt-10">
    官网地址：
    <el-link class="text-blue-400" href="https://pinia.web3doc.top/"> https://pinia.web3doc.top </el-link>
  </div>
</template>
