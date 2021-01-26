<template>
  <v-dialog v-model="dialog" max-width="700px" @click:outside="close">
    <v-stepper non-linear v-model="e1">
      <v-stepper-header>
        <v-stepper-step editable step="1">
          可安装应用
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step editable step="2">
          kafka
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step editable step="3">
          redis
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card flat>
            <v-card-text class="pb-0 mt-4">
              <v-container fluid>
                <v-row>
                  <v-col cols="4">
                    <v-checkbox v-model="ex4" label="redis" color="red" value="redis" hide-details></v-checkbox>
                    <v-checkbox v-model="ex4" label="kafka" color="red" value="kafka" hide-details></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
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
                    <v-text-field
                      :messages="['已安装应用：1, 2, 3']"
                      outlined
                      dense
                      clearable
                      height="34"
                      class="ml-4 mr-11"
                    ></v-text-field>
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
                    <label class="label mr-2">
                      <div><span class="require-span">*</span>ip</div>
                    </label>
                    <v-text-field
                      :messages="['已安装应用：1, 2, 3']"
                      outlined
                      dense
                      clearable
                      height="34"
                      class="ml-4 mr-11"
                    ></v-text-field>
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
              <v-btn text color="primary" @click="startInstall">
                开始安装
              </v-btn>
              <v-btn text @click="e1 = 2">
                上一步
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InstallApp',
  model: {
    prop: 'checked',
    event: 'closeDialog'
  },
  props: {
    checked: {
      type: Boolean
    }
  },
  data: () => {
    return {
      e1: 1,
      radioGroupYum: 1,
      progressShow: false,
      success: false,
      timer: 0,
      ex4: [],
      dialog: true
    }
  },
  methods: {
    close() {
      this.$emit('closeDialog')
    },
    startInstall() {
      this.$emit('closeDialog')
      this.$emit('start-install')
    }
  }
})
</script>
