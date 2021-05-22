import { defineComponent, onMounted, ref, watch, onBeforeUnmount } from 'vue'
import '@/common/echart/map/fujian.js'
import theme from '@/common/echart/style/theme.js' // 引入默认主题
import * as echarts from 'echarts'

// 定义类型
const PropsType = {
  // 图表唯一 id
  id: String,
  // 图表类名
  className: {
    type: String,
    default: 'chart'
  },
  // 图表宽度
  width: {
    type: String,
    require: true
  },
  // 图表高度
  height: {
    type: String,
    require: true
  },
  // 图表数据项
  options: {
    type: Object,
    default: () => ({}),
    require: true
  },
  // 手动触发更新标识，建议从 0 开始
  updateFlag: {
    type: Number,
    default: 0,
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
      chart.value.setOption(props.options)
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

    // 手动触发图表渲染
    watch(() => props.updateFlag, () => {
      initChart()
    })

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