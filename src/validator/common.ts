import { ValidatorType } from '@/type/validator.type'

export const noEmpty = (str: string): ValidatorType => {
  return [(v: string) => !!v || `${str}不能为空`]
}
