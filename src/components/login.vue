<template>
  <!-- 登录容器 -->
  <div class="login-container">
    <!-- 表单容器 -->
    <div class="form-container">
      <h2>用户登录</h2>
      <!-- ref vue提供的属性 让我们可以给dom元素起名字 -->
      <el-form label-position="top" label-width="80px" ref="formData" :rules="rules" :model="formData">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <!-- login-btn 自定义类名 避免跟默认冲突 -->
        <el-button class="login-btn" @click="submitForm('formData')" type="danger">用户登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表单数据
      formData: {
        username: "",
        password: ""
      },
      // 表单验证规则
      rules: {
        username: [
          // required :必须
          // message: 提示信息
          // trigger: 触发时机
          // min:最短
          // max:最常
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 6, message: "你好短啊", trigger: "change" }
        ]
      }
    };
  },
  // 方法
  methods: {
    submitForm(formName) {
      // $refs 数组 可以让我们通过 设定的名字 获取对应的dom元素
      // 通过表单元素的 validate (element-ui)增加的验证方法
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 成功 axios调用接口
          this.$axios.post("login",this.formData).then(res=>{
            if(res.data.meta.status === 400){
              // 错误
              // 在vue-axios.js里用axios拦截器统一设置了
              // this.$message.error(res.data.meta.msg);
            }else if(res.data.meta.status == 200){
              // 正确
            //   this.$message({
            //     message:res.data.meta.msg,
            //     type:"success"
            //   });
            // 另一种写法
            // 在vue-axios.js里用axios拦截器统一设置了
            // this.$message.success(res.data.meta.msg);

            // 保存token 用sessionStorage
            window.sessionStorage.setItem('token',res.data.data.token);
            // 去首页
            this.$router.push("/")
            }
          });
        } else {
          this.$message.error("请输入正确的用户名和密码")
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-container {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    background-color: white;
    width: 580px;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
