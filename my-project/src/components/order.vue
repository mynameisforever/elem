<template>
	<div class="content">
		<Head titles="订单"></Head>
		<div class="nothing">
			<img src="../assets/order.png">
			<p>最近三个月无外卖订单记录</p>
		</div>
		
	</div>
</template>

<script>
	import Head from "./component/head"
	export default {
		components:{
			Head
		},
		mounted(){
			this.$store.commit("changeElemTitle",true);
		}
	}
</script>

<style lang="scss" scoped>
	.content{

		.nothing{
			box-sizing: border-box;
			width: 100%;
			text-align: center;
			height:4rem;
			padding-top: 2rem;
			p{
				font-size: 0.34rem;
				font-weight: 400;
				color: #6a6a6a;
			}
		}
	}
</style>