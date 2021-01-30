<template>
  <v-dialog v-model="closeDialog" :width="width" persistent>
    <v-card>
      <v-card-title>
        <span style="font-size: 18px">{{ title }}</span>
        <v-btn class="close-btn" icon @click="closeMethod">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pb-0 mt-4 pb-6">
        <v-container class="pb-1">
          <slot />
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { Component, Vue, Model, Prop } from 'vue-property-decorator'

@Component
export default class CDialog extends Vue {
  @Model('cdialog', { type: Boolean }) private checked!: boolean

  @Prop({ default: 'Dialog Title' }) title!: string
  @Prop({ default: '700' }) width!: string

  get closeDialog(): boolean {
    return this.checked
  }

  public closeMethod(): void {
    this.$emit('cdialog')
  }
}
</script>
<style scoped>
.close-btn {
  position: absolute;
  right: 14px;
  top: 14px;
}
</style>
