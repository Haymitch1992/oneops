<template>
  <div>{{ test }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  components: {},
  data: () => {
    return {
      test: '123'
    }
  }
})
</script>
