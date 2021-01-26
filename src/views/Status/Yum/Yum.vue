<template>
  <div id="Yum">
    <h1>初始化安装yum</h1>
    <v-stepper non-linear v-model="e1">
      <v-stepper-header>
        <v-stepper-step editable step="1">
          输入ssh用户名密码
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2">
          输入ip
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="3">
          选择安装yum源的ip
        </v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step editable step="4">
          正在安装
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card flat>
            <v-card-text class="pb-0 mt-4">
              <v-form>
                <v-row no-gutters>
                  <v-col cols="12" class="d-flex justify-space-around">
                    <label class="label mr-2">
                      <div><span class="require-span">*</span>用户名</div>
                    </label>
                    <v-text-field outlined dense clearable height="34" class="ml-4 mr-11"></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex justify-space-around">
                    <label class="label mr-2">
                      <div><span class="require-span">*</span>密码</div>
                    </label>
                    <v-text-field
                      type="password"
                      outlined
                      dense
                      clearable
                      height="34"
                      class="ml-4 mr-11"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="e1 = 2">
                下一步
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card flat>
            <v-card-text class="pb-0 mt-4">
              <v-form>
                <v-row no-gutters>
                  <v-col cols="12" class="d-flex justify-space-around">
                    <label class="label mr-2">
                      <div><span class="require-span">*</span>ip</div>
                    </label>
                    <v-text-field outlined dense clearable height="34" class="ml-4 mr-11"></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex justify-space-around">
                    <label class="label mr-2">
                      <div><span class="require-span">*</span>ip</div>
                    </label>
                    <v-text-field outlined dense clearable height="34" class="ml-4 mr-11"></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex justify-space-around">
                    <label class="label mr-2">
                      <div><span class="require-span">*</span>ip</div>
                    </label>
                    <v-text-field outlined dense clearable height="34" class="ml-4 mr-11"></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="e1 = 3">
                下一步
              </v-btn>
              <v-btn text @click="e1 = 1">
                上一步
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card flat>
            <v-card-text class="pb-0 mt-4">
              <v-form>
                <v-row no-gutters>
                  <v-col cols="12" class="d-flex justify-space-around">
                    <v-radio-group v-model="radioGroupYum" row>
                      <v-radio v-for="n in 4" :key="n" :label="`172.255.255.*`" :value="n"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="startInstall">
                开始安装
              </v-btn>
              <v-btn text @click="e1 = 2">
                上一步
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="4">
          <v-card flat>
            <v-card-text class="my-6">
              <Progress v-if="progressShow" :success="success" />
            </v-card-text>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Progress from '@/components/h-progress.vue'
export default Vue.extend({
  name: 'Yum',
  components: {
    Progress
  },
  data: () => {
    return {
      e1: 1,
      radioGroupYum: 1,
      progressShow: false,
      success: false,
      timer: 0
    }
  },
  methods: {
    startInstall() {
      clearTimeout(this.timer)
      this.e1 = 4
      this.progressShow = true
      // this.timer = setTimeout(() => {
      //   this.success = true
      // }, 45000)
    }
  }
})
</script>
<style scoped>
#Yum {
  width: 900px;
  margin: 200px auto 0 auto;
  text-align: center;
}
</style>
