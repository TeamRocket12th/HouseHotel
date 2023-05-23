<template>
  <div class="flex h-[100vh] flex-row justify-between overflow-hidden">
    <LoadingItem :is-loading="isLoading" />
    <RoomCarousel :src="roomInfo" @window-event="handleBooleanEvent"></RoomCarousel>
    <div class="flex w-[58%] flex-col items-start overflow-scroll pl-[30px] pr-[128px] pt-[107px]">
      <RoomInfo v-if="roomInfo.descriptionShort" :room-service="roomInfo" />
      <CalendarItem />
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
