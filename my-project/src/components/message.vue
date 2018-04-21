<template>
	<div class="message">
		<Head titles="账户信息"></Head>
			<div class="pic">
				<b>头像</b>
				<p>
					<svg viewBox="0 0 122 122" id="avatar-default" width="1.2rem" height="1.2rem"><path fill="#DCDCDC" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
					<svg viewBox="0 0 547 987" class="arrow"><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></svg>
				</p>
			</div>	
		<div class="name">
			<b>用户名</b>
			<p>
				<span>{{name}}</span>
			<svg viewBox="0 0 547 987" class="arrow"><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></svg>
			</p>
		</div>
		<h2>账号绑定</h2>
		
		
		<div class="phone">
			<b>
				<i class="iconfont icon-shouji" style="color: #0085ff;"></i>
				手机
			</b>
			<p>
				<span>{{phonenumber}}</span>
			<svg viewBox="0 0 547 987" class="arrow"><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></svg>
			</p>
		</div>
		<h2>安全设置</h2>
		
		<div class="password" @click="updatepsd">
			<b>
				修改密码
			</b>
			<p>
		
			<svg viewBox="0 0 547 987" class="arrow"><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></svg>
			</p>
		</div>
		
		<button type="button" class="out" @click="handclick">退出登录</button>
		
	</div>
</template>

<script>
	import Head from "./component/head"
	import router from "./../router";
	export default{
		data(){
			return {
				name:'',
				phonenumber:"",
			}

		},
		components:{
			Head
		},
		methods:{
			handclick(){
				removeCookie("user");
				router.push({path:"/profile"});
			},
			updatepsd(){
				router.push({path:"/profile/message/updatepsd"});
			}
		},
		mounted(){
			this.$store.commit("changeElemTitle",false);
			
			var obj = JSON.parse(getCookie("user"));
			
			this.name = obj.name;
			this.phonenumber=obj.phone;
		}
	}
</script>

<style lang="scss" scoped>
	.message{
		width: 100%;
		height: 100%;
		padding-top: .88rem;
		box-sizing: border-box;
		font-size: 0.32rem;
			div{
				display: flex;
				justify-content: space-between;
				background: #fff;
				height:1.4rem;
				border-bottom: 1px solid #eee;
				b{
					height: 1rem;
					line-height:1rem;
				}
				p{
					line-height:1rem;
					display: flex;
					align-items:center;
					.arrow{
						width: 0.36rem;
						height: 0.36rem;
						/*margin-bottom: 0.3rem;*/
					}
				}
			}
			.pic{
				padding: 0.2rem 0.28rem;
				height: 1rem;				
				#avatar-default{
					width: 1rem;
					height: 1rem;
				}
			}
			.name{
				height: .44rem;
				padding: 0.28rem;
				display: flex;
				justify-content: space-between;
				span{
					color:#666;
					display: block;
					height: .44rem;
					line-height:.44rem;
				}
				b{
					height: .44rem;
					line-height:.44rem;
				}
			}
			
		h2{
			margin: 0.32rem 0rem 0.14rem 0.28rem;
		    font-size: .2rem;
		    height: 0.28rem;
		    color: #999;
		    font-weight: 400;
		}
		.phone{
			padding: 0.28rem;
			height: .44rem;
			b{
				height: .44rem;
				line-height:.44rem;
			}
		}
		.password{
			padding: 0.28rem;
			height: .44rem;
			b{
				color:rgba(0,0,0,.5);
				height: .44rem;
				line-height:.44rem;
			}
		}
		.out{
			width: 100%;
			display: block;
			text-align: center;
		    padding: .28rem 0;
		    margin: .4rem 0;
		    color: #ff5339;
		    border: none;
		    font-size: .32rem;
		    font-weight: 700;
		    outline: none;
		    background-color: #fff;
		}
	}
</style>