import {defineComponent, watch, ref} from 'vue'
// import {prop} from "vue-class-component";

const PropsType = {
  data: {
    type: Object,
    require: true
  }
} as const

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 配置项
    // 定义 ref
    const cha = ref()
    // console.log(props.data)
    let options = {}
    watch(
      () => props.data,
        (val)=>{
          options = {
            title: {
              top:'2%',
              left:'2%',
              text: '性别比列',
              textStyle:{
                color:"#fff"
              }
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'horizontal',
              right:'5%'
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '50%',
                data: val.data,
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }

        },
      {
        deep: true
      }
    )

    return () => {
      const height = "500px"
      const width = "1000px"

      return <div>
        <echart ref={cha} options={options} height={height} width={width} />
      </div>
    }
  }
})

