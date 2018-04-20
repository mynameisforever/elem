import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);//注册

import axios from "axios";
const store = new Vuex.Store({

	state:{
		isShow:true, //公用的状态
	},

	mutations:{
		//只能同步
		changeElemTitle:function(state,payload){
			console.log(payload);
			//改变状态
			state.title=payload;
		}
	}

})

export default store;