<template>
  <div class="user-container">
    <!-- 顶部面包屑 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <myBreadcrumb :level2="level2" :level3="level3"></myBreadcrumb>
        </div>
      </el-col>
    </el-row>

    <!-- 操纵框 -->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">
          <el-input placeholder="请输入内容" v-model="pageData.query">
            <template slot="append">
              <i class="el-icon-search"></i>
            </template>
          </el-input>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <el-button type="primary" plain>添加用户</el-button>
        </div>
      </el-col>
    </el-row>

    <!-- 用户数据 -->
    <el-row>
      <el-col :span="24">
        <el-table :data="userList" border style="width: 100%">
          <el-table-column prop="#" label="#" width="30" type="index"></el-table-column>
          <el-table-column prop="username" label="姓名" width="180"></el-table-column>
          <el-table-column prop="email" label="邮箱" width="300"></el-table-column>
          <el-table-column prop="mobile" label="电话" width="300"></el-table-column>
          <el-table-column prop label="用户状态" width="80">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.mg_state"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop label="操作">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" plain size="mini"></el-button>
              <el-button type="danger" icon="el-icon-delete" plain size="mini"></el-button>
              <el-button type="success" icon="el-icon-check" plain size="mini"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 底部的分页 -->
    <el-row>
      <el-col :span="24">
        <el-pagination
          :current-page="pageData.pagenum"
          :page-sizes="[2, 4, 6, 8,10]"
          :page-size="pageData.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      level2: "用户管理",
      level3: "用户列表",

      pageData: {
        //   页码
        pagenum: 1,
        // 页容量
        pagesize: 10,
        query: ""
      },
      //   总页数
      total: "",
      // 用户的数据
      userList: []
    };
  },
  //   生命周期函数
  created() {
    this.$axios.get("users", { params: this.pageData }).then(res => {
      //   console.log(res);
      this.userList = res.data.data.users;
      this.total = res.data.data.total;
    });
  }
};
</script>

<style>
</style>
