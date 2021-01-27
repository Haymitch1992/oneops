import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $request: any // 全局方法
  }
}
