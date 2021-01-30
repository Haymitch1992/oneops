import { VueConstructor } from 'vue'
import Utils from '../utils'

const utils = {
  install: (Vue: VueConstructor) => {
    Vue.prototype.$utils = new Utils()
  }
}

export default utils
