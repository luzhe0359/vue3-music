<script lang="ts" setup>
import Menu from '@/components/layout/menu/Menu.vue'
import Header from '@/components/layout/header/Header.vue'
import Footer from '@/components/layout/footer/Footer.vue'
import PlayedList from '@/components/layout/playedList/PlayedList.vue'
</script>

<template>
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
    <div class="w-56 h-screen flex-shrink-0">
      <Menu />
    </div>
    <div class="flex-1 flex flex-col divider-shadow">
      <div class="h-14">
        <Header />
      </div>
      <div class="flex-1 overflow-hidden">
        <ElScrollbar>
          <div class="container mx-auto pb-5">
            <RouterView />
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
<style lang="scss" scoped>
.divider-shadow {
  /* box-shadow: -5px 0px 10px 2px #222 inset; */
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1) !important;
}
</style>
