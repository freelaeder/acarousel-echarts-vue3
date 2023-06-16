
<script setup>
import * as echarts from 'echarts'
import { onMounted,  ref } from 'vue'
// 定义 echarts 实例
const chart = ref(null)

// 定义数据
const data = [
  { name: '北京', value: 177 },
  { name: '上海', value: 42 },
  { name: '广州', value: 99 },
  { name: '深圳', value: 36 },
  { name: '香港', value: 33 }
]
// 在组件挂载后初始化 echarts 实例
onMounted(() => {
 
  try{
    setTimeout(() => {
    chart.value = echarts.init(document.getElementById('pie1'))

      let dome = document.getElementById('pie1')
      console.log(dome);
      chart.value.setOption({
      title: {
        text: '城市数据统计'
      },
      tooltip: {},
      xAxis: {
        data: data.map((item) => item.name)
      },
      yAxis: {},
      series: [
        {
          name: '城市数据',
          type: 'bar',
          data: data.map((item) => item.value)
        }
      ]
    })
    },200)
 
  }catch(e){
    console.error('Error: Initialize failed: invalid dom.')
  }
})
// 向父组件暴露
defineExpose({chart})

</script>
<template>
  <div id="pie1" style="width: 100%; height: 400px"></div>
</template>
<style scoped></style> 


