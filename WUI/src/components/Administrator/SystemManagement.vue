<template>
	<div>
		<div class="hello hp-operateBox">
			<div class="o-title">
				<h2>{{title}}</h2>
			</div>
			<div class="splitBar"></div>
			<div class="input-box">
		   <el-form :inline="true" :model="formInline" class="demo-form-inline">
			  <el-form-item label="姓名">
			    <el-input v-model="formInline.user" placeholder="姓名"></el-input>
			  </el-form-item>
			  <el-form-item label="类型">
			    <el-select v-model="formInline.region" placeholder="类型">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			   <el-form-item label="状态">
			    <el-select v-model="formInline.region2" placeholder="状态">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="所属机构">
			    <el-input v-model="formInline.jigou" placeholder="所属机构"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">查询</el-button>
			  </el-form-item>
			</el-form>
			</div>
		</div>
		<div class="hello hp-operateBox">
			<div>
				<Systable></Systable>
			</div>
		</div>
	</div>
</template>
<script>
	import Systable from './systable.vue'//引用子组件
export default {
	name: 'App',
    data() {
      return {
      	title:'管理员管理',
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    components:{
    	Systable,
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
	.hp-operateBox .input-box .el-input{
		width: 200px !important;
	}
</style>
