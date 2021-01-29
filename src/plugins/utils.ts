import { VueConstructor } from 'vue'
import Utils from '../utils'

const utils = (Vue: VueConstructor): void => {
  Vue.prototype.$utils = new Utils()
}

export default utils
