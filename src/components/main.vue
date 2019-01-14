<template>
  <div class="main-container">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
                <img src="../assets/logo.png" alt="">
            </div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light">电商后台管理系统</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
                <el-button type="info">退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  // // 生命周期函数 已经用导航守卫代替了此功能
  // beforeCreate(){
  //     // 判断是否有token
  //     let token = window.sessionStorage.getItem('token');
  //     if(token){
  //         // 登录成功

  //     }else{
  //         // 没有token 没有登录
  //         this.$message.error("请先登录")
  //         // 去登录页 编程式导航
  //         this.$router.push('login')
  //     }
  // },
  methods: {
    logout() {
      window.sessionStorage.removeItem("token");
      // 编程式导航
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
}
.el-col-18{
    font-size: 30px;
    font-weight: 900;
    color: white;
}
.el-col-4{
    text-align: left;
}
.el-col-2{
    text-align: right;
}
</style>

