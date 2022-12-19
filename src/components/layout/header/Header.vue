<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { HamburgerButton, Left, Mail, Platte, Right, Search } from '@icon-park/vue-next'
import { useRouter } from 'vue-router'
import IconPark from '@/components/common/IconPark.vue'
import UserInfo from '@/components/layout/header/UserInfo.vue'
import SearchPop from '@/components/layout/header/SearchPop.vue'

const iconSize = 22

const router = useRouter()

const isDark = ref(false)

// 切换主题
const changeThemeMode = () => {
  isDark.value = !isDark.value
  changeThemeClass()
}
// 切换class
const changeThemeClass = () => {
  if (isDark.value || (!isDark.value && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.removeItem('theme')
  }
}

onMounted(() => {
  // 获取主题
  isDark.value = 'theme' in localStorage
  changeThemeClass()
})
</script>

<template>
  <div class="flex items-center justify-between drag h-14">
    <div class="flex items-center pl-5">
      <IconPark :icon="Left" :size="iconSize" :stroke-width="2" class="icon-button" @click="router.back()" />
      <IconPark :icon="Right" :size="iconSize" :stroke-width="2" class="icon-button" />
      <div class="search no-drag ml-2">
        <SearchPop />
      </div>
    </div>
    <div class="flex items-center mr-5">
      <UserInfo />
      <IconPark :icon="Mail" :stroke-width="2" class="icon-button" />
      <IconPark :icon="Platte" :stroke-width="2" class="icon-button" @click="changeThemeMode" />
      <IconPark :icon="HamburgerButton" :stroke-width="2" class="icon-button" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  @apply text-xs;
  :deep(.el-input__wrapper) {
    @apply rounded-full text-xs bg-slate-100 dark:bg-stone-900;
  }
}

.icon-button {
  @apply p-2 cursor-pointer;
  @apply hover:text-emerald-400;
}
</style>
