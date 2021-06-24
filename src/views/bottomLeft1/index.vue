<template>
  <div class="bottomLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-vector" />
        </span>
        <div class="d-flex">
          <span class="text mx-2">性别比列</span>
        </div>
      </div>
      <div class="d-flex mt-1 jc-center body-box">
        <div id="bottomLeft1Mycharts" ref="bottom1MyRef" class="chart-box" />
      </div>
    </div>
  </div>

</template>

<script lang="js">
import { defineComponent, getCurrentInstance, ref, onMounted } from 'vue';
export default defineComponent({
  props:{
    bLeft1:{
      type:Object,
      required:true
    }
  },
  name: "index",
  setup(props){
    const { proxy } = getCurrentInstance();
    const bottom1MyRef = ref(null);
    console.log(props.bLeft1)
    const initT = () => {
      const myChart = proxy.echarts.init(document.getElementById('bottomLeft1Mycharts'));
      console.log(myChart);
      myChart.setOption({
        title: {
          top:'2%',
          left:'2%',
          text: '',
          textStyle:{
            color:"#fff"
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          right:'5%',
          textStyle:{
            color:"#fff"
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: props.bLeft1.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    };
    onMounted(() => {
      initT();
    });
    return {
      bottom1MyRef
    };
  }
})
</script>

<style scoped lang="scss">
$box-height: 365px;
$box-width: 470px;
.bottomLeft1 {
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
      height: 360px;
      width: 470px;
    }
  }
}
</style>