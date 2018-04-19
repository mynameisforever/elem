<template>
  <div id="app">
    <Discover></Discover>
    <router-view></router-view>
  </div>
</template>

<script>
	import Discover from './components/discover'
export default {
  name: 'App',
  components:{
  	Discover
  }
}
</script>

<style>
	html{
		background: #f5f5f5;
		font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
	}
	body{
		font-size: 20px;
	}
	body,html{
		width: 100%;
		height: 100%;
	}
	*{
		margin: 0;
		padding: 0;
	}
a{
	text-decoration: none;
}

</style>
