<template>
  <v-app>
    <!-- ip&app list -->
    <Table v-if="init === 1" />
    <!-- init install -->
    <Yum v-else-if="init === 0" />
    <!-- 默认显示loading图 -->
    <div v-else-if="init === -1">默认显示loading图</div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Yum from './Status/Yum/Yum.vue'
import Table from './Status/Table/Table.vue'
import { statusStoreModule } from '@/store/modules/status'

@Component({
  components: {
    Yum,
    Table
  }
})
export default class Home extends Vue {
  get init() {
    return statusStoreModule.init
  }
  get level() {
    return statusStoreModule.level
  }

  created() {
    statusStoreModule.getInit()
    statusStoreModule.getLevel()
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
