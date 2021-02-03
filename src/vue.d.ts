import Vue from 'vue'
import RequestData from '@/api'
import Utils from '@/utils'
import { AxiosInstance } from 'axios'

declare module 'vue/types/vue' {
  interface Vue {
    $http: RequestData
    $axios: AxiosInstance
    $utils: Utils
    validator: any
  }
}
