<template>
  <div class="bottomRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-vector" />
        </span>
        <div class="d-flex">
          <span class="text mx-2">年龄分布</span>
        </div>
      </div>
      <div class="d-flex mt-1 jc-center body-box">
        <div id="bottomRight1Mycharts" ref="bottom2MyRef" class="chart-box" />
      </div>
    </div>
  </div>

</template>

<script lang="js">
import { defineComponent, getCurrentInstance,reactive, ref, onMounted } from 'vue';
export default defineComponent({
  props:{
    bRight1:{
      type:Object,
      required:true
    }
  },
  name: "index",
  setup(props){
    const { proxy } = getCurrentInstance();
    const bottom2MyRef = ref(null);
    // const data = reactive({
    //   data:[200, 300, 300, 900]
    // })
    const initT = () => {
      const myChart = proxy.echarts.init(document.getElementById('bottomRight1Mycharts'));
      console.log(myChart);
      myChart.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
              axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        // 修改图表大小
        grid: {
          top: "10%",
              right: "0%",
              bottom: "4%",
              left: "0%",
              containLabel: true,
        },
        // 修改x轴的信息
        xAxis: [
          {
            type: "category",
            data: [
              "25岁以下",
              "25~45岁",
              "46~65岁",
              "65岁以上",
            ],
            axisTick: {
              alignWithLabel: true,
            },
            // 设置x轴标签文字样式
            // x轴的文字颜色和大小
            axisLabel: {
              color: "rgba(255,255,255,0.8)",
              fontSize: "12",
              rotate: 50,
            },
            //  x轴样式不显示
            // axisLine: {
            //   show: true,
            //   // 如果想要设置单独的线条样式
            //   lineStyle: {
            //     color: "rgba(255,255,255,.1)",
            //     width: 1,
            //     type: "solid"}
            // },
          },
        ],
            yAxis: [
        {
          type: "value",
          // y 轴文字标签样式
          axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12",
          },
          splitLine: {
            show: false
          },
          // y轴线条样式
          axisLine:{
            show:false
          }
        },
      ],
        series: [
        {
          name: "年龄分布",
          type: "bar",
          // 修改柱子宽度
          barWidth: "25%",
          data: props.bRight1.data,
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 10,
          },
        },
      ]
      });
    };
    onMounted(() => {
      initT();
    });
    return {
      bottom2MyRef
    };
  }
})
</script>

<style scoped lang="scss">
$box-height: 365px;
$box-width: 470px;
.bottomRight1 {
  padding:16px 16px 16px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
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
      height: 300px;
      width: 470px;
    }
  }
}
</style>