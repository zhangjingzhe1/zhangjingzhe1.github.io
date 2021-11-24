/**
 * axios.defaults  修改默认操作
 */

 import axios from 'axios'

 if(!process.env.NODE_ENV === 'development') {
    axios.defaults.withCredentials = true;
 }
 const service = process.env.NODE_ENV === 'development' ? axios : axios.create({
     baseURL: 'https://www.zhangjingzhe.net',
     timeout: 20000,   
 });
 export default service;
 