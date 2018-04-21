<template>
	<section>
		<Head titles="账户信息"></Head>
		<ul>
		<li>
			<input type="password" placeholder="旧密码" class="changepw-3bmr-" v-model="oldpsd">

		</li>
		
		<li>
			<input type="password" placeholder="新密码" class="changepw-3bmr-" v-model="newpsd">
			
		</li>
		
		<li>
			<input type="password" placeholder="确认密码" class="changepw-3bmr-" v-model="newpsd1">
	
		</li>
	</ul>
	<button type="button" @click="handclick">
   		   确认并保存
    </button>
    
    <div class="message">{{message}}</div>
	</section>
	
</template>

<script>
	import Head from "./component/head"
	import axios from "axios";
	import router from "./../router";
	export default{
		data(){
			return {
				oldpsd:'',
				newpsd:'',
				newpsd1:'',
				message:'',
				isShow:false
			}

		},
		methods:{
			handclick(){
				var _this = this;
				if(this.newpsd==this.newpsd1 && this.newpsd!=this.oldpsd){
					axios.post('/updatepsd',{
						id:JSON.parse(getCookie("user")).id,
						oldpsd:this.oldpsd,
						password:this.newpsd
					}).then(res=>{
						console.log(res.data);
						if(res.data==1){
							this.message = "修改成功";
							setTimeout(function(){
								router.push({path:"/profile/message"});
							},1000);
						}else{
							this.message = "修改失败";
							setTimeout(function(){
								_this.message = "";
							},2000);
						}
					})
				}else if(this.newpsd==this.oldpsd && this.newpsd==this.newpsd1){
					this.message = "新密码不能与原密码相同";
					setTimeout(function(){
						_this.message = "";
					},2000);
				}else{
					this.message = "两次密码输出不一致";
					setTimeout(function(){
						_this.message = "";
					},2000);
				}
				
				
			}
		},
		components:{
			Head
		},
		mounted(){
			this.$store.commit("changeElemTitle",false);
		}
	}
</script>

<style type="text/css" lang="scss" scoped>
section{
	width: 100%;
	height: 100%;
	padding-top: .88rem;
	box-sizing: border-box;
	/*display: flex;
	flex-wrap: wrap;
	justify-content: center;*/
	ul{
		background-color: #fff;
	    border-top: 1px solid #ddd;
	    border-bottom: 1px solid #ddd;
	    width: 100%;
	    padding: .2rem .2rem 0 .2rem;
		box-sizing: border-box;   
	    li{
	    	width: 7.1rem;
	    	margin-bottom: 0.2rem;
	    	input{
	    		display: block;
			    margin-bottom: .133333rem;
			    margin-bottom: 1.333333vw;
			    width: 98%;
			    padding: .16rem 0 .16rem 0.08rem;
			    background: #f2f2f2;
			    border: 1px solid #ddd;
			    border-radius: .02rem;
			    font-size: .3rem;
	    	}
	    }
	    
	}
	button{
			display: block;
		    font-size: 0.35rem;
		    background:#3199e8;
		    text-align: center;
		    margin: 0.3rem 0.18rem;
		    padding: 0.22rem 0 0.22rem 0;
		    width: 95%;
		    border-radius: .02rem;
		    border: none;
		    outline: none;
		    font-weight: 600;
		    color: #FFF;
		    
	}
	.message{
		width: 100%;
		text-align: center;
		margin-top: 1rem;
		font-size: .3rem;
		
	}
}
	
</style>