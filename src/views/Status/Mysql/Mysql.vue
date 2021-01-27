<template>
  <div id="Mysql">
    <v-stepper non-linear v-model="e1">
      <v-stepper-header>
        <v-stepper-step editable step="1">
          选择安装Mysql的ip
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2">
          正在安装
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card flat>
            <v-card-text class="pb-0">
              <v-container fluid>
                <v-row>
                  <v-col cols="4">
                    <v-checkbox v-model="ex4" label="Yum" color="red" value="Yum" disabled hide-details></v-checkbox>
                    <v-checkbox v-model="ex4" label="ip2" color="red" value="ip2" hide-details></v-checkbox>
                  </v-col>
                  <v-col cols="4">
                    <v-checkbox v-model="ex4" label="ip3" color="indigo" value="ip3" hide-details></v-checkbox>
                    <v-checkbox v-model="ex4" label="ip4" color="indigo" value="ip4" hide-details></v-checkbox>
                  </v-col>
                  <v-col cols="4">
                    <v-checkbox v-model="ex4" label="ip5" color="orange" value="ip5" hide-details></v-checkbox>
                    <v-checkbox v-model="ex4" label="ip6" color="orange" value="ip6" hide-details></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="startInstall">
                开始安装
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="2">
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
  name: 'Mysql',
  components: {
    Progress
  },
  data: () => {
    return {
      e1: 1,
      progressShow: false,
      success: false,
      timer: 0,
      ex4: []
    }
  },
  methods: {
    startInstall() {
      clearTimeout(this.timer)
      this.e1 = 2
      this.progressShow = true
      // this.timer = setTimeout(() => {
      //   this.success = true
      // }, 45000)
      // 2ip
    }
  }
})
</script>
<style scoped>
#Mysql {
  width: 900px;
  margin: 200px auto 0 auto;
  text-align: center;
}
</style>
