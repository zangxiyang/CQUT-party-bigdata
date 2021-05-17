<template>
  <div
    ref="chartRef"
    :id="id"
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import '@/common/map/fujian'
import theme from '@/common/map/theme' // 引入默认主题
import * as echarts from "echarts";

const PropsType = {
  id: String,
  className: {
    type: String,
    default: 'chart'
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '400px'
  },
  options: {
    type: Object,
    default: () => ({})
  }
} as const

export default defineComponent({
  name: 'Echarts',
  props: PropsType,
  setup(props) {
    const chartRef = ref<HTMLElement>()
    const chart = ref<any>();
    // 定义实例
    chart.value = echarts.init(chartRef.value, 'myTheme')
    
    // 生命周期
    onMounted(() => {
      echarts.registerTheme('myTheme', theme) // 覆盖默认主题
      initChart()
    })

    // 初始化echart
    const initChart = () => {
      chart.value.setOption(props.options, true)
    }
    return {chartRef}
  }
})
</script>