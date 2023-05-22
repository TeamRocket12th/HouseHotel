<template>
  <div class="flex w-full bg-transparent px-32">
    <div class="w-1/3 bg-home-green-100 px-16 py-8">
      <VForm>
        <div class="mb-5">
          <label for="name" class="mb-1 block text-white">姓名</label>
          <VField
            name="name"
            type="name"
            rules="required"
            id="name"
            class="h-9 w-full"
            label="姓名"
            v-model="userInfo.name"
          />
          <ErrorMessage name="name" class="text-yellow-500" />
        </div>

        <div class="mb-5">
          <label for="phone" class="mb-1 block text-white">電話</label>
          <VField
            name="phone"
            type="text"
            id="phone"
            label="電話"
            rules="required|phoneStartingWith09|max:10"
            class="h-9 w-full"
            v-model="userInfo.tel"
          />
          <ErrorMessage name="phone" class="text-yellow-500" />
        </div>

        <div class="mb-5">
          <label for="checkinDate" class="mb-1 block text-white">入住日期</label>
          <VDatePicker
            v-model="orderRange.start"
            :popover="false"
            :min-date="today"
            :max-date="new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000)"
            :select-attribute="attribute"
            :drag-attribute="attribute"
            :disabled-dates="disabledDates"
            @click="printSelectedDate"
            expanded
            borderless
          >
            <template #default="{ togglePopover, inputEvents }">
              <div class="flex w-full overflow-hidden">
                <input
                  :value="userInfo.date[0]"
                  v-on="inputEvents"
                  class="h-9 flex-grow text-home-gray-150"
                />
                <button
                  class="e flex items-center justify-center border-none bg-white"
                  @click="() => togglePopover()"
                >
                  <span class="material-symbols-rounded border-none text-3xl text-home-green-100">
                    arrow_drop_down
                  </span>
                  <IconCalendar class="h-5 w-5" />
                </button>
              </div>
            </template>
          </VDatePicker>
        </div>

        <div class="mb-5">
          <label for="checkinDate" class="mb-1 block text-white">退房日期</label>
          <VDatePicker
            v-model="orderRange.end"
            :popover="false"
            :min-date="today"
            :max-date="new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000)"
            :select-attribute="attribute"
            :drag-attribute="attribute"
            :disabled-dates="disabledDates"
            @click="printSelectedDate"
            expanded
            borderless
          >
            <template #default="{ togglePopover, inputEvents }">
              <div class="flex w-full overflow-hidden">
                <input
                  :value="userInfo.date[userInfo.date.length - 1]"
                  v-on="inputEvents"
                  class="h-9 flex-grow text-home-gray-150"
                />
                <button
                  class="e flex items-center justify-center border-none bg-white"
                  @click="() => togglePopover()"
                >
                  <span class="material-symbols-rounded border-none text-3xl text-home-green-100">
                    arrow_drop_down
                  </span>
                  <IconCalendar class="h-5 w-5" />
                </button>
              </div>
            </template>
          </VDatePicker>
        </div>
      </VForm>
      <p class="mb-2 text-sm font-normal text-home-green-50">2天，1晚平日</p>
      <div class="mb-[10px] h-[1px] w-full bg-home-green-50"></div>
      <div class="mb-4 text-right text-white">
        <p>總計</p>
        <p>$1,380</p>
      </div>
      <button class="mb-[18px] w-full border py-2 text-white" @click="sendButton">確認送出</button>
      <p class="text-center text-xs text-white">此預約系統僅預約功能，並不會對您進行收費</p>
    </div>

    <div class="w-2/3 border border-home-green-100 bg-white pb-3 pl-8">
      <div class="mt-10 flex cursor-pointer justify-end pr-10" @click="cancelButton(false)">
        <img src="../assets/images/icons8-cancel.png" alt="" />
      </div>
      <div class="w-[85%]">
        <div class="mb-2 flex w-full items-center">
          <div class="w-1/3">
            <h2 class="font-bold text-home-green-100">{{ roomService.name }}</h2>
          </div>
          <div class="h-[1px] w-full bg-home-green-50"></div>
        </div>
        <p class="text-home-green-100">
          <span>
            {{ roomService.descriptionShort.GuestMin }}
          </span>
          <span
            v-if="roomService.descriptionShort.GuestMin !== roomService.descriptionShort.GuestMax"
            >～ {{ roomService.descriptionShort.GuestMax }}
          </span>
          <span> 人 ・ </span>
          {{ roomService.descriptionShort.Bed[0] }} Size床・附早餐・ 衛浴{{
            roomService.descriptionShort['Private-Bath']
          }}間・{{ roomService.descriptionShort.Footage }}平方公尺<br />
          平日（一～四）價格：{{ roomService.normalDayPrice }} / 假日（五〜日）價格：{{
            roomService.holidayPrice
          }}
        </p>
        <ul class="my-7 flex items-center gap-8 text-center">
          <li>
            <img
              src="@/assets/images/amenities/icon_amenities_Breakfast.svg"
              alt=""
              class="h-8 w-8 pb-1"
            />
            <p class="text-xs text-home-green-50">早餐</p>
          </li>
          <li>
            <img
              src="../assets/images/amenities/icon_amenities_Wi-Fi.svg"
              alt=""
              class="h-8 w-8 pb-1"
            />
            <p class="text-xs text-home-green-50">Wifi</p>
          </li>
          <li>
            <img
              src="../assets/images/amenities/icon_amenities_Television.svg"
              alt=""
              class="h-8 w-8 pb-1"
            />
            <p class="text-xs text-home-green-50">電話</p>
          </li>
          <li>
            <img
              src="../assets/images/amenities/icon_amenities_Refrigerator.svg"
              alt=""
              class="h-8 w-8 pb-1"
            />
            <p class="text-xs text-home-green-50">冰箱</p>
          </li>
          <li>
            <img
              src="../assets/images/amenities/icon_amenities_Pet-Friendly.svg"
              alt=""
              class="h-8 w-8 pb-1"
            />
            <p class="text-xs text-home-green-50">攜帶寵物</p>
          </li>
          <li>
            <img
              src="../assets/images/amenities/icon_amenities_Smoke-Free.svg"
              alt=""
              class="h-8 w-8"
            />
            <p class="text-xs text-home-green-50">全面禁菸</p>
          </li>
          <li>
            <img
              src="../assets/images/amenities/icon_amenities_Air-Conditioner.svg"
              alt=""
              class="h-8 w-8"
            />
            <p class="text-xs text-home-green-50">空調</p>
          </li>
        </ul>
        <div class="mb-3 flex w-full items-center gap-1">
          <div class="w-20">
            <h4 class="font-bold text-home-green-100">訂房資訊</h4>
          </div>
          <div class="h-[1px] w-full bg-home-green-50"></div>
        </div>
        <p class="mb-3 text-xs leading-6 text-home-green-100">
          ・入住時間：最早{{ roomService.checkInAndOut.checkInEarly }}，最晚
          {{ roomService.checkInAndOut.checkInLate }}；退房時間：{{
            roomService.checkInAndOut.checkOut
          }}，請自行確認行程安排。<br />
          ・平日定義週一至週四；假日定義週五至週日及國定假日。<br />
          ・好室旅店全面禁止吸菸。<br />
          ・若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 - 18:00 )。
        </p>
        <div class="mb-[19px] flex w-full items-center gap-1">
          <div class="w-20">
            <h4 class="font-bold text-home-green-100">預約流程</h4>
          </div>
          <div class="h-[1px] w-full bg-home-green-50"></div>
        </div>
        <div class="flex w-full justify-between">
          <div class="h-36 w-44 rounded-b-[10px] border">
            <div class="mb-4 flex h-12 justify-center bg-home-green-50">
              <img src="@/assets/images/amenities/reservationflow_step_1.svg" alt="" class="w-8" />
            </div>
            <div>
              <p class="text-center text-xs text-home-green-100">送出線上預約單</p>
            </div>
          </div>
          <div class="pt-4">
            <img src="@/assets/images/process.png" alt="" />
          </div>
          <div class="h-36 w-44 rounded-b-[10px] border">
            <div class="mb-4 flex h-12 justify-center bg-home-green-50">
              <img src="@/assets/images/amenities/reservationflow_step_2.svg" alt="" class="w-8" />
            </div>
            <div>
              <p class="text-center text-xs text-home-green-100">
                系統立即回覆是否預訂成功<br />
                並以簡訊發送訂房通知 <br />(若未收到簡訊請來電確認)
              </p>
            </div>
          </div>
          <div class="pt-4">
            <img src="@/assets/images/process.png" alt="" />
          </div>
          <div class="h-36 w-44 rounded-b-[10px] border">
            <div class="mb-4 flex h-12 justify-center bg-home-green-50">
              <img src="@/assets/images/amenities/reservationflow_step_3.svg" alt="" class="w-8" />
            </div>
            <div>
              <p class="text-center text-xs text-home-green-100">
                入住當日憑訂房通知 <br />以現金或刷卡付款即可 <br />(僅接受VISA.JCB.銀聯卡)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Field as VField, Form as VForm, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/order.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const printSelectedDate = () => {
  console.log(orderRange.start)
  const dateToFormat = new Date(orderRange.start)
  const formattedDate = changeDateFormat(dateToFormat)
  console.log(formattedDate)
  orderRange.start = formattedDate
  const lastToFormat = new Date(orderRange.end)
  const lastDate = changeDateFormat(lastToFormat)
  orderRange.end = lastDate
  console.log(orderRange)
  console.log(userInfo)
  apiDateFormat()
}

const apiDateFormat = () => {
  const startDate = new Date(orderRange.start)
  const endDate = new Date(orderRange.end)
  const diffTime = Math.abs(endDate - startDate)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  userInfo.date = []

  for (let i = 0; i <= diffDays; i++) {
    const currentDate = new Date(startDate)
    currentDate.setDate(startDate.getDate() + i)
    const formattedDate = changeDateFormat(currentDate)
    userInfo.date.push(formattedDate)
  }
}
const attribute = ref({
  highlight: {
    start: {
      style: {
        backgroundColor: '#38470B'
      },
      contentStyle: {
        color: '#ffffff'
      }
    },
    base: {
      style: {
        backgroundColor: '#949C7C'
      },
      contentStyle: {
        color: '#ffffff'
      }
    },
    end: {
      style: {
        backgroundColor: '#38470B'
      },
      contentStyle: {
        color: '#ffffff'
      }
    }
  }
})
onMounted(() => {
  console.log(userInfo)
  console.log(orderRange)
})

const emit = defineEmits(['window-event'])
const cancelButton = (value) => {
  emit('window-event', value)
}
const sendButton = () => {
  const roomId = route.params.id
  const res = orderDate.postReservation(roomId, userInfo)
  console.log(res)
}

const orderDate = useOrderStore()
const { today } = storeToRefs(orderDate)
const userInfo = orderDate.userInfo
const changeDateFormat = orderDate.changeDateFormat
const orderRange = orderDate.orderRange

const props = defineProps({
  roomService: {
    required: true
  }
})

const bedChinese = [
  ['Single', '單人'],
  ['Small Double', '小型雙人'],
  ['Double', '雙人'],
  ['Queen', '加大雙人']
]
const bedToChinese = ref('單人')

bedChinese.map((item) => {
  if (item[0] === props.roomService.descriptionShort.Bed[0]) {
    bedToChinese.value = item[1]
  }
})

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})

setLocale('zh_TW')
</script>
