<template>
  <div class="centerRight">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-vector" />
        </span>
        <div class="d-flex">
          <span class="text mx-2">主题党日</span>
        </div>
      </div>
      <div class="d-flex mt-1 jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" ref="scrollBoard"/>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const config = reactive({
      header: ['党支部', '开展次数'],
      data: [
        ['两江人工智能学院','25'],
        ['两江人工智能学院','15'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25'],
        ['两江人工智能学院','25']

      ],
      rowNum: 7, //表格行数
      headerHeight: 35,
      headerBGC: '#0f1325', //表头
      oddRowBGC: '#0f1325', //奇数行
      evenRowBGC: '#171c33', //偶数行
      index: true,
      columnWidth: [80],
      align: ['center']
    })
    return { config }
  }
})
</script>

<style lang="scss" scoped>
$box-height: 500px;
$box-width: 430px;
.centerRight {
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
    .dv-scr-board {
      height: 400px;
      width: 400px;
    }
  }
}
</style>
