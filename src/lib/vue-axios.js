// 导入axios
import axios from 'axios';

// 导入基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';

// 暴露出去
export default {
    install(Vue){
        // 添加实例方法
        Vue.prototype.$axios = axios;
    }
}

