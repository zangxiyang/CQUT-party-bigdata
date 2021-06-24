<template>

  <div id="box">
    <div><img src="../../assets/logo.png" ></div>
    <el-divider></el-divider>
    <el-button class="title" @click.prevent="partyAll" type="danger">两江人工智学院党组织架构</el-button>
    <div class="svg_tag">
      <svg t="1624365181861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6375" width="200" height="200"><path d="M381.344 83.333h252.714c22.298 0 44.597 8.679 44.597 34.716v347.155c0 26.037 7.433 34.716 29.731 34.716h148.656c35.678 0 38.651 53.81 13.378 83.317l-331.503 387.077c-14.866 17.358-40.137 17.358-56.489 0l-331.502-387.078c-25.271-29.509-14.866-83.317 20.812-83.317l136.763 5.209c22.298 0 41.623-13.886 41.623-39.923v-347.155c1.486-24.301 8.919-34.716 31.218-34.715v0z" p-id="6376" fill="#F56C6C"></path></svg>
    </div>
    <el-scrollbar>
      <div class="flex-content">
        <p class="item" @click.prevent="partyClick(item.id)" v-for="item in data" :key="item.id">{{item.name}}</p>
      </div>
    </el-scrollbar>
    <div class="footer"></div>
  </div>
</template>

<script>
import {defineComponent, onMounted, reactive, toRefs} from "vue";
import axios from "axios";
import {partyList} from '@/utils/apiBaseUrl'
import {useRouter} from "vue-router";

export default defineComponent({
setup(){
  const router = useRouter()
  const party = reactive({
    data:[]
  })
  const partyAll =()=>{
    console.log("")}
  const partyClick=(id)=>{
    // console.log(id)
    router.push( { path: `/party/${id}`});
  }
  onMounted(async ()=>{
    const res = await  axios.get(`${partyList}`)
    if(res.status===200 && res.data.code ===0){
         party.data = res.data.data
    }
  })
  return{
    ...toRefs(party),
    partyClick,
    partyAll
  }
}
})
</script>


<style  lang="scss" scoped>
#box{
  color: black;
  background-color: white !important;
  text-align: center;
  .icon:hover{
    cursor: pointer;
  }
  .title{
    width: 500px;
    height: 100px;
    font-size: 36px;
  }
  .flex-content{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    height: 400px;
    .item{
      cursor: pointer;
      background-color: #F56C6C;
      width: 80px;
      margin: 0 10px;
      line-height: 30px;
      padding: 20px;
      font-size: 26px;
      text-align : center;
      color: white;
      border-radius: 5px;
      &:hover{
        opacity: .8;
        background-color: #EB8383;
      }
    }
  }
  .footer{
    height: calc(100vh - 700px);
  }
}
</style>
