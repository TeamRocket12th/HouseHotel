<template>
  <div class="flex col justify-between">
    <RoomCarousel :src="roomInfo" />
  </div>
</template>
<script setup>
import RoomCarousel from '../components/RoomCarousel.vue'
import { ref, onMounted } from 'vue'
import { apiGetAllRoomInfos, apiGetRoomInfos } from '@/apis/client.js'
import router from '@/router'
////////////////////////////////////////////////////////////////
const props = defineProps({
  roomId: {
    required: true
  }
})
const roomId = ref()
////////////////////////////////////////////////////////////////
const roomInfo = ref([])

const getAllRoomInfos = async () => {
  try {
    const res = await apiGetAllRoomInfos()
    roomId.value = res.data.items[0].id
  } catch (err) {
    console.log(err)
  }
}

const getRoomInfos = async () => {
  try {
    // const roomId = router.params
    // console.log(roomId)
    const res = await apiGetRoomInfos(roomId.value) // props: roomId
    roomInfo.value = res.data.room[0]
    console.log(roomInfo.value)
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await getAllRoomInfos()
  await getRoomInfos()
})
</script>

<style></style>
