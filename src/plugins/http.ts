import axios from 'axios'
import { VueConstructor } from 'vue/types/umd'

const http = {
  install: (Vue: VueConstructor): void => {
    Vue.prototype.$request = axios
  }
}

export default http
