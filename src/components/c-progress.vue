<template>
  <v-progress-linear :value="knowledge" color="primary" height="17">
    <strong>{{ Math.ceil(knowledge) }}%</strong>
  </v-progress-linear>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class CProgress extends Vue {
  @Prop({ default: 90 }) errortime!: number
  @Prop({ default: 2 }) threshold!: number
  @Prop({ default: false }) success!: boolean

  knowledge = 0
  timer = 0
  n = 0

  mounted() {
    this.timer = setInterval(() => {
      // 轮询结果判断
      if (!this.success) {
        this.n = this.n + 0.5
        //
        if (this.knowledge < 60) {
          this.knowledge = this.n * this.threshold
        } else if (this.knowledge >= 60 && this.knowledge < 80) {
          this.knowledge = (this.n - 30) * (this.threshold / 5) + 60
        } else if (this.knowledge >= 80 && this.knowledge < 99) {
          this.knowledge = (this.n - 80) * (this.threshold / 8) + 80
        } else if (this.knowledge >= 99) {
          this.knowledge = 99
        }
      } else {
        this.knowledge = 100
        clearInterval(this.timer)
        // alert('安装成功')
        this.$utils.alertUtil.open('安装成功', true, 'success')
        this.$emit('finished')
      }
      // 超过时间范围 errortime，认为安装失败
      if (this.n > this.errortime) {
        clearInterval(this.timer)
        // alert('安装失败')
        this.$utils.alertUtil.open('安装失败', true, 'error')
      }
    }, 500)
  }
  beforeDestroy() {
    // 销毁计时器
    clearInterval(this.timer)
  }
}
</script>
