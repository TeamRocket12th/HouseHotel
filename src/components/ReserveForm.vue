<template>
  <div class="flex h-[600px] w-full bg-transparent px-32">
    <div class="w-1/3 bg-home-green-100 px-16 py-12">
      <VForm>
        <div class="mb-6">
          <label for="name" class="mb-1 block text-white">姓名</label>
          <VField
            name="name"
            type="name"
            rules="required|name"
            id="name"
            class="h-9 w-full"
            label="姓名"
          />
          <ErrorMessage name="name" class="text-white" />
        </div>

        <div class="mb-6">
          <label for="phone" class="mb-1 block text-white">電話</label>
          <VField
            name="phone"
            type="text"
            id="phone"
            label="電話"
            rules="required|phoneStartingWith09|max:10"
            class="h-9 w-full"
          />
          <ErrorMessage name="phone" class="text-white" />
        </div>
        <div class="mb-6">
          <label for="checkinDate" class="mb-1 block text-white">入住日期</label>
          <VDatePicker
            v-model="date"
            :popover="false"
            :min-date="today"
            :max-date="new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000)"
            :select-attribute="attribute"
            :drag-attribute="attribute"
            :disabled-dates="disabledDates"
            expanded
            borderless
          >
            <template #default="{ togglePopover, inputValue, inputEvents }">
              <div class="flex w-full overflow-hidden">
                <input
                  :value="inputValue"
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
        <div class="mb-6">
          <label for="checkinDate" class="mb-1 block text-white">退房日期</label>
          <VDatePicker v-model="date" :popover="false">
            <template #default="{ togglePopover, inputValue, inputEvents }">
              <div class="flex w-full overflow-hidden">
                <input
                  :value="inputValue"
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

      <p class="mb-3 text-sm font-normal text-home-green-50">2天，1晚平日</p>
      <div class="mb-[10px] h-[1px] w-full bg-home-green-50"></div>
      <div class="mb-5 text-right text-white">
        <p>總計</p>
        <p>$1,380</p>
      </div>
      <button class="mb-[18px] w-full border py-2 text-white" @click="sendButton">確認送出</button>
      <p class="text-center text-xs text-white">此預約系統僅預約功能，並不會對您進行收費</p>
    </div>

    <div class="w-2/3 border border-home-green-100 bg-white pl-8">
      <div class="mt-10 flex cursor-pointer justify-end pr-10" @click="cancelButton(false)">
        <img src="../assets/images/icons8-cancel.png" alt="" />
      </div>
      <div class="w-[85%]">
        <div class="mb-2 flex w-full items-center">
          <div class="w-1/3">
            <h2 class="font-bold text-home-green-100">Single Room</h2>
          </div>
          <div class="h-[1px] w-full bg-home-green-50"></div>
        </div>
        <p class="text-home-green-100">
          1人・ 單人床・附早餐・ 衛浴1間・18平方公尺<br />
          平日（一～四）價格：1380 / 假日（五〜日）價格：1500
        </p>
        <ul class="flex items-center">
          <li>
            <img src="@/assets/images/amenities/icon_amenities_Breakfast.svg" alt="" />
            <p class="text-home-green-100">早餐</p>
          </li>
        </ul>
        <div class="mb-3 flex w-full items-center gap-1">
          <div class="w-20">
            <h4 class="font-bold text-home-green-100">訂房資訊</h4>
          </div>
          <div class="h-[1px] w-full bg-home-green-50"></div>
        </div>
        <p class="mb-3 text-xs leading-6 text-home-green-100">
          ・入住時間：最早15：00，最晚21：00；退房時間：10：00，請自行確認行程安排。<br />
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
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
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
const formInfo = reactive({
  name: 'HELL',
  tel: '0987654321',
  date: ['2023-06-15']
})
const emit = defineEmits(['window-event'])
const cancelButton = (value) => {
  emit('window-event', value)
}
const sendButton = () => {
  const roomId = route.params.id
  const res = orderDate.postReservation(roomId, formInfo)
  console.log(res)
}

const orderDate = useOrderStore()
const { today } = storeToRefs(orderDate)

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})

setLocale('zh_TW')
</script>
