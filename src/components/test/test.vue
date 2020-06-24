<template>
  <div class="content">
    <el-menu
      default-active="activeIndex"
      class="nav-menu el-menu-vertical-demo"
      @select="handleSelect"
    >
      <el-submenu index="/test">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="/test">选项1</el-menu-item>
        <el-menu-item index="/test">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <div class="main-box"> 
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      msg: "Welcome to test!",
      activeIndex: ""
    };
  },
  watch: {
    $router() {
      this.handleSelect(this.activeIndex);
    }
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index;
      console.log(index,"---",this.$router);

      this.$router.push({
        path: index
      });
    },
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  display: flex;
  width: 100%;
}
.nav-menu {
  width: 200px;
}
.main-box{
  width: calc(100% - 200px);
  padding: 10px;
}
</style>
