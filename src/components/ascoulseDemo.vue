<script setup>
import PieDemo from './pieDemo.vue'
import PieDemo2 from './pieDemo2.vue'
import PieDemo3 from './pieDemo3.vue'
import { ref, onMounted } from 'vue'
const lie1 = ref()
const lie2 = ref()
const lie3 = ref()

onMounted(() => {
  // 窗口变化重新渲染
  window.onresize = function () {
    setTimeout(() => {
      lie1.value.chart.resize() // 重新渲染echarts的方法
      lie2.value.chart.resize() // 重新渲染echarts的方法
      lie3.value.chart.resize() // 重新渲染echarts的方法
    }, 500)
  }
})
</script>

<template>
  <div class="container">
    <a-carousel autoplay>
      <PieDemo ref="lie1" />
      <pieDemo2 ref="lie2" />
      <pieDemo3 ref="lie3" />
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
    </a-carousel>
  </div>
</template>

<style scoped>
.container {
  width: 80vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 460px;
  line-height: 460px;
  background: #364d79;
  overflow: hidden;
  padding: 0 10vw;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
