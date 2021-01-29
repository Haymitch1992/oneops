import Vue from 'vue'
import RequestData from '@/api'
import Utils from '@/utils'

declare module 'vue/types/vue' {
  interface Vue {
    $http: RequestData
    $utils: Utils
  }
}
