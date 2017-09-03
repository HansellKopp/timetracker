import Vue from 'vue'
import Router from 'vue-router'
import View from '@/components/View'
import List from '@/components/List'
import Edit from '@/components/Edit'
import ElementUI from 'element-ui'
import moment from 'vue-moment'
import VueLocalStorage from 'vue-localstorage'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import VueSweetAlert from 'vue-sweetalert'

Vue.use(Router)
Vue.use(moment)
Vue.use(ElementUI, { locale })
Vue.use(VueLocalStorage)
Vue.use(VueSweetAlert)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/view',
      name: 'View',
      component: View,
      props: true
    },
    {
      path: '/new',
      name: 'Create',
      component: Edit
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit,
      props: true
    }
  ]
})
