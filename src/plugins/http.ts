import { VueConstructor } from 'vue'
import HttpInit from '../api/httpDecoratorInit'

const http = {
  install: (Vue: VueConstructor) => {
    Vue.prototype.$http = new HttpInit().httpRequestInit()
  }
}

export default http
