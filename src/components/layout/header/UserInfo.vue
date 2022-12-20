<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useLoginQrKey, useLoginQrCreate, usecheckStatus, useLoginStatus } from '@/utils/api'

const { checkLogin } = useUserStore()
const { showLogin, isLogin, profile } = storeToRefs(useUserStore())
const router = useRouter()

const phone = ref('')
const password = ref('')
const key = ref('')
const qrimg = ref('')
const qrInvalid = ref(false)
const timer = ref()

// 获取二维码及key
const getQrData = async () => {
  key.value = await useLoginQrKey()
  qrimg.value = await useLoginQrCreate(key.value)

  checkStatus()
}

// 检测扫码状态
const checkStatus = () => {
  console.log(2)
  timer.value = setInterval(async () => {
    console.log(3)
    const { code, cookie } = await usecheckStatus(key.value)
    if (code === 800) {
      qrInvalid.value = true
      clearInterval(timer.value)
    }
    if (code === 803) {
      // 这一步会返回cookie
      clearInterval(timer.value)
      checkLogin()
    }
  }, 3000)
}

// 刷新二维码
const refreshQr = () => {
  qrInvalid.value = false
  getQrData()
}

// 打开登录弹窗
const open = () => {
  refreshQr()
}

// 关闭登录弹窗
const close = () => {
  clearInterval(timer.value)
}

onMounted(() => {
  checkLogin()
})
</script>

<template>
  <div class="flex items-center cursor-pointer hover-text">
    <ElAvatar size="small" round class="bg-gray-200" :src="profile?.avatarUrl ?? ''"></ElAvatar>
    <span v-if="isLogin" class="text-xs ml-1.5 select-none">{{ profile.nickname }}</span>
    <span v-else class="text-xs ml-1.5" @click="showLogin = true">点击登录</span>
  </div>

  <el-dialog v-model="showLogin" class="!bg-gray-100 dark:!bg-[#171718] select-none" width="360" @open="open" @close="close">
    <div class="flex flex-col items-center">
      <div class="text-4xl mt-10">扫码登录</div>
      <div class="w-52 h-52 mt-8 mb-4 relative">
        <div v-if="qrInvalid" class="w-full h-full bg-[#000] bg-opacity-80 absolute z-10 flex flex-col justify-center items-center">
          <div class="mb-2 text-dc">二维码已失效</div>
          <el-button type="primary" @click="refreshQr">点击刷新</el-button>
        </div>
        <el-image class="w-full h-full" :src="qrimg" fit="cover" />
      </div>
      <div>使用 <span class="text-active">网易云音乐APP</span> 扫码登录</div>
      <div class="mt-16">选择其他登录模式 ></div>
    </div>
  </el-dialog>
</template>

<style lang="scss"></style>
