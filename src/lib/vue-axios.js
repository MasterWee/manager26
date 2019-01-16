// 导入axios
import axios from 'axios';
// 导入Vue
// import Vue from 'vue'
// 导入element-ui的message
import {Message} from 'element-ui'

// 导入基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';

// 设置axios拦截器
// 请求发送之前会触发这个回调函数
// 修改请求的设置
axios.interceptors.request.use(config => {
    console.log(config);
    // 返回处理过的axios设置
    // 判断请求的是登录还是其他url地址
    if(config.url.indexOf('/login') != -1){
        // 登录接口
    }else{
        // 非登录接口
        config.headers.Authorization = window.sessionStorage.getItem("token");
    }
    return config;
  }, error => {
      console.log(errot);
      
    // 出错的
    return Promise.reject(error);
  });

//   请求响应回来后 会触发这个回调函数
  axios.interceptors.response.use(function (response) {
    // 根据响应回来的状态码 统一用户提示
    if(response.data.meta.status === 200){
        // 成功 提示返回的信息
        // Vue.prototype.$message.success(response.data.meta.msg);
        Message.success(response.data.meta.msg);
    }else if(response.data.meta.status === 400){
        // 失败 提示返回的信息
        // Vue.prototype.$message.error(response.data.meta.msg);
        Message.error(response.data.meta.msg);
    }
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

// 暴露出去
export default {
    install(Vue){
        // 添加实例方法
        Vue.prototype.$axios = axios;
    }
}

