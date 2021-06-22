<template>

  <div id="box">
    <div><img src="../../assets/logo.png" ></div>
    <el-divider></el-divider>
    <el-button class="title" type="danger">两江人工智学院党组织架构</el-button>
    <div class="svg_tag">
      <svg t="1624365181861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6375" width="200" height="200"><path d="M381.344 83.333h252.714c22.298 0 44.597 8.679 44.597 34.716v347.155c0 26.037 7.433 34.716 29.731 34.716h148.656c35.678 0 38.651 53.81 13.378 83.317l-331.503 387.077c-14.866 17.358-40.137 17.358-56.489 0l-331.502-387.078c-25.271-29.509-14.866-83.317 20.812-83.317l136.763 5.209c22.298 0 41.623-13.886 41.623-39.923v-347.155c1.486-24.301 8.919-34.716 31.218-34.715v0z" p-id="6376" fill="#F56C6C"></path></svg>
    </div>
    <el-scrollbar>
      <div class="flex-content">
        <p class="item" v-for="item in 30" :key="item">数据科学与大数据技术专升本一班</p>
      </div>
    </el-scrollbar>
    <div class="footer"></div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({

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
    height: 500px;
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
    height: calc(100vh - 600px);
  }
}
</style>
