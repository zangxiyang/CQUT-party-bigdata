<template>
  <div>
    <echart :options="options" height="220px" width="260px" />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, reactive } from 'vue'

const PropsType = {
  cdata: {
    type: Object,
    default: () => ({
      xData: [],
      seriesData: []
    })
  }
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {
    // 配置项
    let options = reactive({})
    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          color: [
            '#37a2da',
            '#32c5e9',
            '#9fe6b8',
            '#ffdb5c',
            '#ff9f7f',
            '#fb7293',
            '#e7bcf3',
            '#8378ea'
          ],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          toolbox: {
            show: true
          },
          calculable: true,
          legend: {
            orient: 'horizontal',
            icon: 'circle',
            bottom: 0,
            x: 'center',
            data: val.xData,
            textStyle: {
              color: '#fff'
            }
          },
          series: [
            {
              name: '通过率统计',
              type: 'pie',
              radius: [10, 60],
              roseType: 'area',
              center: ['50%', '40%'],
              data: val.seriesData
            }
          ]
        }
      },
      {
        immediate: true,
        deep: true
      }
    )
    return { options }
  }
})
</script>
