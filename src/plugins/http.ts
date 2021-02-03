import { VueConstructor } from 'vue'
import HttpInit from '../api/httpDecoratorInit'

// 非容器化部署 http请求
const http = {
  install: (Vue: VueConstructor) => {
    Vue.prototype.$http = new HttpInit().httpRequestInit()
  }
}

export default http
