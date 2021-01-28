<template>
  <v-row no-gutters class="resourcePlan py-2">
    <v-col v-for="(item, index) in formProvide" :key="item.id" cols="12" class="d-flex justify-space-around">
      <label class="label mr-2">
        <div v-if="index === 0"><span class="require-span">*</span>资源规划</div>
      </label>
      <v-text-field
        v-model="item.ip"
        outlined
        dense
        clearable
        height="34"
        :label="index === 0 ? '本机IP' : 'IP'"
        :rules="noEmpty(index === 0 ? '本机IP' : 'IP')"
        class="ml-4"
      ></v-text-field>
      <v-text-field
        v-model="item.netWorkCard"
        outlined
        dense
        clearable
        height="34"
        label="网卡信息"
        :rules="noEmpty('网卡信息')"
        class="ml-4"
      ></v-text-field>
      <v-text-field
        v-model="item.userName"
        outlined
        dense
        clearable
        height="34"
        label="用户名"
        :rules="noEmpty('用户名')"
        class="ml-4"
      ></v-text-field>
      <v-text-field
        v-model="item.passWord"
        :append-icon="item.showPass ? 'mdi-eye' : 'mdi-eye-off'"
        :type="item.showPass ? 'text' : 'password'"
        @click:append="handleShowPass(index)"
        outlined
        dense
        height="34"
        label="密码"
        :rules="noEmpty('密码')"
        class="ml-4 mr-2"
      ></v-text-field>

      <div class="btn-group d-flex justify-space-around mr-6">
        <v-btn
          v-if="index !== 0 && index !== 1 && index === formProvide.length - 1"
          fab
          dark
          max-width="24"
          max-height="24"
          color="primary"
          style="margin-top: 5px"
          @click="plus()"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          v-if="index !== 0 && index !== 1 && formProvide.length > 3"
          fab
          dark
          max-width="24"
          max-height="24"
          color="primary"
          style="margin-top: 5px"
          @click="minus(index)"
        >
          <v-icon dark>mdi-minus</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Inject, Component } from 'vue-property-decorator'
import { resourcePlanItemsType } from '@/type/yum.type'
import { noEmpty } from '@/validator/common'

@Component
export default class Resource extends Vue {
  @Inject() private readonly formProvide!: Array<resourcePlanItemsType>
  plus(n?: number) {
    n = n ? n : 1
    for (let i = 0; i < n; i++) {
      this.formProvide.push({ ip: '', userName: '', passWord: '', netWorkCard: '', showPass: false })
    }
  }
  noEmpty(str: string) {
    return noEmpty(str)
  }
  minus(index: number) {
    this.formProvide.splice(index, 1)
  }
  handleShowPass(index: number) {
    this.formProvide[index].showPass = !this.formProvide[index].showPass
  }
  created() {
    this.plus(2)
  }
}
</script>
<style scoped>
.resourcePlan {
  max-height: 420px;
  overflow-y: auto;
}

.btn-group {
  width: 80px;
}
</style>
