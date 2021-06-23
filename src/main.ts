import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import dataV from '@jiaminghi/data-view';
// 引入全局css
import './assets/scss/style.scss';
// 引入图表（所有图标见 icon 目录下的 demo_index.html）
import './assets/icon/iconfont.css'
// 引入 全局注册组件
import PublicComponent from '@/components/componentInstall';
import * as echarts from 'echarts';
// import BinTreeOrg from 'bin-tree-org'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App)
app.config.globalProperties.echarts = echarts;
app.use(PublicComponent)
app.use(dataV)
app.use(ElementPlus)
// app.use(BinTreeOrg)
// app.use(store)
app.use(router)
app.mount('#app')
