<template>
  <v-app>
    <!-- init install -->
    <Yum v-if="StatusCode === 0" />
    <!-- install mysql -->
    <Mysql v-else-if="StatusCode === 1" />
    <!-- ip&app list -->
    <Table v-else-if="StatusCode === 2" />
    <!-- 默认显示loading图 -->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Yum from './Status/Yum/Yum.vue'
import Mysql from './Status/Mysql/Mysql.vue'
import Table from './Status/Table/Table.vue'

import { VUE_APP_BASE_API } from '@/config'
export default Vue.extend({
  name: 'Home',
  components: {
    Yum,
    Mysql,
    Table
  },
  data: () => {
    return {
      StatusCode: -1
    }
  },
  created() {
    fetch(`${VUE_APP_BASE_API}/status`).then(async res => {
      if (res.ok) {
        const { code } = await res.json()
        this.StatusCode = code
      }
    })
  }
})
</script>
