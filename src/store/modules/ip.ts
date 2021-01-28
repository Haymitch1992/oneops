import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

@Module({
  name: 'ip',
  namespaced: true,
  dynamic: true,
  store
})
export default class IP extends VuexModule {
  thisIp = ''
  ipList = [] as Array<string>

  @Mutation
  SET_THISIP(str: string) {
    this.thisIp = str
  }
  @Mutation
  SET_IPLIST(arr: Array<string>) {
    this.ipList = [...arr]
  }

  @Action
  async setThisIp(str: string) {
    this.context.commit('SET_THISIP', str)
  }
  @Action
  async setIpList(arr: Array<string>) {
    this.context.commit('SET_IPLIST', arr)
  }
}

export const ipStoreModule = getModule(IP)
