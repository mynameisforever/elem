<template>		
		<div class="my">
			<Head titles="我的"></Head>
			
			<router-link tag="section" :to="toUrl" >
				<div class="login">
					<svg viewBox="0 0 122 122" id="avatar-default" width="1.2rem" height="1.2rem"><path fill="#DCDCDC" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path></svg>
					
					<div class="login1">
						<p class="login1-1">{{name}}</p>	
						<p class="login1-2">
							<i class="iconfont icon-shouji"></i>
							<span>{{phone}}</span>
						</p>
						
					</div>
					<span>
						<svg fill="rgba(255,255,255)" viewBox="0 0 1024 1024" id="arrow-right" class="icon" width=".2rem" height=".2rem"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
					</span>
				</div>
			</router-link>
			
			<div class="center">
				<a href="">
					<p>
					   <svg fill="orange">
						   <svg viewBox="0 0 48 48" id="profile-balance" width="100%" height="100%"><path d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7 28c.6 0 1 .4 1 1s-.4 1-1 1h-6v5c0 .6-.4 1-1 1s-1-.4-1-1v-5h-6c-.6 0-1-.4-1-1s.4-1 1-1h6v-4h-6c-.6 0-1-.4-1-1s.4-1 1-1h5.6c-.6 0-1.3-.3-1.6-.8l-4.6-5.5c-.4-.4-.2-.8.4-.8h1.1c.6 0 1.3.3 1.6.8l4.3 5.1 4.3-5.1c.4-.4 1.1-.8 1.6-.8h1.1c.6 0 .7.3.4.8l-4.6 5.5c-.3.5-1 .8-1.6.8h6c.6 0 1 .4 1 1s-.4 1-1 1h-6v4h6z" class="st0"></path></svg>
						</svg>
						
						
						
					</p>
					<p>钱包</p>
				</a>
				<a href="">
					<p>
						<svg fill="rgb(255, 95, 62)">
							<svg viewBox="0 0 48 48" id="luckybag" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7.6 15H16.4c.1.1.1.2.1.4.4 2.5 3.3 4.3 7.1 4.4 2.4 0 4.8-.6 6.1-1.6.4-.3 1.1-.3 1.4.2.3.5.3 1.1-.2 1.4-1.6 1.3-4.3 2.1-7.1 2.1h-.5c-3.9-.2-7-2-8.3-4.6V32c0 .5.7 1 1.4 1h15.2c.8 0 1.4-.5 1.4-1V16c0-.5-.7-1-1.4-1zM35 32c0 1.7-1.5 3-3.4 3H16.4c-1.9 0-3.4-1.3-3.4-3V16c0-1.4 1-2.5 2.5-2.9h.2c.1-.1.3-.1.4-.1h15.5c1.9 0 3.4 1.3 3.4 3v16z"></path></svg>
						</svg>
					</p>
					<p>红包</p>
				</a>
				<a href="">
					<p>
						<svg fill="limegreen">
							<svg viewBox="0 0 48 48" id="profile-coins" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm-9 26.8v3.3c0 1.2 3.6 2.9 9 2.9s9-1.7 9-2.9v-3.3c-2.1 1.3-5.6 1.9-9 1.9-3.4.1-6.9-.6-9-1.9zM24 15c-5.8 0-9 1.8-9 2.8 0 1 3.2 2.8 9 2.8s9-1.8 9-2.8c0-1-3.2-2.8-9-2.8zm-9 5.6V24c0 .9 3.2 2.8 9 2.8s9-1.8 9-2.8v-3.4c-2.1 1.3-5.6 1.9-9 1.9-3.4 0-6.9-.6-9-1.9zM35 24v6.1c0 3.2-5.5 4.9-11 4.9s-11-1.7-11-4.9V17.8c0-3.1 5.5-4.8 11-4.8s11 1.6 11 4.8V24z"></path></svg>
						</svg>
					</p>
					<p>金币</p>
				</a>
			</div>
			
			<div class="same" >
				<div>
					<svg viewBox="0 0 16 16" class="addr" width=".36rem" height=".35rem"><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z"></path><path fill="#4AA5F0" d="M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333M2.273 6.509a5.48 5.48 0 0 1-.051-.732 5.778 5.778 0 1 1 11.556 0 5.54 5.54 0 0 1-.085.948 5.704 5.704 0 0 1-.258.999 6.565 6.565 0 0 1-.081.22c-.016.039-.03.078-.047.116C11.932 11.45 8 13.778 8 13.778S3.734 11.273 2.535 7.64a5.756 5.756 0 0 1-.262-1.132zm8.584 6.701c2.516.124 5.143.43 5.143 1.068 0 .901-5.233 1.138-8 1.138-2.768 0-8-.237-8-1.138 0-.639 2.627-.944 5.143-1.068 1.22 1.044 2.3 1.61 2.404 1.663.14.07.296.108.453.108.156 0 .314-.038.454-.109.104-.052 1.184-.618 2.403-1.662z"></path></g></svg>
					<p class="address1">
						我的地址
						<span>
							<svg fill="rgba(0,0,0,.3)" viewBox="0 0 1024 1024" id="arrow-right" class="icon" width=".2rem" height=".2rem"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
						</span>
					</p>
				</div>
				
			</div>
			
			<div class="same">
				<div>
					<svg viewBox="0 0 16 16" class="addr" width=".36rem" height=".35rem"><g fill="none" fill-rule="evenodd"><path fill="#94D94A" d="M2.257.5h11.486a1 1 0 0 1 .998.936l.757 11.728a2 2 0 0 1-1.996 2.129H2.498a2 2 0 0 1-1.996-2.129L1.26 1.436A1 1 0 0 1 2.257.5zm9.658 3.782C11.82 6.452 10.14 8.18 7.95 8.18c-2.202 0-3.925-1.747-4.003-3.933a.594.594 0 0 1 .36-1.075.596.596 0 1 1 .25 1.14c.109 1.82 1.548 3.26 3.393 3.26 1.853 0 3.263-1.455 3.357-3.287a.595.595 0 0 1 .3-1.113.595.595 0 1 1 .307 1.11z"></path></g></svg>
					<p class="address1" style="border-bottom: 1px solid #eee;">
						金币商城
						<span>
							<svg fill="rgba(0,0,0,.3)" viewBox="0 0 1024 1024" id="arrow-right" class="icon" width=".2rem" height=".2rem"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
						</span>
					</p>
			</div>
			<div>
				<i class="iconfont icon-liwuhe"></i>
				
				<p class="address1">
					分享拿5元现金
					<span>
						<svg fill="rgba(0,0,0,.3)" viewBox="0 0 1024 1024" id="arrow-right" class="icon" width=".2rem" height=".2rem"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
					</span>
				</p>
			</div>
			</div>
			
			
			<div class="same">
				<div>
					<i class="iconfont icon-kefu"></i>
					<p class="address1" style="border-bottom: 1px solid #eee;">
						我的客服
						<span>
							<svg fill="rgba(0,0,0,.3)" viewBox="0 0 1024 1024" id="arrow-right" class="icon" width=".2rem" height=".2rem"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
						</span>
					</p>
			</div>
			
			<div>
				
				<!--<i class="iconfont icon-changyonglogo40" ></i>-->
				<svg fill="rgb(60, 171, 255)" viewBox="0 0 40 40" id="download" width=".36rem" height=".36rem"><path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"></path></svg>
				<p class="address1">
					下载饿了么APP
					<span>
						<svg fill="rgba(0,0,0,.3)" viewBox="0 0 1024 1024" id="arrow-right" class="icon" width=".2rem" height=".2rem"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
					</span>
				</p>
			</div>
			</div>
			
	
			
		</div>
</template>

<script>
	import Head from "./component/head"
	import axios from "axios";
export default {
		data(){
			return {
				name:"登录/注册",
				phone:"登录后享更多权益",
				toUrl:"/login"
			}

		},
		components:{
			Head
		},
		mounted(){
			
			this.$store.commit("changeElemTitle",true);
			
			if(getCookie("user")){
				var obj=JSON.parse(getCookie("user"));
				this.name = obj.name;
				this.phone = obj.phone;
				this.toUrl = "/profile/message";
				
				
			}else{
				if(this.$route.query.id){
					//console.log(this.$route.query.id)
					this.toUrl = "/profile/message"; // 改变跳转路径
					
					
					axios.post("/myinfo",{
						id:this.$route.query.id,
					}).then(res=>{
						this.name = res.data[0].name.slice(0,1)+"****"+res.data[0].name.slice(-1);
						this.phone = res.data[0].username.slice(0,3)+"****"+res.data[0].username.slice(-4);
						setCookie("user",JSON.stringify({name:this.name,phone:this.phone,id:this.$route.query.id}),7);
					});
				}else{
					this.toUrl = "/login";
				}
			}
		}
	}
</script>


<style lang="scss" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.my{
		width: 100%;
		height: 100%;
		padding-top: .88rem;
		box-sizing: border-box;
		section{
			width: 100%;
			height: 2.2rem;
			background: #0af ;
			opacity: .96;
			.login{
				width: 6.9rem;
				height: 1.2rem;
				padding: 0.5rem 0.3rem;
				color: #fff;
				align-items: center;
				display: flex;
				.login1{
					width: 5.14rem;
					height: 0.94rem;
					display: flex;
					flex-direction: column;
					margin-left: 0.34rem;
					p{
						overflow: hidden;
					    white-space: nowrap;
					    text-overflow: ellipsis;
					}
					.login1-1{
						font-size: 0.42rem;
						font-weight: 700;
						margin-bottom: 0.16rem;
						
					}
					.login1-2{
						font-size: 0.24rem;
						display: flex;
						line-height: 0.28rem;
						.iconfont{
							font-size: 0.14rem;
						}
						span{
							width: 2.16rem;
							height: 0.28rem;
						}
						
					}
					span{
						display: block;
						width: 0.2rem;
						height: 0.42rem;
					}
					
				}
			}
		}
		.center{
			width: 100%;
			height: 1.68rem;
			display: flex;
			background: #fff;
			border-bottom: 1px solid #ddd;
			a{
				
				display: block;
				flex: 1;
				padding:0.36rem 0 ;
				border-right: 1px solid #ddd;
				p{
					text-align:center;
					font-size: 0.24rem;
					font-weight: 700;
					svg{
						width: 0.52rem;
						height: 0.52rem;
					}
				}
				p:last-child{
					margin-top: 0.1rem;
				}
			}
			a:last-child{
				border: none;
			}
		}
		.same{
			    margin-top: .2rem;
			    border-top: 1px solid #ddd;
			    border-bottom: 1px solid #ddd;
			    font-size: .32rem;
			    background: #fff;
			    padding-left: .25rem;
			    div{
			    	height: 0.89rem;
					display: flex;
					align-items: center;
					.iconfont{
						font-size: .33rem;
					    margin-left: 0.1rem;
		    			margin-right: 0.1rem;
					}
					.icon-kefu{
					    color: #0085ff;
					}
					.icon-liwuhe{
						color: rgb(252, 123, 83);
					}
					.icon-changyonglogo40{
					    color: #fff;
					    background: #0085ff;
					}
					svg{
						margin-left: 0.1rem;
		    			margin-right: 0.1rem;
					}
					.addr{
						    margin-left: 0.1rem;
		    				margin-right: 0.1rem;
					}
					.address1{
						width: 6.64rem;
						padding: 0.28rem 0.2rem 0.28rem 0;
						display: flex;
						justify-content: space-between;
					}
				}
		}
		/*.address{
			display: flex;
			align-items: center;
			#addr{
				    margin-left: 10px;
    				margin-right: 10px;
			}
			.address1{
				width: 6.64rem;
				padding: 0.28rem 0.2rem 0.28rem 0;
				display: flex;
				justify-content: space-between;
			}
		}*/
	}
	
</style>