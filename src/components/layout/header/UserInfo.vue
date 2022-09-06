<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
// import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const router = useRouter()

const phone = ref('')
const password = ref('')
</script>

<template>
  <div class="flex items-center cursor-pointer hover-text">
    <ElAvatar size="small" round class="bg-gray-200" :src="''"></ElAvatar>
    <span class="text-xs ml-1.5" @click="showLogin = true">点击登录</span>
  </div>
</template>

<style lang="scss"></style>
