<script setup>
import RoomCards from '@/components/RoomCards.vue'
import HomeCarousel from '@/components/HomeCarousel.vue'
</script>

<template>
  <main>
    <HomeCarousel />
    <div class="absolute top-0 z-10 pt-32">
      <div class="flex gap-32">
        <div class="pointer-events-none pl-[137px]">
          <img src="@/assets/images/logo.svg" alt="" class="w-100% mb-48 max-w-none" />
          <div class="inline-block text-xs text-white">
            <p class="mb-4">好室旅店。HOUSE HOTEL</p>
            <p class="mb-1.5 font-light">花蓮縣花蓮市國聯一路1號</p>
            <p class="mb-1.5 font-light">03-8321155</p>
            <p class="font-light">HOUSE@HOTEL.COM</p>
          </div>
        </div>
        <RoomCards />
      </div>
    </div>
  </main>
</template>
