<template>
	<div class="assets">
		<me-navbar class="assets-info">
			<i class="iconfont" slot="left">&#xe63f;</i>
			<span slot="left" class="my-assets">我的资产</span>
		</me-navbar>

		<div class="g-tabbar">
			<div class="g-tabbar-item">
				<span>现金券</span>
			</div>

			<div class="g-tabbar-item">
				<span>红包</span>
			</div>

			<div class="g-tabbar-item">
				<span>余额</span>
			</div>

			<div class="g-tabbar-item">
				<span>礼品卡</span>
			</div>
		</div>
	</div>
</template>

<script>
	import MeNavbar from 'base/navbar';
	export default {
		name:'MyAssets',
		components: {
			MeNavbar
		}
	}
</script>

<style lang="scss" scoped>
	.assets{
		margin-top:10px;
		font-size:14px;

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
