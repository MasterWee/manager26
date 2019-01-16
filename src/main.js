import Vue from 'vue';
import App from './App.vue';

// 全局样式导入
import './assets/base.css';

// 导入自己抽取的axios插件
import VueAxios from './lib/vue-axios';
// use一下
Vue.use(VueAxios);

// element-ui导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 全局导入自己抽取的路由
import router from './lib/router'


// 导入面包屑组件
import myBreadcrumb from "./components/myBreadcrumb.vue";
// 全局注册面包屑组件
Vue.component('myBreadcrumb',myBreadcrumb)

new Vue({

  el: '#app',
    // 挂载到最顶级的vue上
    router,
  render: h => h(App)
});