import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from "../components/msite"		
import CoverComponent from "../components/discover" 
import OrderComponent from "../components/order"	
import FileComponent from "../components/profile"	
import LoginComponent from "../components/login"	

Vue.use(Router)

export default new Router({
    mode:"history",
  routes: [
    {
    	path:"/",
    	component:HomeComponent
    },
    {
    	path:"/msite",
    	component:HomeComponent,
    	// meta: { requiresAuth: true } //加上meta 标签 ，待会进行询问
    },
    {
    	path:"/discover",
    	component:CoverComponent,
    },
    {
    	path:"/order",
    	component:OrderComponent,
    },
        {
    	path:"/profile",
    	component:FileComponent
    },
    {
    	path:"/login",
    	component:LoginComponent
    },
    {
    	path:"*",
    	redirect:"/home"
    }
  ]
})
