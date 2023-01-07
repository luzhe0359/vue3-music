<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { onMounted, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { usePlayerStore } from '@/stores/player'
import { useCommonStore } from '@/stores/common'
import type { Banner } from '@/models/banner'

const router = useRouter()
const { banners } = toRefs(useCommonStore())
const { getBanners } = useCommonStore()
const { play } = usePlayerStore()

onMounted(async () => {
  await getBanners()
})

const onClick = (banner: Banner) => {
  if (banner.targetType === 1) {
    play(banner.targetId)
  } else if (banner.targetType === 10) {
    router.push({ name: 'album', query: { id: banner.targetId } })
  }
}
</script>

<template>
  <Swiper slides-per-group-auto slides-per-view="auto" :navigation="true" :grab-cursor="true">
    <SwiperSlide v-for="item in banners" :key="item.bannerId">
      <img :src="item.imageUrl" class="banner-image" @click="onClick(item)" />
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
.swiper {
  @apply -mx-2.5;
  .swiper-slide {
    @apply w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 px-2.5;
  }
}

.banner-image {
  @apply rounded-lg cursor-pointer transition-all object-cover;
  @apply hover:shadow hover:opacity-80;
}
</style>
