<template>
  <div id="app">
  	<TopNav></TopNav>
    <!--<img src="./assets/logo.png">-->
  <el-row>
  <el-col :span="4">
  	<Leftside></Leftside>
  </el-col>
  <el-col :span="19" style="margin-left: 25px;">
  	<router-view/>
  </el-col>
</el-row>
  </div>
</template>
<script>
import TopNav from'./components/TopNav.vue'
//@引入头部
import Leftside from'./components/Leftside.vue'
//@引入左侧导航
export default {
  name: 'App',
  components:{
  	TopNav,
  	Leftside
  }
}
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-row{
	width: 1100px;
	margin: 0 auto;
	margin-top: 20px;
}
</style>
