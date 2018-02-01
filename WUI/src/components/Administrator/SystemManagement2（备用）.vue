<template>
	<div>
		<div class="hello hp-operateBox">
			<div class="o-title">
				<h2>{{title}}</h2>
			</div>
			<div class="splitBar"></div>
			<div class="input-box">
				<p>
					<label>姓名</label><el-input v-model="input1" placeholder="请输入内容"></el-input>
					<label>类型</label> 
					<el-select v-model="typevalue" placeholder="请选择">
           <el-option v-for="item in optionstype" :key="item.value" :label="item.label" :value="item.value"> 
           </el-option>
					</el-select>
					<label>状态</label> 
					<el-select v-model="statevalue" placeholder="请选择">
           <el-option v-for="item in stateoptions" :key="item.value" :label="item.label" :value="item.value"> 
           </el-option>
					</el-select>
				</p>
				<p>
					<label>所属机构</label><el-input v-model="input4" placeholder="请输入内容"></el-input>
					<el-button type="primary" icon="el-icon-search">查询</el-button>
				</p>
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
	import Systable from './systable.vue'   //引用子组件
	
    export default {
	      		  name: 'HelloWorld',
			      data() {
			        return {
			        	title:'管理员管理',
			        	input1: '我是数据01',
			        	input2: '我是数据02',
			        	input3: '我是数据03',
			        	input4: '所属机构',
			        	//类型type
			        	 optionstype: [{
									          value: '选项1',
									          label: '黄金糕'
									        }, {
									          value: '选项2',
									          label: '双皮奶'
									        }, {
									          value: '选项3',
									          label: '蚵仔煎'
									        }, {
									          value: '选项4',
									          label: '龙须面'
									        }, {
									          value: '选项5',
									          label: '北京烤鸭'
									        }],
									        typevalue: '',
								//状态state	
				        	 stateoptions: [{
											          value: '选项1',
											          label: '888'
											        }, {
											          value: '选项2',
											          label: '双皮奶'
											        }, {
											          value: '选项3',
											          label: '蚵仔煎'
											        }, {
											          value: '选项4',
											          label: '龙须面'
											        }, {
											          value: '选项5',
											          label: '北京烤鸭'
											        }],
											        statevalue: '',
			        }
			      },
			      //子组件 
			      components:{
			      	Systable,
			      },
			      methods:{
			      },
			      mounted:function(){
    	             console.log(this.tableData3)
                 }
			    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
