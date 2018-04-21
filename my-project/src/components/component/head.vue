<template>
	<header>
		
			<div @click="handclick">
				<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4="/>
			</div>
		
		<h1>{{titles}}</h1>
	</header>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			handclick(){
				window.history.back(-1);
			}
		},
		props:["titles"]
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
			cursor: pointer;
			img{
				float: left;
				width:30%;
				height: 40%;
				
			}
			
		}
	}
</style>