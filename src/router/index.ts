import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/views/layout/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/cmdtask'
  },
  {
    path: '/shell',
    name: '非容器化部署',
    redirect: '/shell/init',
    component: Layout,
    meta: {
      title: '非容器化部署',
      icon: 'mdi-shield-lock'
    },
    children: [
      {
        path: 'installApp',
        name: 'installApp',
        meta: {
          title: 'installApp'
        },
        component: () => import(/* webpackChunkName: "installApp" */ '../views/shell/installApp.vue')
      }
    ]
  },
  {
    path: '/cmdTask',
    redirect: '/cmdTask/taskView',
    name: '容器化部署',
    component: Layout,
    meta: {
      title: '容器化部署',
      icon: 'mdi-folder-cog-outline'
    },
    children: [
      {
        path: 'taskView',
        name: '部署任务列表',
        meta: {
          title: '部署任务列表'
        },
        component: () => import(/* webpackChunkName: "taskView" */ '../views/cmdTask/taskView.vue')
      },
      {
        path: 'paramsTemplate',
        name: 'K8S参数模板',
        meta: {
          title: 'K8S参数模板'
        },
        component: () => import(/* webpackChunkName: "paramsTemplate" */ '../views/cmdTask/paramsTemplate.vue')
      },
      {
        path: 'version',
        name: '版本号',
        meta: {
          title: '版本号'
        },
        component: () => import(/* webpackChunkName: "version" */ '../views/cmdTask/version.vue')
      },
      {
        path: 'webSSH',
        name: 'WebSSH终端',
        meta: {
          title: 'WebSSH终端'
        },
        component: () => import(/* webpackChunkName: "webSSH" */ '../views/cmdTask/webSSH.vue')
      },
      {
        path: 'clusterManage',
        name: '集群管理',
        meta: {
          title: '集群管理'
        },
        component: () => import(/* webpackChunkName: "clusterManage" */ '../views/cmdTask/clusterManage.vue')
      },
      {
        path: 'harbor',
        name: '镜像仓库',
        meta: {
          title: '镜像仓库'
        },
        component: () => import(/* webpackChunkName: "harbor" */ '../views/cmdTask/harbor.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
