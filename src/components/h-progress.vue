<template>
  <v-progress-linear :value="knowledge" color="primary" height="15">
    <strong>{{ Math.ceil(knowledge) }}%</strong>
  </v-progress-linear>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Progress',
  props: {
    // 超时时间
    errortime: {
      type: Number,
      default: 90
    },
    // 临界值，进度条
    threshold: {
      type: Number,
      default: 3
    },
    // 轮询结果
    success: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      knowledge: 0,
      timer: 0,
      n: 0
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      // 轮询结果判断
      if (!this.success) {
        this.n = this.n + 0.5
        //
        if (this.knowledge < 90) {
          this.knowledge = this.n * this.threshold
        } else if (this.knowledge >= 80 && this.knowledge < 99) {
          this.knowledge = ((this.n - 30) / (this.n - 30 + 2)) * 10 + 90
        } else if (this.knowledge >= 99) {
          this.knowledge = 99
        }
      } else {
        this.knowledge = 100
        clearInterval(this.timer)
        alert('安装成功')
      }

      // 超过时间范围，认为安装失败
      if (this.n > this.errortime) {
        clearInterval(this.timer)
        alert('安装失败')
      }
    }, 500)
  }
})
</script>
