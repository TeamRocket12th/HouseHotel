<template>
  <div v-if="isFullScreen">
    <teleport to="#app">
      <div
        class="absolute left-0 right-0 top-0 z-30 bg-black bg-opacity-50 backdrop-blur-lg"
        @click="toggleFullScreen"
      >
        <div class="container relative mx-auto overflow-hidden">
          <swiper
            :slides-per-view="1"
            :modules="modules"
            speed="1000"
            loop="true"
            :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow', clickable: true }"
          >
            <swiper-slide v-for="(url, key) in props.src.imageUrl" :key="key">
              <div class="flex h-[100vh] items-center justify-center">
                <img :src="url" alt="" class="h-[90%] w-[50%]" @click.stop />
              </div>
            </swiper-slide>
          </swiper>
          <div
            class="prevArrow absolute left-0 top-[50%] z-30 h-[57px] w-[30px] translate-y-[-50%] cursor-pointer"
            @click.stop
          >
            <img src="../assets/images/albumleft.svg" alt="" />
          </div>
          <div
            class="nextArrow absolute right-0 top-[50%] z-30 h-[57px] w-[30px] translate-y-[-50%] cursor-pointer"
            @click.stop
          >
            <img src="../assets/images/albumright.svg" alt="" />
          </div>
        </div>
      </div>
    </teleport>
  </div>
  <div class="relative h-[100vh] w-[573px]">
    <swiper
      :slides-per-view="1"
      :modules="modules"
      :loop="true"
      :pagination="{
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      :speed="1000"
      class="h-full"
    >
      <swiper-slide
        v-for="(url, key) in props.src.imageUrl"
        :key="key"
        @click="toggleFullScreen"
        class="h-full"
      >
        <img :src="url" alt="" class="h-full w-full object-cover" />
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
    <div class="absolute left-0 right-0 top-0 z-10 text-center">
      <div>$ {{ src.normalDayPrice }}</div>
      <div>$ {{ src.holidayPrice }}</div>
      <button
        type="button"
        class="bg-home-green-100 py-[8.5px] pl-[68.3px] pr-[58.6px] text-xl text-white"
      >
        Booking now
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/bundle'

const modules = [Pagination, Navigation, Autoplay]

const props = defineProps({
  src: {
    required: true
  }
})

const isFullScreen = ref(false)

const toggleFullScreen = () => {
  isFullScreen.value = isFullScreen.value ? false : true
}
</script>
<style>
.bg-liner {
  background: transparent linear-gradient(180deg, #ffffff00 0%, #ffffff 100%) 0% 0% no-repeat
    padding-box;
}
.swiper-pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #38470b;
  width: auto;
  margin-bottom: 47px;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  border: 2px solid #38470b;
  background-color: transparent;
}
.swiper-pagination-bullet-active {
  background-color: #38470b;
}
</style>
