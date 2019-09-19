<template>
	<div class="order">
		<me-navbar class="order-info">
			<i class="iconfont" slot="left">&#xe646;</i>
			<span slot="left" class="my-order">我的订单</span>
			<span slot="right" class="my-all-order">查看我的全部订单</span>
			<i class="iconfont" slot="right">&#xe62d;</i>
		</me-navbar>
		<div class="g-tabbar">
			<div class="g-tabbar-item" to='/home'>
				<i class="iconfont">&#xe63f;</i>
				<span>待付款</span>
			</div>

			<div class="g-tabbar-item" to='/category'>
				<i class="iconfont">&#xe640;</i>
				<span>待收货</span>
			</div>

			<div class="g-tabbar-item" to='/cart'>
				<i class="iconfont">&#xe641;</i>
				<span>待评价</span>
			</div>

			<div class="g-tabbar-item" to='/personal'>
				<i class="iconfont icon-personal"></i>
				<span>退货/退款</span>
			</div>
		</div>

	</div>
</template>

<script>
	import MeNavbar from 'base/navbar';
	export default {
		name: 'Order',
		components: {
			MeNavbar
		}
	}
</script>

<style lang="scss" scoped>
	.order{
		margin-top:10px;
		font-size:14px;
		&-info{
			border-bottom:1px solid #eee;
			span{
				font-size:14px;
			}

			i{
				font-size:18px;
			}

			.my-order{
				margin-left:10px;
				color:black;
			}

			.my-all-order{
				margin-right:10px;
			}
		}
	}

	.g-tabbar{
		height:80px;
	}
</style>