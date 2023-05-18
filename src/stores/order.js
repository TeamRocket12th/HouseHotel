import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', () => {
  const today = ref(new Date())
  const firstDay = ref(new Date())
  const lastDay = ref(new Date())
  const orderRange = ref({ start: firstDay.value, end: lastDay.value })

  const changeDateFormat = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`
    return formattedDate
  }

  const totalNight = computed(() => {
    const dayOfWeek = firstDay.value.getDay()
    console.log(dayOfWeek)
    return (orderRange.value.end - orderRange.value.start) / (3600 * 24 * 1000)
  })

  return { today, orderRange, changeDateFormat, totalNight }
})
