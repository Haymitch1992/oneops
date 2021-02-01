import { ValidatorType } from '@/type/validator.type'

const IP_REGEXP = /^(\d{1}|[1-9]{1}\d{1}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1}|[1-9]{1}\d{1}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1}|[1-9]{1}\d{1}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1}|[1-9]{1}\d{1}|1\d\d|2[0-4]\d|25[0-5])$/

class ShellValidator {
  public readonly realIP = (): ValidatorType => {
    return [(v: string) => IP_REGEXP.test(v) || '请输入正确的IP地址']
  }
}
export default ShellValidator
