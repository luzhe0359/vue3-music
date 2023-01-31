<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Menu from '@/layout/menu/Menu.vue'
import Header from '@/layout/header/Header.vue'
import Footer from '@/layout/footer/Footer.vue'
import PlayedList from '@/components/PlayedList.vue'

const route = useRoute()
</script>

<template>
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
    <div class="w-56 h-screen flex-shrink-0">
      <Menu />
    </div>
    <div class="flex-1 flex flex-col">
      <div class="h-14">
        <Header />
      </div>
      <div class="flex-1 overflow-hidden">
        <ElScrollbar>
          <div class="container mx-auto p-6">
            <RouterView :key="route.fullPath" />
          </div>
        </ElScrollbar>
      </div>
      <div class="h-20">
        <Footer />
      </div>
    </div>
  </div>

  <PlayedList />
</template>
