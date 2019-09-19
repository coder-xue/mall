<template>
	<MeNavbar class='header' title='' >
		<i class="iconfont icon-back" slot='left' @click="goBack"></i>
		<span slot="center">商品详情</span>
		<i class="iconfont icon-cart" slot='right'></i>
	</MeNavbar>
</template>

<script>
	import MeNavbar from 'base/navbar'; 

	export default{
		name:'ProductHeader',
		components:{
			MeNavbar
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped="">
	@import "~assets/scss/mixins";

	.header {
      border-bottom: 1px solid $border-color;
      background:rgba(224,40,26,0.8);
     
    .iconfont{
      color: #fff;
      font-size: $icon-font-size;
    }

    span{	
    	color:#fff;
    	font-size:14px;
    }
  
  }


</style>