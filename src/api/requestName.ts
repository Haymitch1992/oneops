// 非容器化部署 init
export const GET_STATUS = '/deployment/status'
export const GET_TESTIP = '/deployment/testIp'
export const POST_SETIP = '/deployment/setIp'
export const GET_INIT_EXECUTE = '/init/execute'

type REQUEST_NAME_TYPE = {
  [key: string]: string
}

const REQUEST_NAME: REQUEST_NAME_TYPE = {
  GET_STATUS,
  GET_TESTIP,
  POST_SETIP,
  GET_INIT_EXECUTE
}

export default REQUEST_NAME
