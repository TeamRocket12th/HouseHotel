<template>
  <div class="flex flex-col justify-between lg:h-[100vh] lg:flex-row lg:overflow-hidden">
    <LoadingItem :is-loading="isLoading" />
    <RoomCarousel :src="roomInfo" @window-event="handleBooleanEvent"></RoomCarousel>
    <div
      class="flex w-full flex-col overflow-scroll px-[40px] pt-[107px] lg:w-[58%] lg:items-start lg:pl-[30px] lg:pr-[128px]"
    >
      <RoomInfo v-if="roomInfo.descriptionShort" :room-service="roomInfo" />
      <CalendarItem v-if="roomBooked" :booked-date="roomBooked" />
    </div>
  </div>
  <div
    class="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 bg-transparent"
    v-show="receivedBoolean"
  >
    <ReserveForm
      @window-event="handleBooleanEvent"
      v-if="roomInfo.descriptionShort"
      :room-service="roomInfo"
    >
    </ReserveForm>
  </div>
</template>
<script setup>
import RoomCarousel from '../components/RoomCarousel.vue'
import RoomInfo from '../components/RoomInfo.vue'
import CalendarItem from '../components/CalendarItem.vue'
import LoadingItem from '../components/LoadingItem.vue'
import ReserveForm from '../components/ReserveForm.vue'

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { apiGetRoomInfos } from '@/apis/client.js'

const route = useRoute()
const roomInfo = ref([])
const roomBooked = ref([])
const isLoading = ref(false)
const receivedBoolean = ref('')

const handleBooleanEvent = (value) => {
  receivedBoolean.value = value
}

const getRoomInfos = async () => {
  try {
    isLoading.value = true
    const roomId = route.params.id
    const res = await apiGetRoomInfos(roomId)
    console.log(res)
    roomInfo.value = res.data.room[0]
    roomBooked.value = res.data.booking
    isLoading.value = false
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getRoomInfos()
})
</script>

<style></style>
