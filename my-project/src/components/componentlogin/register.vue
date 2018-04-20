<template>
	<div>
			<section>
				<input type="text" autocapitalize="on" placeholder="手机/邮箱/用户名" v-model="username">
			</section>
			<section>
				<input placeholder="密码" type="password" autocapitalize="on" v-model="password">
			</section>
			<button @click="handclick">注册</button>
			
			
	</div>
</template>

<script>
	import router from "../../router";
	import axios from "axios";
	export default {
		data(){
			return {
				username:'',
				password:''
			}
		},
		methods:{
			handclick(){
				axios.post("/register",{
					username:this.username,
					password:this.password
				}).then(res=>{
					if(res.data==0){
						alert("注册失败");
					}else if(res.data=="用户已注册"){
						alert("该用户已经注册");						
					}else{
						router.push({path:"/login"});
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

	section{
		width: 100%;
		height: .96rem;
		margin-top: .32rem;
		input{
			box-sizing: border-box;
			width: 100%;
		    height: 100%;
		    padding-left: .2rem;
		    border: 1px solid #ddd;
		    border-radius: .08rem;
		    color: #333;
		}
	}
	button{
		font-family: inherit;
		display: block;
	    width: 100%;
	    height: .84rem;
	    margin-top: .6rem;
	    border-radius: .1rem;
	    background: #4cd96f;
	    color: #fff;
	    cursor: pointer;
	    text-align: center;
	    font-size: .32rem;
	    line-height: .84rem;
	    outline: none;
    	border: none;
	}
    
</style>