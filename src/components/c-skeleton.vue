<template>
  <div id="skeleton">
    <v-row class="skeleton-container" no-gutters>
      <v-col cols="12">
        <v-skeleton-loader
          v-bind="attrs"
          class="d-flex justify-space-between"
          width="170px"
          type="button@2"
        ></v-skeleton-loader>
        <v-skeleton-loader
          v-for="item in 7"
          :key="item"
          v-bind="attrs"
          height="35px"
          class="my-8"
          type="image"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { PROJECT_TITLE } from '@/config'
@Component
export default class CSkeleton extends Vue {
  attrs = {
    boilerplate: true,
    elevation: 0
  }
  PROJECT_TITLE = PROJECT_TITLE
}
</script>
<style scoped>
.skeleton-container {
  width: 95%;
  margin: 20px auto 0 auto;
}
</style>
