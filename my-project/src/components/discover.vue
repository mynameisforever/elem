<template>
	<div>
		<Head titles="发现"></Head>
		<div class="banner">
			
			<img src="https://fuss10.elemecdn.com/a/5c/c19ebf245df0e585f8e7f983c5f68gif.gif"/>
		</div>
		<section>
			<a href="" v-for="data in datalist">
				<div>
					<p>{{data.title}}</p>
					<p>{{data.subtitle}}</p>
				</div>
				<img :src="data.main_pic_hash.slice(data.main_pic_hash.length-3)==='png'?'https://fuss10.elemecdn.com'+'/'+ data.main_pic_hash.slice(0,1) + '/' +data.main_pic_hash.slice(1,3)+'/'+data.main_pic_hash.slice(3)+ '.png':'https://fuss10.elemecdn.com'+'/'+ data.main_pic_hash.slice(0,1) + '/' +data.main_pic_hash.slice(1,3)+'/'+data.main_pic_hash.slice(3)+ '.jpeg'"/>
			</a>
		</section>
		

		<section>
			<div class="gift">
				<span class="bf"></span>
				<i class="iconfont icon-icon-test"></i>
				限时好礼
				<span class="af"></span>
				<p class="money_change_gift">金币换豪礼</p>
			</div>
			
			<div class="giftlist">
				<a href="" v-for="data in giftlist">
					<img :src="data.image_hash.slice(data.image_hash.length-3)==='png'?'https://fuss10.elemecdn.com'+'/'+ data.image_hash.slice(0,1) + '/' +data.image_hash.slice(1,3)+'/'+data.image_hash.slice(3)+ '.png':'https://fuss10.elemecdn.com'+'/'+ data.image_hash.slice(0,1) + '/' +data.image_hash.slice(1,3)+'/'+data.image_hash.slice(3)+ '.jpeg'"/>
					
					<p>{{data.title}}</p>
					<p><span>{{data.points_required}}金币</span><del>¥{{data.original_price}}</del></p>
					<span class="discount">{{data.corner_marker}}</span>
				</a>
				
			</div>
			<p class="more">查看更多 > </p>
		</section>
		
		
		<Foot></Foot>
		

		
	</div>
	
	
	
	
	</template>
	
<script>
	import Head from './component/head'
	import Foot from './component/foot'
	import axios from "axios";
	export default{
		data(){
			return {
				datalist:[],
				giftlist:[]
			}
		},
		components:{
			Head,
			Foot
		},
		mounted(){
			axios.get("/restapi/member/v1/discover?platform=1&block_index=0").then(res=>{
				console.log(res.data[1])
				this.datalist = res.data[1]
			});
			
			axios.get("/restapi/member/gifts/suggest").then(res=>{
				
				this.giftlist = res.data.slice(0,3);
				//console.log(this.giftlist);
			});
			
			this.$store.commit("changeElemTitle",true);
		
		}
		
	}
</script>

<style lang="scss" scoped>
	header{
		top: 0;
		position: fixed;
		background: #0af;
		height: .88rem;
		overflow: hidden;
		width: 100%;
		h1{
			color: white;
			font-size: .3rem;
			text-align: center;
			position: absolute;
			left: 50%;
			margin-left: -.27rem;
			top: 50%;
			margin-top: -.2rem;
		}
		div{
			width: .88rem;
			height: .88rem;
			display: flex;
			justify-content: center;
			align-items: center;
			img{
				float: left;
				width:30%;
				height: 40%;
				
			}
			
		}
	}
	.banner{
		img{
			width:100%;
			display: block;
			margin-top: .88rem;
			margin-bottom: .1rem;
		}
	}
	
	section:nth-of-type(1){
		overflow: hidden;
		a{
			box-sizing: border-box;
			background: white;
			display: flex;
			width: 50%;
			float: left;
			border-bottom: 1px solid #ededed;
			height: 1.6rem;
			justify-content: space-between;
			padding: 0 .3rem;
			align-items: center;
			div{
				float: left;
					p:nth-of-type(1){
						font-size: .33rem;
						color: rgb(232, 143, 40);
						margin-bottom: 0.12rem;
					}
					p:nth-of-type(2){
						font-size: 0.1rem;
						color: #999;
					}
					img{
						float: right;
					}
			}
			img{
				width: .9rem;
			}
		}
		a:nth-of-type(1){
			display: block;
			border-right: 1px solid #ededed;
			box-sizing: border-box;
			height: 3.19rem;
			padding: .44rem .22rem .12rem .32rem;
			div{
				float: none;
			}
			img{
				width: 1.5rem;
				float: right;
				margin-top: .3rem;
			}
		}
		a:nth-of-type(2){
			p:nth-of-type(1){
				color: rgb(255, 153, 0);
			}
		}
		a:nth-of-type(3){
			p:nth-of-type(1){
				color: rgb(27, 169, 225);
			}
		}
		a:nth-of-type(4),a:nth-of-type(5){
			p:nth-of-type(1){
				color: rgb(245, 120, 93);
			}
		}
		a:nth-of-type(4){
			border-right: 1px solid #ededed;
		}
	}
	section:nth-of-type(2){
		background: white;
		padding-top: .39rem;
		margin-top: .2rem;
		margin-bottom: 1.51rem;
	}
	.gift{
		text-align: center;
		
		i{
			color: rgb(245, 120, 93);
		}
		span{
			border-top:1px solid #333;
			width: .28rem;
			display: inline-block;
			position: relative;
			height: 0;
			margin: .16rem .07rem .13rem .07rem;
		}
		.bf:after{
			position: absolute;
			content: "";
    		background: #333;
    		height: .09rem;
    		width: .09rem;
    		border-radius: 50%;
    		top:-.06rem;
    		right: 0;
		}
		.af:after{
			position: absolute;
			content: "";
    		background: #333;
    		height: .09rem;
    		width: .09rem;
    		border-radius: 50%;
    		top:-.06rem;
    		left: 0;
		}
		.money_change_gift{
			text-align: center;
			color: #999;
			font-size: .2rem;
			padding-bottom: .16rem;
		}
	}
	.giftlist{
		display: flex;
		padding: .24rem 0 .3rem .3rem;
		flex-wrap: wrap;
		.discount{
			background: #000000;
			font-size: .2rem;
			color: white;
			position: absolute;
			left: 0;
			top: 0;
			padding: .05rem;
		}
		a{
			flex: 1;
			display: block;
			position: relative;
			img{
					width: 2.22rem;
					height: 2.2rem;
				}
			p{
				font-size: .2rem;
			}
			p:nth-of-type(1){
				color: #333;
				margin-bottom: .1rem;
			}
			p:nth-of-type(2){
				span{
					display:inline-block;
					color: #ff5339;
					margin-right: .07rem;
				}
				del{
					color: #aaa;
					font-size: .001rem;
				}
			}	
		}
		
	}
	.more{
			font-size: .265rem;
			color: #aaa;
			text-align: center;
			width: 100%;
			padding: .3rem 0 .36rem 0;
			font-family: simsun;
		}
	
</style>