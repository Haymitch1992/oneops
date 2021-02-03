// VUE_APP_BASE_API = 'http://192.168.58.120:8080'
// 3.0
// VUE_APP_BASE_API = 'http://172.51.216.106:49090'
// ali
// VUE_APP_BASE_API = 'http://112.126.65.241:9002'
// 测试服
// VUE_APP_BASE_API = 'http://8.131.231.56:49090'
// 106
// VUE_APP_BASE_API = 'http://172.51.216.106:9002'

// 非容器化BASE_API
export const VUE_APP_BASE_API = 'http://localhost:3000'

export const PROJECT_TITLE = '交控科技天枢平台统一运维平台'

export const PROJECT_BASE_COLOR = '#001529'

export const ROUTER_LIST = [
  {
    url: '/cmdTask',
    name: '容器化部署',
    childrenList: [
      {
        url: '/cmdTask/taskView',
        name: '部署任务列表'
      },
      {
        url: '/cmdTask/paramsTemplate',
        name: 'K8S参数模板'
      },
      {
        url: '/cmdTask/version',
        name: '版本号'
      },
      {
        url: '/cmdTask/webSSH',
        name: 'WebSSH终端'
      },
      {
        url: '/cmdTask/harbor',
        name: '镜像仓库'
      },
      {
        url: '/cmdTask/clusterManage',
        name: '集群管理'
      }
    ]
  },
  {
    url: '/shell',
    name: '非容器化部署',
    childrenList: [
      {
        url: '/shell/installApp',
        name: '安装应用'
      }
    ]
  }
]
