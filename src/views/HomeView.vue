<template>
  <main class="relative">
    <LoadingItem :isLoading="isLoading" @loading-event="loadingEvent" />
    <HomeCarousel />
    <div class="pointer-events-auto absolute left-0 top-0 h-full w-full"></div>
    <div
      class="absolute left-1/2 top-1/2 z-10 flex h-[100vh] w-full -translate-x-1/2 -translate-y-1/2 items-center"
    >
      <div class="z-50 flex h-full w-full items-center justify-center gap-32">
        <div class="pointer-events-none">
          <img src="@/assets/images/logo.svg" alt="" class="w-100% mb-48 max-w-none" />
          <div class="inline-block text-xs text-white">
            <p class="mb-4">好室旅店。HOUSE HOTEL</p>
            <p class="mb-1.5 font-light">花蓮縣花蓮市國聯一路1號</p>
            <p class="mb-1.5 font-light">03-8321155</p>
            <p class="font-light">HOUSE@HOTEL.COM</p>
          </div>
        </div>
        <HomeCards />
      </div>
    </div>
  </main>
</template>

<script setup>
import HomeCards from '@/components/HomeCards.vue'
import HomeCarousel from '@/components/HomeCarousel.vue'
import LoadingItem from '@/components/LoadingItem.vue'
import { ref } from 'vue'
const isLoading = ref()

const loadingEvent = (value) => {
  isLoading.value = value
}
</script>
