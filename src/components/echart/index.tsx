import { defineComponent, onMounted, ref, watch, onBeforeUnmount } from 'vue'
import '@/common/map/fujian'
import theme from '@/common/map/theme' // 引入默认主题
import * as echarts from 'echarts'

// 定义类型
const PropsType = {
  id: String,
  className: {
    type: String,
    default: 'chart'
  },
  width: {
    type: String,
    require: true
  },
  height: {
    type: String,
    require: true
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
    const chart = ref<any>()

    // 初始化echart
    const initChart = () => {
      chart.value.setOption(props.options, true)
    }

    // 生命周期
    onMounted(() => {
      // 定义实例
      echarts.registerTheme('myTheme', theme) // 覆盖默认主题
      chart.value = echarts.init(chartRef.value, 'myTheme')
      initChart()
    })

    onBeforeUnmount(() => {
      chart.value.dispose()
      chart.value = null
    })

    // 监听改变
    watch(
      () => props.options,
      val => {
        val && initChart()
      },
      {
        deep: true
      }
    )

    return () => {
      const { id, className, height, width } = props
      return <div
        ref={chartRef}
        id={id as string}
        class={className as string}
        style={{
          'height': height as string,
          'width': width as string
        }}
      />
    }
  }
})