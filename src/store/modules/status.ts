import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

@Module({
  name: 'status',
  namespaced: true,
  dynamic: true,
  store
})
export default class Status extends VuexModule {
  public init = -1 // 初始化是否完成 完成是1 未完成是0
  public level = -1 // 0 未初始化 1 IP 2 yum 3 ssh 4 mysql
  public status = -1 // 0 脚本开始执行 1 脚本执行失败 2 应用安装失败
  //
  @Mutation
  private SET_INIT(code: boolean) {
    code ? (this.init = 1) : (this.init = 0)
  }
  @Mutation
  private SET_LEVEL(code: number) {
    this.level = code
  }
  @Mutation
  private SET_STATUS(code: number) {
    this.status = code
  }

  @Action
  public async setInit(code: boolean) {
    this.context.commit('SET_INIT', code)
  }
  @Action
  public async setLevel(code: number) {
    this.context.commit('SET_LEVEL', code)
  }
  @Action
  public async setStatus(code: number) {
    this.context.commit('SET_STATUS', code)
  }
}

export const statusStoreModule = getModule(Status)
