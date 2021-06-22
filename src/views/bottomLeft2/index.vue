<template>
  <div class="bottomLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-vector" />
        </span>
        <div class="d-flex">
          <span class="text mx-2">党龄分布</span>
        </div>
      </div>
      <div class="d-flex mt-1 jc-center body-box">
        <dv-capsule-chart :config="config" class="bl2" />
      </div>
    </div>
  </div>

</template>

<script lang="js">
import { defineComponent,reactive, } from 'vue';
export default defineComponent({
  name: "index",
  setup() {
    const config = reactive({
      data: [
        {
          name: '5年以下',
          value: 167
        },
        {
          name: '5-10年',
          value: 123
        },
        {
          name: '10-15年',
          value: 98
        },
        {
          name: '15-20年',
          value: 75
        },
        {
          name: '20年以上',
          value: 100
        },
      ],
      colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
      unit: '人',
      showValue: true,
      align: ['center']
    })
    return {config}
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
    .bl2{

      margin-top: 50px;
      width: 300px;
      height: 250px;
    }
  }
}
</style>