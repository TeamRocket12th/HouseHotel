import { ref, reactive, computed } from 'vue'
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

  const changeDateFormat = (orderDay) => {
    const date = new Date(orderDay)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`
    return formattedDate
  }

  const apiDateFormat = () => {
    const pointer = new Date(orderRange.value.start)
    userInfo.date = []
    while (pointer <= new Date(orderRange.value.end)) {
      let dates = changeDateFormat(pointer)
      userInfo.date.push(dates)
      pointer.setDate(pointer.getDate() + 1)
    }
  }

  const totalNight = computed(() => {
    if (orderRange.value === null) {
      return 1
    }
    return (orderRange.value.end - orderRange.value.start) / (3600 * 24 * 1000)
  })

  const checkWeek = () => {
    if (orderRange.value === null) {
      return
    }
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
    return [weekdays, weekends]
  }

  const totalPrice = (normalDayPrice, holidayPrice) => {
    if (checkWeek() === undefined) {
      return normalDayPrice
    }
    const [weekdays, weekends] = checkWeek()
    return normalDayPrice * weekdays + holidayPrice * weekends
  }

  const resetOrderRange = () => {
    orderRange.value = null
  }

  const postReservation = async (roomId, userInfo) => {
    try {
      const res = await apiPostReservation(roomId, userInfo)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return {
    today,
    orderRange,
    userInfo,
    apiDateFormat,
    totalNight,
    checkWeek,
    totalPrice,
    resetOrderRange,
    postReservation,
    changeDateFormat
  }
})
