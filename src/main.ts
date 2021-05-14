import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view';
// 引入全局css
import './assets/scss/style.scss';
// 引入图表（所有图标见 icon 目录下的 demo_index.html）
import './assets/icon/iconfont.css'
// 引入echarts
import * as echarts from 'echarts';

const app = createApp(App)

// 全局挂载
app.config.globalProperties.$echarts = echarts
app.use(dataV)
app.use(store)
app.use(router)
app.mount('#app')
