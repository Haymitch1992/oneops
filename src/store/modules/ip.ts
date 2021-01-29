import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

@Module({
  name: 'ip',
  namespaced: true,
  dynamic: true,
  store
})
export default class IP extends VuexModule {
  public thisIp = ''
  public ipList = [] as Array<string>

  @Mutation
  private SET_THISIP(str: string) {
    this.thisIp = str
  }
  @Mutation
  private SET_IPLIST(arr: Array<string>) {
    this.ipList = [...arr]
  }

  @Action
  public async setThisIp(str: string) {
    this.context.commit('SET_THISIP', str)
  }
  @Action
  public async setIpList(arr: Array<string>) {
    this.context.commit('SET_IPLIST', arr)
  }
}

export const ipStoreModule = getModule(IP)
