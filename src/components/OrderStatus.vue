<template>
  <teleport to="#app">
    <div
      class="absolute left-0 right-0 top-0 z-50 mx-auto flex h-[100vh] cursor-pointer flex-col justify-center bg-white bg-opacity-20 backdrop-blur-md"
      @click="isActive"
      v-if="pageActive"
    >
      <div
        class="relative mx-auto flex h-[600px] w-[1100px] cursor-default flex-col items-center gap-[41px] bg-home-green-100 text-white"
        @click.stop
      >
        <button type="button" @click="isActive" class="absolute right-[38.86px] top-[38.86px]">
          <img src="@/assets/images/icons8-cancel-white.png" alt="" />
        </button>
        <div class="mt-[125px]">
          <slot name="status-icon">
            <img :src="renderData.img" alt="" />
          </slot>
        </div>
        <h3>
          <slot name="status-header">{{ renderData.header }}</slot>
        </h3>
        <p class="w-[468px] text-center text-[18px] font-light">
          <slot name="status-content">{{ renderData.content }}</slot>
        </p>
      </div>
    </div>
  </teleport>
</template>
<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  orderStatus: {
    default: false
  }
})
const statusData = {
  true: {
    img: '/src/assets/images/amenities/icon_booking_success.svg',
    header: '預約成功',
    content: '請留意簡訊發送訂房通知，入住當日務必出示此訂房通知， 若未收到簡訊請來電確認，謝謝您'
  },
  false: {
    img: '/src/assets/images/amenities/icon_booking_fail.svg',
    header: '預約失敗',
    content: '哎呀！晚了一步！您預約的日期已經被預約走了， 再看看其它房型吧'
  }
}
const pageActive = ref(true)
const renderData = reactive(statusData.false)

const isActive = () => {
  // 這邊要改成對 props 做判斷
  pageActive.value = !pageActive.value
}

if (props.orderStatus === 'true') {
  renderData.value = statusData.true
} else {
  renderData.value = statusData.false
}
</script>
<style></style>
