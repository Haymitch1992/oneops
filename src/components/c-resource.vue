<template>
  <v-row no-gutters class="resourcePlan py-2">
    <!-- 网卡信息 -->
    <v-col cols="12" class="d-flex">
      <label class="label mr-2">
        <div><span class="require-span">*</span>网卡信息</div>
      </label>
      <v-text-field
        v-model="formProvide.network"
        outlined
        dense
        clearable
        full-width
        height="34"
        label="网卡信息"
        :rules="[...validator.noEmpty('网卡信息')]"
        class="ml-4 flex-grow-0"
        style="max-width:168px"
      ></v-text-field>
      <v-spacer />
    </v-col>
    <!-- 本机信息 -->
    <!-- 资源规划 -->
    <v-col v-for="(item, index) in formProvide['items']" :key="item.id" cols="12" class="d-flex">
      <!-- label -->
      <label class="label mr-2">
        <div v-if="index === 0"><span class="require-span">*</span>本机信息</div>
        <div v-else-if="index === 1"><span class="require-span">*</span>资源规划</div>
      </label>
      <!-- input -->
      <v-text-field
        v-model="item.ip"
        outlined
        dense
        clearable
        height="34"
        :label="index === 0 ? '本机IP' : '服务器IP'"
        @change="testIp(item.ip)"
        :rules="[...validator['noEmpty'](index === 0 ? '本机IP' : '服务器IP'), ...validator['realIP'](), ...noRepeat]"
        class="ml-4"
      ></v-text-field>

      <v-text-field
        v-model="item.hostname"
        outlined
        dense
        clearable
        height="34"
        :label="'服务器域名'"
        :rules="[...validator.noEmpty('服务器域名')]"
        class="ml-4"
      ></v-text-field>
      <v-text-field
        v-model="item.user"
        outlined
        dense
        clearable
        height="34"
        label="服务器用户名"
        :rules="[...validator.noEmpty('服务器用户名')]"
        class="ml-4"
      ></v-text-field>
      <v-text-field
        v-model="item.password"
        :append-icon="item.showPass ? 'mdi-eye' : 'mdi-eye-off'"
        :type="item.showPass ? 'text' : 'password'"
        @click:append="handleShowPass(index)"
        outlined
        dense
        height="34"
        label="服务器密码"
        :rules="[...validator.noEmpty('服务器密码')]"
        class="ml-4"
      ></v-text-field>
      <v-text-field
        v-model="item.extra"
        outlined
        dense
        height="34"
        clearable
        label="描述说明"
        class="ml-4 mr-2"
      ></v-text-field>
      <!-- label-end -->
      <div class="btn-group d-flex justify-space-around mr-6">
        <v-btn
          v-if="index !== 0 && index !== 1 && index === formProvide['items'].length - 1"
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
          v-if="index !== 0 && index !== 1 && formProvide['items'].length > 3"
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
import Validator from '@/plugins/validator.ts'

@Component
@Validator(['noEmpty', 'realIP'])
export default class CResource extends Vue {
  @Inject() private readonly formProvide!: { network: string; items: Array<resourcePlanItemsType> }

  private noRepeat: Array<string> = []
  private get ipList() {
    return this.formProvide['items'].map(item => {
      return item.ip
    })
  }

  plus(n?: number) {
    n = n ? n : 1
    for (let i = 0; i < n; i++) {
      this.formProvide['items'].push({
        ip: '',
        hostname: '',
        user: '',
        password: '',
        showPass: false,
        extra: ''
      })
    }
  }

  minus(index: number) {
    this.formProvide['items'].splice(index, 1)
  }
  handleShowPass(index: number) {
    this.formProvide['items'][index].showPass = !this.formProvide['items'][index].showPass
  }

  // ip不能重复
  testIp(ip: string) {
    let n = 0
    //去重
    this.ipList.forEach(item => {
      if (item === ip) {
        n++
      }
    })
    if (n > 1) {
      this.noRepeat = ['IP不能重复']
    } else {
      this.noRepeat = []
    }
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
