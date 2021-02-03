<template>
  <div id="InstallApp">
    <!-- ip&app list -->
    <div v-if="init === 1" class="table-component">
      <Table />
    </div>
    <!-- init install -->
    <div v-else-if="init === 0" class="yum-component">
      <CDialog v-if="dialogFlag" v-model="dialogFlag" :width="'1200'" :title="'初始化'">
        <Init />
      </CDialog>
    </div>
    <!-- 默认显示骨架屏 -->
    <CSkeleton v-if="init !== 1" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import CSkeleton from '@/components/c-skeleton.vue'
import CDialog from '@/components/c-dialog.vue'
import Init from './components/Init.vue'
import Table from './components/Table.vue'
import { statusStoreModule } from '@/store/modules/status'

@Component({
  components: {
    CSkeleton,
    CDialog,
    Init,
    Table
  }
})
export default class InstallApp extends Vue {
  private dialogFlag = true

  get init() {
    return statusStoreModule.init
  }
  get level() {
    return statusStoreModule.level
  }

  async created() {
    const { data } = await this.$http.httpGET('GET_STATUS', {})
    statusStoreModule.setInit(data.init)
    // const data = [
    //   {
    //     master: true,
    //     ip: '172.51.216.121',
    //     hostname: 'ffasd',
    //     user: '123',
    //     network: '123',
    //     password: '123'
    //   },
    //   {
    //     master: false,
    //     ip: '172.51.216.122',
    //     hostname: 'ffasd',
    //     user: '123',
    //     network: '',
    //     password: '123'
    //   },
    //   {
    //     master: false,
    //     ip: '172.51.216.123',
    //     hostname: 'ffasd',
    //     user: '123',
    //     network: '',
    //     password: '123'
    //   }
    // ]
    // axios({
    //   // url: 'http://192.168.58.120:8080/init/execute',
    //   url: 'http://192.168.58.120:8080/deployment/status',
    //   method: 'get'
    //   // data: data
    //   // params: {
    //   //   shellname: 'ssh'
    //   // }
    // }).then(res => {
    //   console.log(res)
    // })
  }
}
</script>
