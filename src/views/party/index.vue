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
              <span class="title-text">支部大数据</span>
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
          <div class="content_header">
            <router-link to="http://dev.flyly.xyz/swagger-ui.html#!/20826243142796321160/listUsingGET_9">
              <div class="nav_title">返回</div>
            </router-link>
            <router-link to="http://dev.flyly.xyz/swagger-ui.html#!/20826243142796321160/listUsingGET_9">
              <div class="nav_title">组织管理</div>
            </router-link>
          </div>
          <div class="content">
            <div class="content_title">党员</div>
            <div class="content_number">
              <span class="number">{{partyMemberAll}}</span>
              <span class="person">人</span>
            </div>
          </div>
          <div class="content">
            <div class="content_title">预备党员</div>
            <div class="content_number">
              <span class="number">{{probationaryDyAll}}</span>
              <span class="person">人</span>
            </div>
          </div>
          <div class="content">
            <div class="content_title">积极分子</div>
            <div class="content_number">
              <span class="number">{{activistAll}}</span>
              <span class="person">人</span>
            </div>
          </div>
        </div>
        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <Suspense>
                  <template #default>
                    <!-- 异步组件加载完成之后展示的控件 -->
                    <center-left  />
                  </template>
                  <template #fallback>
                    <!-- 异步组件加载中展示的控件 -->
                    <dv-loading>Loading...</dv-loading>
                  </template>
                </Suspense>
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <dv-border-box-12>
              <center :data="centerData"></center>
            </dv-border-box-12>
            <!-- 中间 -->
            <div>
              <dv-border-box-12>
                <Suspense>
                  <template #default>
                    <!-- 异步组件加载完成之后展示的控件 -->
                    <center-right />
                  </template>
                  <template #fallback>
                    <!-- 异步组件加载中展示的控件 -->
                    <dv-loading>Loading...</dv-loading>
                  </template>
                </Suspense>
              </dv-border-box-12>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-12>
              <bottom-left1 :b-left1="bLeft1" />
            </dv-border-box-12>
            <dv-border-box-12>
              <bottom-left2 :b-left2="bLeft2"/>
            </dv-border-box-12>
            <dv-border-box-12>
              <bottom-right1 :b-right1="bRight1" />
            </dv-border-box-12>
            <dv-border-box-12>
              <bottom-right2 :b-right2="bRight2" />
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
  toRefs,
  provide,
  reactive,
  onMounted,
  onBeforeUnmount, watch, defineAsyncComponent,
} from 'vue'
import axios from "axios";
const baseUrl ="http://dev.flyly.xyz/front/BigScreen/getBigScreen"
import useIndex from '@/utils/useDraw'
import {  moduleInfo } from '@/constant/index'
import Center from '../center/index.vue'
// import CenterLeft from '../centerLeft/index.vue'
// import CenterRight from '../centerRight/index.vue'
import BottomLeft1 from '../bottomLeft1/index.vue'
import BottomLeft2 from '../bottomLeft2/index.vue'
import BottomRight1 from '../bottomRight1/index.vue'
import BottomRight2 from '../bottomRight2/index.vue'

export default defineComponent({
  components: {
    Center,
    CenterLeft:defineAsyncComponent(()=>import('../centerLeft/index.vue')),
    CenterRight:defineAsyncComponent(()=>import('../centerRight/index.vue')),
    BottomLeft1,
    BottomLeft2,
    BottomRight1,
    BottomRight2
  },
  setup() {
    //党员学历分布
    const bRight2 = reactive({
      data:[]
    })
    //年龄分布
    const bRight1 = reactive({
      data:[]
    })
    //党龄分布
    const bLeft2 = reactive({
      data: []
    })
    //性别比列
    const bLeft1 = reactive({
      data: []
    })
    //三会一课
    const centerData = reactive({
      list: [],
      list1:[],
      list2:[]
    })
    provide('location', location)
    //党员首页信息
    let getPartyAll =reactive({
      partyMemberAll:0, //所有党员人数
      probationaryDyAll:0, //所有预备党员
      activistAll:0, //所有积极分子
    })
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
    onMounted(async ()=>{
      const res = await  axios.get(`${baseUrl}`)
      if(res.status===200 && res.data.code===0){
        const result =res.data.data;
        console.log(res.data.data)
        getPartyAll.partyMemberAll=result.partyMemberAll || 0;
        getPartyAll.activistAll = result.activistAll || 0;
        getPartyAll.probationaryDyAll = result.probationaryDyAll || 0;
        centerData.list =result.shykList[0].frequencys
        centerData.list1 =result.shykList[1].frequencys
        centerData.list2 =result.shykList[2].frequencys
        bLeft1.data=[{value:result.genderBlNan,name: '男'},{value:result.genderBlNv,name: '女'}]
        bLeft2.data = [{name: '5年以下', value: result.dnAgeOne}, {name: '5-10年', value: result.dnAgeTwo}, {name: '10-15年', value: result.dnAgeThree}, {name: '15-20年', value: result.dnAgeFour}, {name: '20年以上', value: result.dnAgeFive},]
        bRight1.data = [result.ageOne,result.ageTwo,result.ageThree,result.ageFour]
        bRight2.data = [ { value: result.educationBkValue, name: "本科" }, { value: result.educationYjsValue, name: "研究生及研究生以上" },]
      }else {
        console.log("出错了")
      }
    })
    onMounted(() => {
      cancelLoading()
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
      }, 1000)
    }

    // return
    return {
      loading,
      timeInfo,
      appRef,
      moduleInfo,
      ...toRefs(getPartyAll),
      centerData,
      bLeft1,
      bLeft2,
      bRight1,
      bRight2
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
      .content_header{
        width: 450px;
        height: 100px;
        display: grid;
        overflow: hidden;
        grid-template-columns:  1fr 1fr;
        .nav_title{
          width: 220px;
          background-color: #0f1325;
          display: inline-block;
          font-size: 25px;
          text-align: center;
          line-height: 100px;
          color: white;
        }
      }
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
          line-height: 45px;
        }
        .content_number{
          .number{
            line-height: 55px;
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
