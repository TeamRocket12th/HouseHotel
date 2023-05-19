<template>
  <div class="mb-[33px] w-full text-home-green-100">
    <p class="mb-2 text-[14px] font-medium leading-6">空房狀態查詢</p>
    <div class="mb-[6px] border border-home-green-100">
      <VDatePicker
        locale="en"
        v-model.range.number="orderRange"
        :columns="2"
        :min-date="today"
        :max-date="new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000)"
        :select-attribute="attribute"
        :drag-attribute="attribute"
        :disabled-dates="disabledDates"
        :masks="{ weekdays: 'WW' }"
        :attributes="attribute"
        expanded
        borderless
      />
    </div>
    <button
      type="button"
      @click="orderDate.resetOrderRange"
      class="text-[14px] leading-6 text-home-green-50"
    >
      重新選取
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/order.js'

const attribute = ref({
  content: {
    color: '#38470B',
    font: '11px'
  },
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
const { today, orderRange } = storeToRefs(orderDate)
</script>
<style>
.vc-header {
  margin-bottom: 24px;
}
.vc-title {
  font-size: 12px;
  font-weight: bold;
  color: #38470b;
}
.vc-weekdays {
  border-bottom: 1px solid #38470b6d;
  padding-bottom: 10px;
  margin-bottom: 14px;
}
.vc-weeks {
  padding: 0 30px;
}
</style>
