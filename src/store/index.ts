// import { createStore } from 'vuex'
// const baseUrl ="http://dev.flyly.xyz/front/BigScreen/getBigScreen"
// import axios from "axios";
//
//
// export default createStore({
//   state: {
//     //党员基本信息
//     party:{
//       partyMemberAll:0, //所有党员人数
//       probationaryDyAll:0, //所有预备党员
//       activistAll:0, //所有积极分子
//     },
//     // 主题党日
//     ztdrList:[],
//     // 志愿活动
//     zyHdList:[],
//     // 三会一课
//     shykList:{
//       dList:[], //党员大会
//       zList:[], //支部委员会
//       kList:[]  //党课
//     },
//     // 党委成员学历
//     education:{
//       educationBkValue:0,
//       educationYjsValue:0
//     },
//     // 年龄分布
//     age:[],
//     // 性别比列
//     gender:[
//     ],
//
//   },
//   getters:{
//   },
//   mutations: {
//   // 设置所有数据
//     setScreenList(state,data){
//       console.log(data)
//       //设置党员基本信息数据
//       state.party.activistAll =data.activistAll || 0
//       state.party.partyMemberAll = data.partyMemberAll || 0
//       state.party.probationaryDyAll = data.probationaryDyAll || 0
//       //主题党日['两江人工智能学院','25']
//       // state.ztdrList =data.ztdrList.map((item)=>{item.name,''+item.frequency})
//       data.ztdrList.map((item)=>{
//         state.ztdrList.push([item.name,''+item.frequency])
//       })
//       console.log(JSON.parse(JSON.stringify(state.ztdrList)))
//     }
//   },
//   actions: {
//   //  处理数据
//    async getScreenList({commit}){
//       const res = await axios.get(`${baseUrl}`)
//       if (res.status && res.data.code===0){
//         // console.log(res.data.data)
//         commit('setScreenList',res.data.data)
//       }
//     }
//   }
// })
