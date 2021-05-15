<template>
  <div id="index" ref="appRef">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width: 33.3%; height: 5px;" />
          <div class="d-flex jc-center">
            <dv-decoration-8
              :color="['#568aea', '#000000']"
              style="width: 200px; height: 50px;"
            />
            <div class="title">
              <span class="title-text">{{title}}</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width: 250px; height: 8px;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width: 200px; height: 50px;"
            />
          </div>
          <dv-decoration-10
            style="width: 33.3%; height: 5px; transform: rotateY(180deg);"
          />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%;">
            <div
              class="react-right ml-4"
              style="width: 500px; text-align: left; background-color: #0f1325;"
            >
              <span class="react-before"></span>
              <span class="text">数据分析1</span>
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325;">
              <span class="text colorBlue">数据分析2</span>
            </div>
          </div>
          <div style="width: 40%;" class="d-flex">
            <div class="react-left bg-color-blue mr-3">
              <span class="text fw-b">vue-big-screen</span>
            </div>
            <div
              class="react-left mr-4"
              style="
                width: 500px;
                background-color: #0f1325;
                text-align: right;
              "
            >
              <span class="react-after"></span>
              <span class="text">
                {{ timeInfo.dateYear }} {{ timeInfo.dateWeek }}
                {{ timeInfo.dateDay }}
              </span>
            </div>
          </div>
        </div>

        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <!-- <centerLeft1 /> -->
              </dv-border-box-12>
            </div>
            <div>
              <dv-border-box-12>
                <!-- <centerLeft2 /> -->
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <div>
              <!-- <center /> -->
            </div>
            <!-- 中间 -->
            <div>
              <centerRight2 />
            </div>
            <div>
              <dv-border-box-13>
                <!-- <centerRight1 /> -->
              </dv-border-box-13>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-13>
              <!-- <bottomLeft /> -->
            </dv-border-box-13>
            <dv-border-box-12>
              <!-- <bottomRight /> -->
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { formatTime } from '@/utils/index'
import { WEEK } from '@/constant/index'
import useIndex from '@/utils/useDraw'
import { title, subtitle, moduleInfo } from '@/constant/index'

export default defineComponent({
  setup() {
    // * 加载标识
    const loading = ref<boolean>(true)
    // * 时间内容
    const timeInfo = reactive({
      setInterval: 0,
      dateDay: '',
      dateYear: '',
      dateWeek: '',
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
    return { loading, timeInfo, appRef, title, subtitle, moduleInfo }
  },
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>
