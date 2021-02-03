import { VueConstructor } from 'vue'
import axios from 'axios'

// 容器化部署http请求
const Axios = {
  install: (Vue: VueConstructor) => {
    Vue.prototype.$axios = axios
  }
}

export default Axios
