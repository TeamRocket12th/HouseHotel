<template>
  <div class="relative">
    <div>
      <swiper
        :modules="modules"
        :loop="true"
        :slides-per-view="1"
        :space-between="50"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :navigation="navigation"
        :pagination="{ el: '.my-pagination', type: 'bullets', clickable: true }"
        :scrollbar="{ draggable: false }"
        class="h-[1000px]"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="bg-[url('@/assets/images/house/homeCarouselFirst.jpeg')] bg-cover bg-no-repeat"
        ></swiper-slide>
        <swiper-slide
          class="bg-[url('@/assets/images/house/homeCarouselSecond.jpeg')] bg-cover bg-center bg-no-repeat"
        ></swiper-slide>
        <swiper-slide
          class="bg-[url('@/assets/images/house/homeCarouselThird.jpeg')] bg-cover bg-no-repeat"
        ></swiper-slide>
        <swiper-slide
          class="bg-[url('@/assets/images/house/homeCarouselFourth.jpeg')] bg-cover bg-no-repeat"
        ></swiper-slide>
        <div class="my-pagination home-carousel"></div>
        <div
          class="pointer-events-none absolute top-0 z-10 h-[1000px] w-full bg-black opacity-60"
        ></div>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/bundle'

const navigation = ref({
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
})
const modules = [Autoplay, Pagination, Navigation, Scrollbar]
const onSlideChange = () => {
  // console.log(swiper.activeIndex)
}
</script>

<style>
.my-pagination {
  position: absolute;
  transform: translate(200px, -280px);
  z-index: 999;
}
.swiper-pagination {
  color: white;
}

.swiper-pagination-bullet {
  color: white;
  width: 12px;
  height: 12px;
}

.swiper-pagination-bullet-active {
  background-color: #fff;
  color: #fff;
  width: 12px;
  height: 12px;
}
</style>
