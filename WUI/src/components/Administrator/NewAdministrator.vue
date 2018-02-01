<template>
	<div>
		<div class=" hp-operateBox">
			<div class="o-title">
				<h2>{{title}}</h2>
			</div>
			<div class="splitBar"></div>
			<div style="margin-top: 15px; text-align: left;">
				<el-button type="primary" icon="el-icon-success">保存</el-button>
				<el-button type="danger" icon="el-icon-error">取消</el-button>
			</div>
		</div>
			<div class=" hp-operateBox">
			<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
			  <el-form-item label="姓名">
			    <el-input v-model="formLabelAlign.name"></el-input>
			  </el-form-item>
			  <el-form-item label="联系方式">
			    <el-input v-model="formLabelAlign.region"></el-input>
			  </el-form-item>
			  <el-form-item label="管理员类型">
			    <el-input v-model="formLabelAlign.type"></el-input>
			  </el-form-item>
			</el-form>
		</div>
		</div>
</template>
<script>
	export default {
		data(){
			return{
				title:'新建系统管理员',
				labelPosition: 'top',
		        formLabelAlign: {
		          name: '',
		          region: '',
		          type: ''
		        }
			}
		},
			methods:{
				get(){
					alert(2)
				}
			}
	}
</script>
<style>
.el-input{
	width: 400px;
}
</style>