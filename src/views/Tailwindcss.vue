<script lang="ts" setup></script>
<template>
  <div class="text-4xl text-blue-500 font-bold mb-6">Tailwindcss 简单使用</div>

  <div class="text-2xl font-bold mb-2">字体大小</div>
  <div>
    <p class="text-xs">The quick brown fox ...</p>
    <p class="text-sm">The quick brown fox ...</p>
    <p class="text-base">The quick brown fox ...</p>
  </div>

  <div class="text-2xl font-bold mb-2 mt-6">边框圆角</div>
  <div class="flex gap-x-4">
    <div class="rounded-sm w-20 h-20 bg-sky-500"></div>
    <div class="rounded w-20 h-20 bg-sky-500"></div>
    <div class="rounded-md w-20 h-20 bg-sky-500"></div>
    <div class="rounded-lg w-20 h-20 bg-sky-500"></div>
  </div>

  <div class="mt-10">
    官网地址：
    <el-link class="text-blue-400" href="https://www.tailwindcss.cn/"> https://www.tailwindcss.cn </el-link>
  </div>
</template>
