/**
 * axios.defaults  修改默认操作
 */

 import axios from 'axios'
 axios.defaults.withCredentials = true;
 const service = axios.create({
     baseURL: 'http://www.zhangjingzhe.net',
     
 })
 export default axios;
 