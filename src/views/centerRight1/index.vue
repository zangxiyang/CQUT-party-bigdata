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
import {defineComponent, inject, reactive} from 'vue'
import axios from "axios";
import {bigScreenPartyUrl} from "@/utils/apiBaseUrl"
import {ElMessage} from "element-plus";
export default defineComponent({
  async setup() {
    const config = reactive({
      header: ['主题党日'],
      data: [],
      rowNum: 7, //表格行数
      headerHeight: 35,
      headerBGC: '#0f1325', //表头
      oddRowBGC: '#0f1325', //奇数行
      evenRowBGC: '#171c33', //偶数行
      index: true,
      columnWidth: [80],
      align: ['center']
    })
    const id = inject('id')
    let arr =[]
    const res = await axios.get(`${bigScreenPartyUrl}/${id}`)
    if (res.status===200 && res.data.code===0){
      res.data.data.zyHdList.map((item)=>{
        arr.push([item.name])
      })
      config.data=arr
      // config.data=[["两江人工智能学院"],["两江人工智能学院"],["两江人工智能学院"],["两江人工智能学院"],["两江人工智能学院"]]
    }else {
      ElMessage.error("加载错了，请联系管理员")
    }

    return { config }
  }
})
</script>

<style lang="scss" scoped>
$box-height: 500px;
$box-width: 420px;
.centerRight {
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
    .dv-scr-board {
      height: 450px;
      width: 395px;
    }
  }
}
</style>
