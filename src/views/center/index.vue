<template>
  <div class="center">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-vector" />
        </span>
        <div class="d-flex">
          <span class="text mx-2">三会一课</span>
        </div>
      </div>
      <div class="d-flex mt-1 jc-center body-box">
        <div id="centerMycharts" ref="centerMyRef" class="chart-box" />
      </div>
    </div>
  </div>

</template>

<script lang="js">
import { defineComponent, getCurrentInstance,reactive, ref, onMounted } from 'vue';
export default defineComponent({
  props:{
    data:{
      type:Object,
      required:true
    }
  },
  name: "index",
  setup(props){
    console.log(props.data)
    const { proxy } = getCurrentInstance();
    const centerMyRef = ref(null);
    // const data = reactive({
    //   list: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90],
    //   list1:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90],
    //   list2: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190]
    // })
    const initT = () => {
      const myChart = proxy.echarts.init(document.getElementById('centerMycharts'));
      // console.log(myChart);
      myChart.setOption({
        title: {
          top:'2%',
          left:'2%',
          text: '',
          textStyle:{
            color:"#fff"
          }
        },
        // 修改三条线的颜色
        color: ["#4267C1", "#ed3f35","#92329F"],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['党员大会', '支部委员会', '党课'],
          top:'5%',
          right: "5%", // 距离右边10%
          textStyle:{
            color:"#fff"
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
          }
        },
        xAxis: {
          type: 'category',
          splitLine: {
            show: false
          },
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine:{
            show:false
          }
        },
        series: [
          {
            name: '党员大会',
            type: 'line',
            smooth: true,
            stack: '总量',
            data:props.data.list
          },
          {
            name: '支部委员会',
            type: 'line',
            smooth: true,
            stack: '总量',
            data: props.data.list1
          },
          {
            name: '党课',
            type: 'line',
            smooth: true,
            stack: '总量',
            data:props.data.list2
          }
        ]
      });
    };
    onMounted(() => {
      initT();
    });
    return {
      centerMyRef
    };
  }
})
</script>

<style scoped lang="scss">
$box-height: 500px;
$box-width: 1050px;
.center {
  padding:16px 10px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
.bg-color-black {
  height: $box-height - 30px;
  border-radius: 10px;
}
.text {
  font-size: 20px;
  color: #c3cbde;
}
.body-box {
  border-radius: 10px;
  overflow: hidden;
  .chart-box{
    height: 450px;
    width: 1030px;
  }
}
}
</style>