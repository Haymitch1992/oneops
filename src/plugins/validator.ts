import { VueConstructor } from 'vue'
import Validator from '../validator'

const FValidator = (v: Array<string>) => {
  return (Vue: VueConstructor): void => {
    Vue.prototype.validator = new Validator(v).getValidators()
  }
}

export default FValidator
