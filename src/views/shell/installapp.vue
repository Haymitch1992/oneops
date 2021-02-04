<template>
  <div id="InstallApp">
    <!-- ip&app list -->
    <div v-if="init === 1">
      <Table />
    </div>
    <!-- init install -->
    <div v-else-if="init === 0">
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
    // 查询是否初始化
    const { data } = await this.$http.httpGET('GET_STATUS', {})
    statusStoreModule.setInit(data.init)
  }
}
</script>
