<template>
  <div class="bottomRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-vector" />
        </span>
        <div class="d-flex">
          <span class="text mx-2">党委成员学历</span>
        </div>
      </div>
      <div class="d-flex mt-1 jc-center body-box">
        <div id="bottomRight2Mycharts" ref="bottom3MyRef" class="chart-box" />
      </div>
    </div>
  </div>

</template>

<script lang="js">
import { defineComponent, getCurrentInstance,reactive, ref, onMounted } from 'vue';
export default defineComponent({
  name: "index",
  setup(){
    const { proxy } = getCurrentInstance();
    const bottom3MyRef = ref(null);
    const data = reactive({
      data:[
        { value: 50, name: "本科以下" },
        { value: 20, name: "本科及本科以上" },
      ]
    })
    const initT = () => {
      const myChart = proxy.echarts.init(document.getElementById('bottomRight2Mycharts'));
      console.log(myChart);
      myChart.setOption({
        legend: {
          orient: 'horizontal',
          right:'5%',
          textStyle:{
            color:"#fff"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} 人<br>({d}%)",
        },
        toolbox: {
          show: true
        },
        series: [
          {
            name: '学历',
            type: 'pie',
            radius: [50, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            labelLine: {
              show:false
            },
            label: { show: false },
            itemStyle: {
              borderRadius: 8
            },
            data: data.data,
          }
        ]
      });
    };
    onMounted(() => {
      initT();
    });
    return {
      bottom3MyRef
    };
  }
})
</script>

<style scoped lang="scss">
$box-height: 365px;
$box-width: 470px;
.bottomRight2 {
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