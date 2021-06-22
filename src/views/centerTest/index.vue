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
        <chart ref="cha"
            :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted, reactive} from 'vue'
import Chart from '../center/chart/draw'
import {useStore} from 'vuex'

export default defineComponent({
  components: {
    Chart
  },
  setup() {
    const store = useStore()
    const data = reactive({
     data:[
       {value: 1048, name: '搜索引擎'},
       {value: 735, name: '直接访问'},
     ]
    })
    // 初始化数据
    onMounted(() => {
      setData()
    })
    // 设置数据
    const setData = () => {
       // data = [...store.state.data.list,...store.state.data.list1,...store.state.data.list2]
       console.log(data)
      }
    return {
      data
    }
  }
})
</script>

<style lang="scss" scoped>
$box-height: 500px;
$box-width: 430px;
.center {
  padding:20px 16px 16px 16px;
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
