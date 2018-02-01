import Vue from 'vue'
import Router from 'vue-router'

//路由组件
import SystemManagement from '@/components/Administrator/SystemManagement'
//系统管理systemManagement.vue
import NewAdministrator from '@/components/Administrator/NewAdministrator'
//新建管理员 NewAdministrator.vue

import RoleManagement from '@/components/RoleManagement/RoleManagement'
//角色管理 RoleManagement.vue

import CreatingMaintaining from '@/components/RoleManagement/CreatingMaintaining'
//创建及维护角色 CreatingMaintaining.vue


//NewAdministrator.vue
import News from '@/components/News'
//@News路由

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'SystemManagement', component: SystemManagement },
    { path: '/NewAdministrator', name: 'NewAdministrator', component: NewAdministrator },
    { path: '/RoleManagement', name: 'RoleManagement', component: RoleManagement },
    { path: '/CreatingMaintaining', name: 'CreatingMaintaining', component: CreatingMaintaining },
  ]
})
