<template>
	<div class="personal">
		<header class="g-header-container">
			<!-- 头部 -->
			<personal-header></personal-header>
		</header>
		<me-scroll>
			<!-- 登陆、注册 -->
			<personal-information></personal-information>

			<!-- 我的订单 -->
			<my-order></my-order>

			<!-- 我的资产 -->
			<my-assets></my-assets>

			<!-- 售后服务 -->
			<sales-service></sales-service>
			
			<sales-service></sales-service>

			<sales-service></sales-service>
		</me-scroll>
	</div>
</template>

<script>
	import PersonalHeader from './header';
	import MeScroll from 'base/scroll';
	import PersonalInformation from './PersonalInformation';
	import MyOrder from './MyOrder';
	import MyAssets from './MyAssets';
	import SalesService from './SalesService';
 	export default{
		name:'Personal',
		components: {
			PersonalHeader,
			MeScroll,
			PersonalInformation,
			MyOrder,
			MyAssets,
			SalesService
		}
	};
</script>

<style lang='scss' scoped="">
	@import "~assets/scss/mixins";
 	.personal {
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    background-color: $bgc-theme;
  }
</style>