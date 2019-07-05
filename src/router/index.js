import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import gameinfo from '@/components/gameinfo'
import myspace from '@/components/myspace'
import login from '@/components/login'
import signin from '@/components/signin'
import gamelist from '@/components/gamelist'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

//Vue.use(Vuetify)
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.use(Router)

export default new Router({
	mode:'history',
	base:__dirname,
  routes: [
    {
      path: '/',
      //name: 'Index',
      component: Index
    },
	{
		path:'/gameinfo',
	//	name:'gameinfo',
		component:gameinfo
	},
	{
		path:'/myspace',
		component:myspace
	},
	{
		path:'/login',
		component:login
	},
	{
		path:'/signin',
		component:signin
	},
	{
		path:'/gamelist',
		component:gamelist
	}
  ]
})
