<template>
  <div id="Table">
    <v-btn class="primary mb-6" @click="InstallAppShow = true">安装应用</v-btn>
    <v-tabs v-model="tab">
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        未安装 已安装
      </v-tab-item>
    </v-tabs-items>
    <!-- <InstallApp v-if="InstallAppShow" v-model="InstallAppShow" @start-install="InstallProgressShow = true" />
    <InstallProgress v-if="InstallProgressShow" v-model="InstallProgressShow" /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import InstallApp from '@/components/c-installapp.vue'
// import InstallProgress from '@/components/c-installprogress.vue'

export default Vue.extend({
  name: 'Table',
  components: {
    // InstallApp,
    // InstallProgress
  },
  data: () => {
    return {
      tab: null,
      items: ['IP', '应用'],
      InstallAppShow: false,
      InstallProgressShow: false
    }
  }
})
</script>
<style scoped>
#Table {
  width: 1300px;
  margin: 50px auto 0 auto;
  height: 900px;
}
</style>
