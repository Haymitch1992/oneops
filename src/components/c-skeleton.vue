<template>
  <div id="skeleton">
    <!-- <h1 class="skeleton-title mt-12">{{ PROJECT_TITLE }}</h1> -->
    <v-row class="skeleton-container" no-gutters>
      <v-col cols="12">
        <v-skeleton-loader
          v-bind="attrs"
          class="d-flex justify-space-between"
          width="250px"
          type="button@3"
        ></v-skeleton-loader>
        <v-skeleton-loader
          v-for="item in 8"
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
#skeleton {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(33, 33, 33, 0.3);
}
.skeleton-title {
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 10px;
  text-align: center;
  color: #0c447b;
}
.skeleton-container {
  width: 1300px;
  margin: 100px auto 0 auto;
}
</style>
