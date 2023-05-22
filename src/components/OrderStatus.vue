<template>
  <div
    class="absolute left-0 right-0 top-0 z-50 mx-auto flex h-[100vh] cursor-pointer flex-col justify-center bg-white bg-opacity-20 backdrop-blur-lg"
    @click="isActive"
    v-if="pageStatus"
  >
    <div
      class="relative mx-auto flex h-[600px] w-[1100px] flex-col items-center gap-[41px] bg-home-green-100 text-white"
    >
      <button type="button" class="absolute right-[38.86px] top-[38.86px]">
        <img src="../assets/images/icons8-cancel-white.png" alt="" />
      </button>
      <div class="mt-[125px]">
        <slot name="status-icon"></slot>
      </div>
      <h3>
        <slot name="status-header"></slot>
      </h3>
      <p class="w-[468px] text-center text-[18px] font-light">
        <slot name="status-content"></slot>
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const pageStatus = ref(false)
const isActive = () => {
  pageStatus.value = !pageStatus.value
}
</script>
<style></style>
