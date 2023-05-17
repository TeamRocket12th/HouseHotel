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
  <div class="relative flex flex-wrap">
    <ul class="m-0 flex min-w-[550px] max-w-[825px] list-none flex-wrap p-0">
      <li
        @click="clickCards(item.id)"
        v-for="item in data"
        :key="item.id"
        class="h-[275px] w-[275px]"
      >
        <div
          class="group absolute h-[275px] w-[275px] cursor-pointer bg-transparent opacity-60 hover:bg-home-green-100"
        >
          <span
            class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 cursor-pointer text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            {{ item.name }}
          </span>
        </div>

        <img :src="item.imageUrl" alt="" class="h-[275px] w-full" />
        <!-- <RouterLink :to="`/reserve/${item.id}`"></RouterLink> -->
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
