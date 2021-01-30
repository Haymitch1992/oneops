<template>
  <div id="topbar">
    <v-row align="center" no-gutters>
      <v-col cols="12" align-self="center">
        <span class="titleShadow">{{ PROJECT_TITLE }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PROJECT_TITLE } from '@/config'

@Component
export default class TopBar extends Vue {
  private PROJECT_TITLE = PROJECT_TITLE
}
</script>

<style scoped>
#topbar {
  width: 100%;
}
.titleShadow {
  cursor: pointer;
  color: #fff;
  font-size: 22px;
  font-weight: normal;
  letter-spacing: 4px;
  margin-left: 0px;
}
</style>
