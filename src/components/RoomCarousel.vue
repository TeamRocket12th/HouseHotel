<template>
  <div class="w-[573px] h-[100vh] relative">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :modules="modules"
      :pagination="{
        el: '.swiper-pagination',
        // bulletClass: '.swiper-pagination-bullet',
        // bulletActiveClass: '.swiper-pagination-bullet-active',
        clickable: true
      }"
      :autoplay="{
        delay: 2000
      }"
    >
      <swiper-slide v-for="(url, key) in props.src.imageUrl" :key="key">
        <img :src="url" alt="" />
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
    <div class="absolute z-10 top-0 left-0 right-0 text-center">
      <div>$ {{ src.normalDayPrice }}</div>
      <div>$ {{ src.holidayPrice }}</div>
      <button
        type="button"
        class="py-[8.5px] pl-[68.3px] text-xl pr-[58.6px] bg-home-green-100 text-white"
      >
        Booking now
      </button>
    </div>
  </div>
</template>
<script setup>
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/bundle'

const modules = [Pagination, Autoplay]

const props = defineProps({
  src: {
    required: true
  }
})

const onSwiper = (swiper) => {
  // console.log(swiper)
}
const onSlideChange = () => {
  // console.log('slide change')
}
</script>
<style>
.swiper-pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #38470b;
  width: auto;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  border: 2px solid #38470b;
  background-color: transparent;
  opacity: 0.6;
}
.swiper-pagination-bullet-active {
  background-color: #38470b;
}
</style>
