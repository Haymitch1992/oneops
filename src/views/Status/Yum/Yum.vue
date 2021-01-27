<template>
  <div>
    <Skeleton />
    <!-- <h1 id="YumTitle">初始化安装yum</h1> -->
    <v-stepper id="Yum" non-linear v-model="e1">
      <v-stepper-header>
        <v-stepper-step editable step="1">
          资源规划
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step editable step="2">
          选择安装yum源的IP
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step editable step="3">
          安装yum
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step editable step="4">
          打通ssh
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content class="px-0" step="1">
          <v-card flat>
            <p class="text-suggest"><span class="require-span">*</span>建议使用本机IP作为安装yum以及应用的IP</p>
            <v-card-text class="pb-0 px-0 mt-4">
              <v-form v-model="resourcePlan">
                <Resource />
              </v-form>
            </v-card-text>
            <v-card-actions class="pt-0 mr-6">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="e1 = 2">
                下一步
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card flat>
            <v-card-text v-if="resourcePlanItems[0].ip" class="pb-0 mt-4">
              <v-form>
                <v-row no-gutters>
                  <v-col cols="12" class="d-flex justify-space-around">
                    <v-radio-group v-model="radioGroupYum" row>
                      <v-radio
                        v-for="(item, index) in resourcePlanItems"
                        :key="item.id"
                        :label="item.ip + (index === 0 ? `（本机IP）` : '')"
                        :value="index"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions class="pt-0 mr-2">
              <v-spacer></v-spacer>
              <v-btn text color="primary" :disabled="!resourcePlan" @click="startInstall">
                开始安装yum
              </v-btn>
              <v-btn text @click="e1 = 1">
                上一步
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card flat>
            <v-card-text class="my-6">
              <Progress v-if="progressShowYum" :success="success" />
            </v-card-text>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="4">
          <v-card flat>
            <v-card-text class="my-6">
              <Progress v-if="progressShowSsh" :success="success" />
            </v-card-text>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import Progress from '@/components/h-progress.vue'

import Resource from './components/Resource.vue'
import Skeleton from './components/Skeleton.vue'

import { resourcePlanItemsType } from '@/type/yum.type'

@Component({
  components: {
    Progress,
    Resource,
    Skeleton
  }
})
export default class Yum extends Vue {
  @Provide('formProvide') resourcePlanItems: Array<resourcePlanItemsType> = [
    { ip: '', userName: '', passWord: '', showPass: false }
  ]

  e1 = 1
  radioGroupYum = 0
  progressShowYum = false
  progressShowSsh = false
  success = false
  timer = 0
  resourcePlan = true

  startInstall() {
    clearTimeout(this.timer)
    this.e1 = 3
    this.progressShowYum = true
    // this.timer = setTimeout(() => {
    //   this.success = true
    // }, 45000)
  }
}
</script>
<style scoped>
#YumTitle {
  width: 900px;
  margin: 150px auto 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
}
#Yum {
  width: 900px;
  margin: 200px auto 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
}
#Yum >>> .v-icon.v-icon {
  font-size: 16px;
}
.text-suggest {
  font-size: 15px;
}
</style>
