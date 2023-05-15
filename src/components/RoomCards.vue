<script setup>
import { apiGetAllRoomInfos } from '@/apis/client.js'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const data = ref([])

const getRequest = async () => {
  try {
    const response = await apiGetAllRoomInfos()
    data.value = response.data.items
    console.log(response.data.items)
    // console.log(data.value)
  } catch (err) {
    console.log(err)
  }
}
const clickCards = (id) => {
  router.push({ name: 'reserve', params: { id: `${id}` } })
  console.log(id)
}

onMounted(() => {
  getRequest()
  console.log(data.value)
})
</script>
<template>
  <div class="flex flex-wrap">
    <ul v-for="item in data" :key="item.id" class="list-none p-0 m-0 w-[275px]">
      <li @click="clickCards(item.id)" class="hover:bg-gray-800">
        <div class="relative z-50">
          <img :src="item.imageUrl" alt="" class="w-full h-[275px]" />
        </div>
        <!-- <RouterLink :to="`/reserve/${item.id}`"></RouterLink> -->
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
