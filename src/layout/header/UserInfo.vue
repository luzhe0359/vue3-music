<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import { useLoginQrKey, useLoginQrCreate, usecheckStatus } from '@/utils/api'
import { ScanQrCode } from '@/assets/img'

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
  timer.value = setInterval(async () => {
    const { code, cookie } = await usecheckStatus(key.value)
    if (code === 800) {
      qrInvalid.value = true
      clearInterval(timer.value)
    }
    if (code === 803) {
      ElMessage({
        message: '登录成功',
        type: 'success'
      })
      document.cookie = cookie
      localStorage.setItem('USER-COOKIE', cookie)
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
      <div class="text-3xl mt-10">扫码登录</div>
      <div class="content">
        <div class="p-3 qr-phone absolute transition-all duration-500 opacity-0 transform translate-x-20">
          <el-image class="w-32" :src="ScanQrCode" fit="cover" />
        </div>
        <div class="qr-main w-52 mx-auto my-0 p-3 box-content transition-all duration-500 transform">
          <div class="relative qr-code w-52 h-52">
            <div v-if="qrInvalid" class="w-full h-full bg-[#000] bg-opacity-80 absolute z-10 flex flex-col justify-center items-center">
              <div class="mb-2 text-title">二维码已失效</div>
              <el-button type="primary" @click="refreshQr">点击刷新</el-button>
            </div>
            <el-image class="w-full h-full" :src="qrimg" fit="cover" />
          </div>
          <div class="mt-4 text-center desc">使用 <span class="text-active">网易云音乐APP</span> <br class="hidden" />扫码登录</div>
        </div>
      </div>
      <div class="mt-16">选择其他登录模式 ></div>
    </div>
  </el-dialog>
</template>

<style lang="scss">
.content {
  @apply h-60 w-full mt-6 mb-4 relative;
  .qr-code {
    animation: scale-down-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &:hover {
    .qr-main {
      @apply translate-x-16 -translate-y-2;
      .qr-code {
        animation: scale-down-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }
      .desc {
        @apply -mt-5;
        br {
          @apply inline;
        }
      }
    }
    .qr-phone {
      @apply translate-x-0 opacity-100;
    }
  }
}

@keyframes scale-down-right {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.7);
  }
}
@keyframes scale-down-left {
  0% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}
</style>
