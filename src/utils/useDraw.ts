import { ref } from 'vue'

export default function useIndex() {
  // * 指向最外层容器
  const appRef = ref()
  // * 定时函数
  const timer = ref(0)
  // * 默认缩放值
  const scale = {
    width: '1',
    height: '1',
  }
  // * 设计稿尺寸（px）
  const baseWidth = 1920
  const baseHeight = 1080

  // * 需保持的比例（默认1.77778）
  const baseProportion = (baseWidth / baseHeight).toFixed(5)

  const calcRate = () => {
    // 当前宽高比
    const currentRate = (window.innerWidth / window.innerHeight).toFixed(5)

    if (appRef.value) {
      if (currentRate > baseProportion) {
        // 表示更宽
        scale.width = (
          (window.innerHeight * parseFloat(baseProportion)) /
          baseWidth
        ).toFixed(5)
        scale.height = (window.innerHeight / baseHeight).toFixed(5)
        appRef.value.style.transform = `scale(${scale.width},${scale.height})`
      } else {
        // 表示更高
        appRef.value.style.transform = `scale(1,1)`
      }
      // 设置比例
      // scale.width = (window.innerHeight / baseHeight).toFixed(5)
      // scale.height = (window.innerWidth / baseWidth).toFixed(5)

      // appRef.value.style.transform = `scale(${scale.width},${scale.height})`
      // if (currentRate > baseRate) {
      //   // 以高为准
      //   scale.value = (window.innerHeight / baseHeight.value).toFixed(5)
      //   appRef.value.style.transform = 'scale(' + scale.value + ')'
      // } else {
      //   // 以宽为准
      //   scale.value = (window.innerWidth / baseWidth.value).toFixed(5)
      //   appRef.value.style.transform = 'scale(' + scale.value + ')'
      // }
    }
  }

  const resize = () => {
    clearTimeout(timer.value)
    timer.value = setTimeout(() => {
      calcRate()
    }, 100)
  }

  // 改变窗口大小重新绘制
  const windowDraw = () => {
    window.addEventListener('resize', resize)
  }

  return {
    appRef,
    calcRate,
    windowDraw,
  }
}
