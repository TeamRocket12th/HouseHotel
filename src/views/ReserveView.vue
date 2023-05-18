<template>
  <div class="flex flex-row justify-between">
    <RoomCarousel :src="roomInfo" />
    <div class="flex w-[58%] flex-col items-start pl-[30px] pr-[128px] pt-[107px]">
      <RoomInfo v-if="roomInfo.descriptionShort" :room-service="roomInfo" />
      <CalendarItem />
    </div>
  </div>
</template>
<script setup>
import RoomCarousel from '../components/RoomCarousel.vue'
import RoomInfo from '../components/RoomInfo.vue'
import CalendarItem from '../components/CalendarItem.vue'

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { apiGetRoomInfos } from '@/apis/client.js'

const route = useRoute()
const roomInfo = ref([])

const getRoomInfos = async () => {
  try {
    const roomId = route.params.id
    const res = await apiGetRoomInfos(roomId) // props: roomId
    roomInfo.value = res.data.room[0]
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getRoomInfos()
})
</script>

<style></style>
