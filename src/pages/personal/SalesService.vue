<template>
	<div class="service">
		<me-navbar class="service-info">
			<i class="iconfont" slot="left">&#xe625;</i>
			<span slot="left" class="my-service">售后服务</span>
		</me-navbar>

		<me-navbar class="service-info">
			<i class="iconfont" slot="left">&#xe63f;</i>
			<span slot="left" class="my-service">意见反馈</span>
		</me-navbar>

		<me-navbar class="service-info">
			<i class="iconfont" slot="left">&#xe645;</i>
			<span slot="left" class="my-service">收货地址</span>
		</me-navbar>





		
	</div>
</template>

<script>
	import MeNavbar from 'base/navbar';
	export default {
		name:'SalesService',
		components: {
			MeNavbar
		}
	}
</script>

<style lang="scss" scoped>
	.service{
		margin-top:10px;

		&-info{
			border-bottom:1px solid #eee;
			span{
				font-size:14px;
				margin-left:10px;
				color:black;
			}

			i{
				font-size:18px;
			}
		}
	}
</style>
