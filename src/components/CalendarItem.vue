<template>
  <div class="w-full text-home-green-100">
    <p class="mb-2 text-[14px] font-medium leading-6">空房狀態查詢</p>
    <div class="border border-home-green-100">
      <VDatePicker
        v-model.range.number="orderRange"
        :columns="2"
        :min-date="today"
        :max-date="new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000)"
        :select-attribute="attribute"
        :drag-attribute="attribute"
        :disabled-dates="disabledDates"
        expanded
        borderless
      />
    </div>
    {{ orderRange }}
    {{ totalNight }}
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/order.js'

const attribute = ref({
  highlight: {
    start: {
      style: {
        backgroundColor: '#38470B'
      },
      contentStyle: {
        color: '#ffffff'
      }
    },
    base: {
      style: {
        backgroundColor: '#949C7C'
      },
      contentStyle: {
        color: '#ffffff'
      }
    },
    end: {
      style: {
        backgroundColor: '#38470B'
      },
      contentStyle: {
        color: '#ffffff'
      }
    }
  }
})

const orderDate = useOrderStore()
const { today, orderRange, totalNight } = storeToRefs(orderDate)
</script>
<style lang=""></style>
