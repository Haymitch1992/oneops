// 非容器化部署 -------------//
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

// 容器化部署 CMD-------------//
// 任务列表
export const POST_TASK_LIST = '/api/task/list'
// 添加任务
export const POST_TASK_ADD = '/api/task/save'
// 参数校验
export const POST_TASK_CHECK = '/api/task/isRepeat'
// 执行
export const POST_TASK_RUN = '/api/task/execute'
// 更新
export const POST_TASK_UPDATE = '/api/task/update'

// 参数列表
export const POST_PARAM_LIST = '/api/param/list'
// 校验参数
export const POST_PARAM_CHECK = '/api/param/isRepeat'
// 添加参数
export const POST_PARAM_SAVE = '/api/param/save'

// 版本列表
export const POST_VERSIONS_LIST = '/api/version/list'
// 校验版本
export const POST_VERSIONS_CHECK = '/api/version/isRepeat'
// 添加版本
export const POST_VERSIONS_SAVE = '/api/version/save'
