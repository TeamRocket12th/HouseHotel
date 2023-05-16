<script setup>
import RoomCards from '@/components/RoomCards.vue'
</script>

<template>
  <main class="bg-slate-500 pt-32">
    <div class="flex gap-32">
      <div class="pl-[137px]">
        <img src="@/assets/images/logo.svg" alt="" class="w-100% max-w-none" />
      </div>
      <RoomCards />
    </div>
    <div class="pl-[137px] text-xs text-white">
      <p class="mb-4">好室旅店。HOUSE HOTEL</p>
      <p class="mb-1.5 font-light">花蓮縣花蓮市國聯一路1號</p>
      <p class="mb-1.5 font-light">03-8321155</p>
      <p class="font-light">HOUSE@HOTEL.COM</p>
    </div>
  </main>
</template>
