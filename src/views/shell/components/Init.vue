<template>
  <div id="Yum">
    <!-- yum -->
    <v-stepper non-linear v-model="e1">
      <v-stepper-header>
        <v-stepper-step editable step="1">
          资源规划
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :editable="resourcePlan && progressShowYum" step="2">
          安装yum源
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :editable="resourcePlan && progressShowSsh" step="3">
          打通ssh
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :editable="resourcePlan && progressShowMysqlIp" step="4">
          选择安装MySQL的IP
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :editable="resourcePlan && progressShowMysql" step="5">
          安装MySQL
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content class="px-0" step="1">
          <v-card flat>
            <p class="text-suggest mb-0"><span class="require-span">*</span>将使用本机IP作为安装yum源以及应用的IP</p>
            <v-card-text class="pb-0 px-0 mt-4">
              <v-form v-model="resourcePlan">
                <CResource />
              </v-form>
            </v-card-text>
            <v-card-actions class="pt-0 mr-6">
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                :disabled="
                  !resourcePlan || progressShowYum || progressShowSsh || progressShowMysql || progressShowMysqlIp
                "
                @click="startInstallYum"
              >
                开始初始化安装
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card flat>
            <v-card-text class="my-6">
              <CProgress v-if="progressShowYum" :success="successYum" />
            </v-card-text>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card flat>
            <v-card-text class="my-6">
              <CProgress v-if="progressShowSsh" :success="successSsh" />
            </v-card-text>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="4">
          <v-card flat>
            <v-card-text class="pb-0">
              <v-form v-model="mysqlPlan">
                <CMysql />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary" :disabled="!mysqlPlan || progressShowMysql" @click="startInstallMysql">
                开始安装Mysql
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="5">
          <v-card flat>
            <v-card-text class="my-6">
              <CProgress v-if="progressShowMysql" :success="successMysql" @finished="finishInit" />
            </v-card-text>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

import CProgress from '@/components/c-progress.vue'
import CResource from '@/components/c-resource.vue'
import CMysql from '@/components/c-mysql.vue'

import { resourcePlanItemsType, resourcePlanParamsType } from '@/type/yum.type'
import { ipStoreModule } from '@/store/modules/ip'
// import { statusStoreModule } from '@/store/modules/status'

@Component({
  components: {
    CProgress,
    CResource,
    CMysql
  }
})
export default class Init extends Vue {
  @Provide('formProvide') resourcePlanProvide: { network: string; items: Array<resourcePlanItemsType> } = {
    network: '',
    items: [{ ip: '', hostname: '', user: '', password: '', showPass: false, extra: '' }]
  }

  e1 = 1
  progressShowYum = false
  progressShowSsh = false
  progressShowMysql = false
  progressShowMysqlIp = false

  successYum = false
  successSsh = false
  successMysql = false

  timer = 0
  resourcePlan = true
  mysqlPlan = true

  // 开始安装yum
  private async startInstallYum() {
    // req
    const arr: Array<string> = []
    this.resourcePlanProvide['items'].forEach((item, index) => {
      if (index === 0) {
        ipStoreModule.setThisIp(item.ip)
      } else {
        arr.push(item.ip)
      }
    })
    ipStoreModule.setIpList(arr)

    const params: Array<resourcePlanParamsType> = this.resourcePlanProvide['items'].map((item, index) => {
      return {
        master: index === 0,
        network: index === 0 ? this.resourcePlanProvide.network : '',
        ip: item.ip,
        hostname: item.hostname,
        user: item.user,
        password: item.password,
        extra: item.extra
      }
    })

    const { data } = await this.$http.httpPOST('POST_SETIP', params)
    console.log(data)

    // clearTimeout(this.timer)
    // this.e1 = 2
    // this.progressShowYum = true
    // this.timer = setTimeout(() => {
    //   this.successYum = true
    //   this.startInstallSsh()
    // }, 1000)
  }

  // 开始打通ssh
  startInstallSsh() {
    this.e1 = 3
    this.progressShowYum = false
    this.progressShowSsh = true

    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.successSsh = true
      this.progressShowSsh = false
      this.e1 = 4
      this.progressShowMysqlIp = true
    }, 3000)
  }

  // mysql开始安装
  startInstallMysql() {
    this.e1 = 5
    this.progressShowMysql = true

    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.successMysql = true
    }, 3000)
  }

  // finish init
  finishInit() {
    // 获取当前状态
    // statusStoreModule.setInit()
  }
}
</script>
<style scoped>
#Yum >>> .v-icon.v-icon {
  font-size: 16px;
}
.text-suggest {
  font-size: 15px;
  text-align: left;
  margin-left: 40px;
  color: #1976d2;
}
</style>
