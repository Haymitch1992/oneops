<template>
  <v-dialog v-model="dialog" max-width="700px" @click:outside="close">
    <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step step="3" complete>
          kafka
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4" complete>
          redis
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :rules="[() => false]" step="5">
          Others
          <small>安装失败</small>
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InstallProgress',
  data: () => {
    return {
      dialog: true
    }
  },
  model: {
    prop: 'checked',
    event: 'closeDialog'
  },
  props: {
    checked: {
      type: Boolean
    }
  },
  methods: {
    close() {
      this.$emit('closeDialog')
    }
  }
})
</script>
