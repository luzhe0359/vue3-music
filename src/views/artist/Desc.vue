<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useArtistDesc } from '@/utils/api'
import type { ArtistDesc } from '@/models/artist_detail'

import CoverPlay from '@/components/CoverPlay.vue'

const route = useRoute()
const id = Number(route.query.id)

const desc = ref<ArtistDesc>()

onMounted(async () => {
  desc.value = await useArtistDesc(id)
})
</script>
<template>
  <div v-loading="!desc" style="min-heigth: 220px">
    <template v-if="desc?.introduction?.length">
      <div v-for="item in desc.introduction" :key="item.ti">
        <div class="pt-6 mb-2 text-sm font-bold">{{ item.ti }}</div>
        <div class="text-xs text-desc leading-7 whitespace-pre-wrap">{{ item.txt }}</div>
      </div>
    </template>
  </div>
</template>
