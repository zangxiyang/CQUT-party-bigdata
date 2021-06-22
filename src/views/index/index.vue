<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#000000']" />
            <div class="title">
              <span class="title-text">党委大数据</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="['#568aea', '#000000']"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>
<!--        第二行  -->
        <div class="nav_bar">
          <router-link to="http://dev.flyly.xyz/swagger-ui.html#!/20826243142796321160/listUsingGET_9">
            <div class="content">
              <div class="nav_title">组织管理</div>
            </div>
          </router-link>
          <div class="content">
            <div class="content_title">党员</div>
            <div class="content_number">
              <span class="number">25</span>
              <span class="person">人</span>
            </div>
          </div>
          <div class="content">
            <div class="content_title">预备党员</div>
            <div class="content_number">
              <span class="number">25</span>
              <span class="person">人</span>
            </div>
          </div>
          <div class="content">
            <div class="content_title">积极分子</div>
            <div class="content_number">
              <span class="number">25</span>
              <span class="person">人</span>
            </div>
          </div>
        </div>
        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <center-left />
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <dv-border-box-12>
             <center></center>
            </dv-border-box-12>
            <!-- 中间 -->
            <div>
              <dv-border-box-12>
                <center-right />
              </dv-border-box-12>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-12>
              <bottom-left1/>
            </dv-border-box-12>
            <dv-border-box-12>
              <bottom-left2/>
            </dv-border-box-12>
            <dv-border-box-12>
              <bottom-right1/>
            </dv-border-box-12>
            <dv-border-box-12>
              <bottom-right2/>
            </dv-border-box-12>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import { formatTime } from '@/utils/index'
import { WEEK } from '@/constant/index'
import useIndex from '@/utils/useDraw'
import { title, subtitle, moduleInfo } from '@/constant/index'
import Center from '../center/index.vue'
import CenterLeft from '../centerLeft/index.vue'
import CenterRight from '../centerRight/index.vue'
import BottomLeft1 from '../bottomLeft1/index.vue'
import BottomLeft2 from '../bottomLeft2/index.vue'
import BottomRight1 from '../bottomRight1/index.vue'
import BottomRight2 from '../bottomRight2/index.vue'


export default defineComponent({
  components: {
    Center,
    CenterLeft,
    CenterRight,
    BottomLeft1,
    BottomLeft2,
    BottomRight1,
    BottomRight2

  },
  setup() {
    // * 加载标识
    const loading = ref<boolean>(true)
    // * 时间内容
    const timeInfo = reactive({
      setInterval: 0,
      dateDay: '',
      dateYear: '',
      dateWeek: ''
    })
    // * 适配处理
    const { appRef, calcRate, windowDraw } = useIndex()
    // 生命周期
    onMounted(() => {
      cancelLoading()
      handleTime()
      // todo 屏幕适应
      windowDraw()
      calcRate()
    })

    onBeforeUnmount(() => {
      clearInterval(timeInfo.setInterval)
    })

    // methods
    // todo 处理 loading 展示
    const cancelLoading = () => {
      setTimeout(() => {
        loading.value = false
      }, 500)
    }

    // todo 处理时间监听
    const handleTime = () => {
      timeInfo.setInterval = setInterval(() => {
        const date = new Date()
        timeInfo.dateDay = formatTime(date, 'HH: mm: ss')
        timeInfo.dateYear = formatTime(date, 'yyyy-MM-dd')
        timeInfo.dateWeek = WEEK[date.getDay()]
      }, 1000)
    }

    // return
    return {
      loading,
      timeInfo,
      appRef,
      title,
      subtitle,
      moduleInfo
    }
  }
})
</script>

<style lang="scss" scoped>

#index {
  color: #d3d6dd;
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  .bg {
    width: 100%;
    height: 100%;
    padding: 16px 16px 0 16px;
    background-image: url('../../assets/pageBg.png');
    background-size: cover;
    background-position: center center;
    //filter: brightness(100%);
  }

  .host-body {
    .dv-dec-10,
    .dv-dec-10-s {
      width: 33.3%;
      height: 5px;
    }
    .dv-dec-10-s {
      transform: rotateY(180deg);
    }
    .dv-dec-8 {
      width: 200px;
      height: 50px;
    }
    .title {
      position: relative;
      width: 500px;
      text-align: center;
      background-size: cover;
      background-repeat: no-repeat;

      .title-text {
        font-size: 36px;
        position: absolute;
        top:10px;
        //bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }

      .dv-dec-6 {
        position: absolute;
        top: 35px;
        left: 50%;
        width: 250px;
        height: 8px;
        transform: translate(-50%);
      }
    }
    //第二行
    .nav_bar{
      margin-top: 15px;
      display: flex;
      justify-content:space-around;
      .content{
        width: 450px;
        height: 100px;
        background-color: #0f1325;
        text-align: center;
        .nav_title{
          font-size: 25px;
          color: white;
          line-height: 100px;
        }
        .content_title{
          font-size: 25px;
          line-height: 50px;
        }
        .content_number{
          .number{
            line-height: 50px;
            font-size: 40px;
            margin-right: 5px;
            color: #DF8652;
          }
          .person{
            font-size: 16px;
          }
        }
      }
    }

    .body-box {
      margin-top: 15px;
      display: flex;
      flex-direction: column;

      //下方区域的布局
      .content-box {
        display: grid;
        grid-template-columns: 2fr 5fr 2fr;
      }

      // 底部数据
      .bototm-box {
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(4, 25%);
      }
    }
  }
}

</style>
