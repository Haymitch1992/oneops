<template>
  <div class="d-flex">
    <label class="label mr-2 d-inline-block">
      <div><span class="require-span">*</span>选择IP</div>
    </label>
    <div class="d-flex flex-row flex-wrap">
      <v-checkbox
        v-for="item in ipList"
        :key="item.id"
        v-model="ex4"
        :label="item"
        color="primary"
        :value="item"
        hide-details
        class="checkbox mr-12 mb-4"
      ></v-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import { noEmpty } from '@/validator/common'
import { ipStoreModule } from '@/store/modules/ip'

@Component
export default class Resource extends Vue {
  get ipList() {
    return ipStoreModule.ipList
  }
  ex4 = []
}
</script>
<style scoped>
.checkbox {
  display: inline-block !important;
  margin-top: 1px;
}
.checkbox-container {
  width: 700px;
}
</style>
