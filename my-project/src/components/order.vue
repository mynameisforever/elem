<template>
	<div>
		<Head titles="订单"></Head>
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

<style>
</style>