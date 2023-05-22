<template>
  <LoadingItem :is-loading="isLoading" />
  <main>
    <HomeCarousel />
    <div class="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2">
      <div class="flex w-full justify-center gap-32">
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
</script>
