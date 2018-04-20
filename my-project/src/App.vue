<template>
  <div id="app">
    <Head v-if="isShow"></Head>
    <router-view></router-view>
    <foot v-if="isShow"></foot>
   {{geturl()}}
  </div>
</template>

<script>
	
	import foot from './components/component/foot';
	import Head from './components/component/head'
export default {
  name: 'App',
  
  data:function(){
  	return {
  		isShow:true
  	}
  },
  components:{
  	foot,
  	Head
  },
  methods:{
  	geturl:function(){
  		if(this.$route.path=='/login/loginin' || this.$route.path=='/login/register'){
  			this.isShow = false;
  		}else{
  			this.isShow = true;
  		}
  		console.log(window.location)
  	}
  },

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
#app{
	height: 100%;
	width: 100%;
}
</style>
