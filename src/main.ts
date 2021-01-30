import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import http from '@/plugins/http'
import utils from '@/plugins/utils'

import DevicePixelRatio from '@/utils/windowResize'

Vue.config.productionTip = false
Vue.use(http)
Vue.use(utils)

new DevicePixelRatio().init()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
