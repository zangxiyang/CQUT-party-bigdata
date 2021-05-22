## 一、项目描述

- 这里一个基于 Vue3、TypeScript、DataV、ECharts 框架的 " **数据大屏项目** "，使用 '.vue' 和 '.tsx' 文件实现界面，采用新版动态屏幕适配方案，支持数据动态刷新渲染、内部DataV、ECharts图表都支持自由替换。组件详情请点击下方 ECharts 和 DataV 文档。

- [**Vue2 版本请点击这里查看**](https://gitee.com/MTrun/big-screen-vue-datav)
- [**React 版本请点击这里查看，全新界面超级好看！！！(o ﾟ v ﾟ)ノ**](https://gitee.com/MTrun/react-big-screen)
- 项目按照 1920*1080 比例设计，支持任何尺寸的同比例缩放。
- 项目封装的 ECharts 区域使用了全部引入的方式，增加了打包体积，在实际运用中请使用 **按需引入**。
- 拉取项目之后，建议按照自己的功能区域重命名文件，现以简单的位置进行区分。
- 项目环境：@vue/cli-4.5.13、DataV-2.10、Echarts-5.1.1、Npm-6.14.6、Node-v14.16。
- 请拉取 master 分支的代码，其余分支是开发分支。

友情链接：

1.  [Vue3 官方文档](https://composition-api.vuejs.org/zh/api.html#setup)
2.  [DataV 官方文档](http://datav.jiaminghi.com/guide/)
3.  [echarts 实例](https://echarts.apache.org/examples/zh/index.html)，[echarts API 文档](https://echarts.apache.org/zh/api.html#echarts)
4.  [项目 gitee 地址（国内速度快）](https://gitee.com/MTrun/vue-big-screen-plugin)

项目展示
![项目展示](https://images.gitee.com/uploads/images/2020/1208/183608_b893a510_4964818.gif "20201208_221020.gif")

## 二、主要文件介绍

| 文件                | 作用/功能                                                              |
| ------------------- | --------------------------------------------------------------------- |
| main.js             | 主目录文件，引入 Echart/DataV 等文件                                    |
| utils               | 工具函数与 mixins 函数等                                                |
| views/ index.vue    | 项目主结构                                                             |
| views/其余文件       | 界面各个区域组件（按照位置来命名）                                       |
| assets              | 静态资源目录，放置 logo 与背景图片                                       |
| assets / style.scss | 通用 CSS 文件，全局项目快捷样式调节                                      |
| assets / index.scss | Index 界面的 CSS 文件                                                  |
| components/echart   | 所有 echart 图表（按照位置来命名）                                      |
| common/...          | 全局封装的 ECharts 和 flexible 插件代码（适配屏幕尺寸，可定制化修改）     |

## 三、使用介绍

### 启动项目

需要提前安装好 `nodejs` 与 `yarn`,下载项目后在项目主目录下运行 `yarn` 拉取依赖包。安装完依赖包之后然后使用 `vue-cli` 或者直接使用命令`npm run serve`，就可以启动项目，启动项目后最好是手动全屏查看（按 F11）。如果编译项目的时候提示没有 DataV 框架的依赖，输入 `npm install @jiaminghi/data-view` 或者 `yarn add @jiaminghi/data-view` 进行手动安装。

如果安装完依赖 @jiaminghi 报错 `<template v-for> key should be placed on the <template> tag` 类似的bug，就把此工程目录下的 `other_modules/@jiaminghi.rar` 解压并替换掉 node_modules 里面的同名文件，我已经给作者提了 Issues 希望大家拉取的时候没有这个错误


### 封装组件渲染图表

所有的 ECharts 图表渲染都是基于 `components/echart/index.tsx` 封装组件创建的，已经对数据和屏幕改动进行了监听，能够动态渲染图表数据和大小。

项目配置了默认的 ECharts 图表样式，文件地址：`common/echart/style/theme.js`，地图数据在同父级别的 map 文件夹下。

封装的渲染图表组件支持传入以下参数，可根据业务需求自行添加/删除。

|参数名称              | 类型      | 作用/功能                      |
| -------------------| --------- | ------------------------------|
| id                 | String    | 唯一 id（非必填，使用 ref 指定节点）|
| className          | String    | class样式名称（非必填）            |
| options            | Object    | ECharts 配置（非必填），可通过初始化参数打入（大数据场景可使用）|
| height             | String    | 图表高度（必填）                    |
| width              | String    | 图表宽度（必填）                    |

### 全局封装与使用

### 复用图表组件

复用图表组件案例为中间部分的 `任务通过率与任务达标率` 模块，两个图表类似，区别在于颜色和主要渲染数据。只需要传入对应的唯一 id 和样式，然后在复用的组件 `components/echart/center/centerChartRate` 里进行接收并在对应位置赋值即可。

如：在调用处 `views/center.vue` 里去定义好数据并传入组件

```js
//组件调用
<span>今日任务通过率</span>
<chart :id="rate[0].id" :tips="rate[0].tips" :colorObj="rate[0].colorData" />

<span>今日任务达标率</span>
<chart :id="rate[1].id" :tips="rate[1].tips" :colorObj="rate[1].colorData" />

...
import Chart from "@/components/echart/center/centerChartRate";

data() {
  return {
    rate: [
      {
        id: "centerRate1",
        tips: 60,
        ...
      },
      {
        id: "centerRate2",
        tips: 40,
        colorData: {
          ...
        }
      }
    ]
  }
}
```

### 更换边框

边框是使用了 DataV 自带的组件，只需要去 views 目录下去寻找对应的位置去查找并替换就可以，具体的种类请去 DavaV 官网查看
如：

```html
<dv-border-box-1></dv-border-box-1>
<dv-border-box-2></dv-border-box-2>
<dv-border-box-3></dv-border-box-3>
```

### 更换图表

直接进入 `components/echart` 下的文件修改成你要的 echarts 模样，可以去[echarts 官方社区](https://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all)里面查看案例。

### 屏幕适配

### 请求数据

现在的项目未使用前后端数据请求，建议使用 axios 进行数据请求，在 main.js 位置进行全局配置。

- axios 的 main.js 配置参考范例（因人而异）

```js
import axios from 'axios';

//把方法放到vue的原型上，这样就可以全局使用了
Vue.prototype.$http = axios.create({
  //设置20秒超时时间
  timeout: 20000,
  baseURL: 'http://172.0.0.1:80080', //这里写后端地址
});
```

## 四、更新情况

## 五、其余

这个项目是个人的作品，难免会有问题和 BUG，如果有问题请进行评论，我也会尽力去更新，自己也在前端学习的路上，欢迎交流，非常感谢！