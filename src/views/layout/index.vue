<template>
  <v-app id="tct">
    <v-navigation-drawer app :color="PROJECT_BASE_COLOR" class="mt-14" width="200px" height="100%">
      <NavBar />
    </v-navigation-drawer>
    <v-app-bar app height="57" :color="PROJECT_BASE_COLOR" width="100%" style="left: 0px">
      <TopBar />
    </v-app-bar>
    <v-main style="background: rgb(246, 248, 251); width: 100%; height: 100%">
      <v-container fluid class="main-container">
        <v-breadcrumbs :items="items"></v-breadcrumbs>
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavBar from '@/components/navbar.vue'
import TopBar from '@/components/topbar.vue'
import { PROJECT_BASE_COLOR } from '@/config'

@Component({
  components: {
    NavBar,
    TopBar
  }
})
export default class Layout extends Vue {
  private PROJECT_BASE_COLOR = PROJECT_BASE_COLOR
  get items(): Array<{ text: string; disabled?: boolean; link?: boolean; to?: string }> {
    return [
      { text: this.$route.matched[0].meta.title, disabled: false },
      { text: this.$route.meta.title, disabled: true }
    ]
  }
}
</script>

<style scoped>
#tct {
  width: 100%;
  height: 100%;
}
.main-container {
  height: 100%;
  width: 100%;
}
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
