import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'

import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

import AllRules from '@vee-validate/rules'
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 輸入文字時，就立即進行驗證
})

setLocale('zh_TW')

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
