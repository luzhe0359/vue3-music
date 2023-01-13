<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  text: string
  end: number
}>()

const show = ref(false)
const isFold = ref(true)

if (props.text && props.text.length > props.end) {
  show.value = true
}
</script>

<template>
  <div class="leading-5">
    <template v-if="show">
      <span v-if="isFold">{{ text.substring(0, end) }}...</span>
      <span v-else>{{ text }}...</span>
      <span class="ml-2 text-gray-700 dark:text-zinc-200 hover-text" @click="isFold = !isFold">[{{ isFold ? '详情' : '收起' }}]</span>
    </template>
    <template v-else> {{ text }}</template>
  </div>
</template>
