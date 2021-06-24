import axios from "axios";

const baseUrl ="http://dev.flyly.xyz/front/BigScreen/getBigScreen"
//请求所有党总支大屏数据
function getScreenList():any{
  return  axios.get(`${baseUrl}`)
}


export{
    getScreenList
}

// async function getUser() {
//     try {
//         const response = await axios.get('/user?ID=12345');
//         console.log(response);
//     } catch (error) {
//         // console.error(error);
//     }
// }