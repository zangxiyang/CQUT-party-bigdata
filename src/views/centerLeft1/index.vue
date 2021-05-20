<template>
  <div class="centreLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-tongji4" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">任务通过率</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <chart />
      </div>
      <!-- 4个主要的数据 -->
      <div class="bottom-data">
        <div class="item-box" v-for="(item, index) in numberData" :key="index">
          <div class="d-flex jc-end">
            <span class="coin">￥</span>
            <dv-digital-flop class="dv-digital-flop" :config="item.number" />
          </div>
          <p>
            <span> {{ item.text }} </span>
            <span class="colorYellow">(件)</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import Chart from './chart/index'
export default defineComponent({
  components: {
    Chart,
  },
  setup() {
    // 下层数据
    const numberData = reactive([
      {
        number: {
          number: [15],
          toFixed: 1,
          content: '{nt}'
        },
        text: '今日构建总量'
      },
      {
        number: {
          number: [144],
          toFixed: 1,
          content: '{nt}'
        },
        text: '总共完成数量'
      },
      {
        number: {
          number: [361],
          toFixed: 1,
          content: '{nt}'
        },
        text: '正在编译数量'
      },
      {
        number: {
          number: [157],
          toFixed: 1,
          content: '{nt}'
        },
        text: '未通过数量'
      }
    ])

    onMounted(()=>{
      changeTiming()
    })

    const changeTiming = () => {
      setInterval(() => {
        changeNumber()
      }, 2000)
    }
    const changeNumber = () => {
      numberData.forEach((item, index) => {
        item.number.number[0] += ++index
        item.number = { ...item.number }
      })
    }
    return { numberData }
  }
})
</script>

<style lang="scss" scoped>
$box-width: 300px;
$box-height: 410px;

.centreLeft1 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  .bottom-data {
    .item-box {
      &>div{
        padding-right: 10px;
      }
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;
      .dv-digital-flop {
        width: 80px;
        height: 40px;
      }
      // 金币
      .coin {
        font-size: 20px;
        color: #ffc107;
        line-height: 40px;
      }
      .colorYellow {
        color: yellowgreen;
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
