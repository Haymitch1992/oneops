<template>
  <v-app id="tct">
    <v-navigation-drawer width="220px" app color="rgb(0,21,41)" class="mt-14">
      <NavBar />
    </v-navigation-drawer>
    <v-app-bar app height="57" color="rgb(0,21,41)" width="100%" style="left: 0px">
      <TopBar />
    </v-app-bar>
    <v-main style="background: rgb(246, 248, 251)">
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
@Component({
  components: {
    NavBar,
    TopBar
  }
})
export default class Layout extends Vue {
  get items(): Array<{ text: string; disabled?: boolean; link?: boolean; to?: string }> {
    return [
      { text: this.$route.matched[0].meta.title, disabled: false },
      { text: this.$route.meta.title, disabled: true }
    ]
  }
}
</script>

<style>
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
