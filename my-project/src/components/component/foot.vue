<template>
	<footer class="foot">
			<ul>
				<router-link tag="li" to="../msite" activeClass="active">
					<i class="iconfont icon-changyonglogo40"></i>
					<p>首页</p>
				</router-link>

				<router-link tag="li" to="../discover" activeClass="active">
						<i class="iconfont icon-faxian"></i>
						<i class="iconfont icon-faxian1"></i>
						<p>发现</p>
				</router-link>
				
				
				<router-link tag="li" to="../order" activeClass="active">
						<i class="iconfont icon-ziyuan"></i>
						<i class="iconfont icon-icondd2"></i>
						<p>订单</p>
				</router-link>
				
				
				
				<router-link tag="li" to="../profile" activeClass="active">
						<i class="iconfont icon-wode"></i>
						<i class="iconfont icon-wode01"></i>
						<p>我的</p>
				</router-link>

			</ul>
			
	</footer>
		
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		
	}
</script>


<style lang="scss" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.foot{
		width: 100%;
		height: 0.91rem;
		background: #fff;
		padding-top:0.09rem ;
		position: fixed;
		bottom: 0;
		box-shadow: 0 -0.05rem 0.1rem rgba(0,0,0,.1);
		ul{
			display: flex;
			align-items: center;
			justify-content: space-between;
			li{
				list-style: none;
				flex:1;
				display: flex;
				flex-direction: column;
				align-items: center;
				overflow: hidden;
				text-align: center;	
				
					.iconfont{
						font-size: 0.4rem;
						position: absolute;
						top: 0.1rem;
					}
					.icon-faxian1,.icon-icondd2,.icon-wode01{
						opacity: 0;
					}
					.icon-changyonglogo40{
						font-size: 0.79rem;
					    top: -4px;
					    font-weight: normal;
					}
					p{
						font-size: 0.2rem;
						color: #8e8e93;
						position: absolute;
						top: 0.6rem;
					}
					
			}
		}
	}
	
	
	.foot .active{
			color:#0085ff !important;
					p{
						color: #0085ff;
						
					}
					
					.icon-faxian1,.icon-icondd2,.icon-wode01{
						opacity: 1;
					}
			}
	
</style>