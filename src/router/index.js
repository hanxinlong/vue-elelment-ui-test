import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test/test'
import TestTable from '@/components/table-test/table-test'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Test,
      children:[
        {
          path: '/test',
          component: TestTable,
          meta:{
            title:"表格测试"
          }
        }
      ]
    }
  ]
})
