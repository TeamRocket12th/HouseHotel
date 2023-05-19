import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import { apiPostReservation } from '@/apis/client.js'

export const useOrderStore = defineStore('order', () => {
  const today = ref(new Date())
  const firstDay = ref(new Date())
  const lastDay = ref(new Date())
  const userInfo = reactive({
    name: '',
    tel: '',
    date: []
  })
  const orderRange = ref({ start: firstDay.value, end: lastDay.value })

  const changeDateFormat = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`
    return formattedDate
  }

  const apiDateFormat = () => {
    const start = changeDateFormat(orderRange.value.start)
    const end = changeDateFormat(orderRange.value.end)
    userInfo.date.push(start, end)
  }

  const totalNight = computed(() => {
    return (orderRange.value.end - orderRange.value.start) / (3600 * 24 * 1000)
  })

  const checkWeek = (normalDayPrice, holidayPrice) => {
    const dayOfWeek = new Date(orderRange.value.start).getDay()
    const total = dayOfWeek + totalNight.value
    let weekdays = 0
    let weekends = 0

    for (let i = dayOfWeek; i < total; i++) {
      let pointer = i % 7
      if (pointer === 5 || pointer === 6 || pointer === 7) {
        weekends++
      } else {
        weekdays++
      }
    }
    return normalDayPrice * weekdays + holidayPrice * weekends
  }

  const totalPrice = (normalDayPrice, holidayPrice) => {
    return normalDayPrice * checkWeek.value[0] + holidayPrice * checkWeek.value[1]
  }

  const resetOrderRange = () => {
    orderRange.value.start = today.value
    orderRange.value.end = today.value
  }

  const postReservation = async (roomId, info) => {
    try {
      await apiPostReservation(roomId, info)
    } catch (err) {
      console.log(err)
    }
  }

  return {
    today,
    orderRange,
    apiDateFormat,
    totalNight,
    checkWeek,
    totalPrice,
    resetOrderRange,
    postReservation
  }
})
