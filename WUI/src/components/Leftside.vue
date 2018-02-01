<template>
<div id="Leftside">
	
	
	<el-row class="tac">
    <h5>系统管理</h5>
    <el-menu default-active="1" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">管理员管理</template>
          <el-menu-item index="1-1" :default-active="$route.path"> 
          		<router-link to="/">系统管理</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
          	<router-link to="/NewAdministrator">新建管理员</router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="角色管理">
          <el-menu-item index="1-3">
          	<router-link to="/RoleManagement">角色管理</router-link>
          </el-menu-item>
          <el-menu-item index="1-4">
          	<router-link to="/CreatingMaintaining">创建及维护角色</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
</el-row>
	
	





</div>
</template>
<script>
</script>
<style scoped="scoped">
	h5{
		background-color: #4F5866;
		color: white;
		height: 45px;
		line-height: 45px;
		font-size: 14px;
		font-weight: normal;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}
	.el-menu-item{
		width: 100%;
		min-width: 100%;
	}
	.el-menu-item a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.el-menu{
		border-right:0px;
	}
	.is-active span{ color: #6492FF;}
	.el-menu-item-group__title{ color: #e7e8e9 !important;}
	.el-menu-item{ padding: 0px;}
	.router-link-exact-active{ color:#6492ff;}
	.el-icon-tickets{ margin-right: 10px;}
</style>