import { VueConstructor } from 'vue'
import HttpInit from '../api/httpDecoratorInit'

const http = (Vue: VueConstructor): void => {
  Vue.prototype.$http = new HttpInit().httpRequestInit()
}

export default http
