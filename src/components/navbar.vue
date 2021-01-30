<template>
  <v-list id="navbar" dark expand class="pt-0" dense>
    <v-list-group
      v-for="item in navMenu"
      :key="item.id"
      append-icon="mdi-menu-up"
      :prepend-icon="getIcon(item.name)"
      :value="true"
      no-action
      color="white"
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item class="ml-n3" v-for="subItem in item.childrenList" :key="subItem.id" link :to="subItem.url">
        <v-list-item-content class="ml-0">
          <v-list-item-title v-text="subItem.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ROUTER_LIST } from '@/config'

@Component
export default class NavBar extends Vue {
  private navMenu = ROUTER_LIST
  private getIcon(name: string) {
    const $r = this.$router.options.routes?.find(r => {
      return r.name === name
    })
    return $r?.meta.icon
  }
}
</script>
<style scoped>
#navbar >>> .v-icon.v-icon {
  font-size: 18px;
}
</style>
