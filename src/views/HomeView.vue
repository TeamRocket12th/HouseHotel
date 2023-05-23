<template>
  <div>
    <LoadingItem :isLoading="isLoading" @loading-event="loadingEvent" />
  </div>

  <div class="relative">
    <HomeCarousel />

    <div
      class="absolute left-1/2 top-1/2 z-10 flex h-auto w-full -translate-x-1/2 -translate-y-1/2 items-center"
    >
      <div class="flex w-full items-center justify-center gap-32">
        <div>
          <img src="@/assets/images/logo.svg" alt="" class="w-100% mb-48 max-w-none" />
          <div class="inline-block text-xs text-white">
            <p class="mb-4">好室旅店。HOUSE HOTEL</p>
            <p class="mb-1.5 font-light">花蓮縣花蓮市國聯一路1號</p>
            <p class="mb-1.5 font-light">03-8321155</p>
            <p class="font-light">HOUSE@HOTEL.COM</p>
          </div>
        </div>
        <HomeCards :isLoading="isLoading" @loading-event="handleLoadingEvent">
          <p>Loading 狀態：{{ isLoading }}</p>
        </HomeCards>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeCards from '@/components/HomeCards.vue'
import HomeCarousel from '@/components/HomeCarousel.vue'
import LoadingItem from '@/components/LoadingItem.vue'
import { ref, onMounted } from 'vue'

const isLoading = ref()

const handleLoadingEvent = (value) => {
  isLoading.value = value
}
onMounted(() => {
  console.log(isLoading.value)
})
</script>
