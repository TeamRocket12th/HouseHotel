<template>
  <div>
    <!-- <Calendar /> -->
    <DatePicker v-model="date" borderless />
    <DatePicker v-model.range.number="range" :columns="2" expanded />
    <!-- <template #default="{ togglePopover }">
      <button
        class="px-3 py-2 bg-blue-500 text-sm text-white font-semibold rounded-md"
        @click="togglePopover"
      >
        Select date
      </button>
    </template> -->

    {{ orderDate }}
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { DatePicker } from 'v-calendar'
import 'v-calendar/style.css'

const date = ref(new Date())
const range = ref({ start: date, end: date })
const orderDate = computed(() => {
  let firstDay = new Date(range.value.start)
  let lastDay = new Date(range.value.end)
  let totalNight = (lastDay - firstDay) / (3600 * 24 * 1000)
  console.log(totalNight)
  return [range.value.start, range.value.end]
})
</script>
<style lang=""></style>
