// 导入vue
import Vue from 'vue';
// 导入路由
import VueRouter from 'vue-router';
// 注册插件
Vue.use(VueRouter);

// 导入路由管理的组件
import login from '../components/login.vue';
import main from '../components/main.vue'

// 写规则
let routes = [
    // 登录页
    {
        path:'/login',
        component:login
    },
    // 主页
    {
        path:'/',
        component:main
    }

]

// 实例化对象
let router = new VueRouter({
    routes
})

// 初始化导航守卫
router.beforeEach((to, from, next) => {
    console.log("执行了");
    console.log(to);
    console.log(from);
    
    
    // next方法如果不执行就不会跳转
    next();
    if(to.path === '/login'){
        // 去登录页
        next();
    }else{
        // 判断登录
        // 判断是否有token
        let token = window.sessionStorage.getItem('token');
        if(token){
            // 登录成功
            next()
        }else{
            // 没有token 没有登录
            // this.$message.error("请先登录")改为
            Vue.prototype.$message.error("请先登录")

            // 去登录页 编程式导航
            // this.$router.push('login')
            next('/login')
        }
    }
  })

// 暴露出去
export default router;

