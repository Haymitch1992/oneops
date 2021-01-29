import RequestData from './index'
import { headerObj } from '../type/http-request.type'

class Init {
  public httpRequestInit(headers?: Array<headerObj>): RequestData {
    return new RequestData(headers || [])
  }
}
export default Init
