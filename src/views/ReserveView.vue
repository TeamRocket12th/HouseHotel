<template>
  <div class="flex h-[100vh] flex-row justify-between overflow-hidden">
    <LoadingItem :is-loading="isLoading" />
    <RoomCarousel :src="roomInfo" />
    <div class="flex w-[58%] flex-col items-start overflow-scroll pl-[30px] pr-[128px] pt-[107px]">
      <RoomInfo v-if="roomInfo.descriptionShort" :room-service="roomInfo" />
      <CalendarItem />
    </div>
  </div>
</template>
<script setup>
import RoomCarousel from '../components/RoomCarousel.vue'
import RoomInfo from '../components/RoomInfo.vue'
import CalendarItem from '../components/CalendarItem.vue'
import LoadingItem from '../components/LoadingItem.vue'

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { apiGetRoomInfos } from '@/apis/client.js'

const route = useRoute()
const roomInfo = ref([])
const isLoading = ref(false)

const getRoomInfos = async () => {
  try {
    isLoading.value = true
    const roomId = route.params.id
    const res = await apiGetRoomInfos(roomId)
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
