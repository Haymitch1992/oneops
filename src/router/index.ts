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
    path: '/cmdtask',
    redirect: '/cmdtask/index',
    name: '容器化部署',
    component: Layout,
    meta: {
      title: '容器化部署',
      icon: 'mdi-folder-cog-outline'
    },
    children: [
      {
        path: 'index',
        name: 'cmdtask',
        meta: {
          title: 'cmdtask'
        },
        component: () => import(/* webpackChunkName: "cmdtask" */ '../views/cmdtask/index.vue')
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
