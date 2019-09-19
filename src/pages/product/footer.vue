<template>
	<div class="footer">
		<div class="footer-item" to='/home'>
			<i class="iconfont icon-home"></i>
			<span>店铺</span>
		</div>

		<div class="footer-item" to='/category'>
			<i class="iconfont icon-category"></i>
			<span>客服</span>
		</div>

		<div class="footer-item" to='/cart'>
			<i class="iconfont icon-cart"></i>
			<span>收藏</span>
		</div>

		<div class="footer-item-text cart" to='/personal'>
			
			<span>加入购物车</span>
		</div>

		<div class="footer-item-text go" to='/personal'>
			
			<span>马上抢</span>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'ProductFooter'
	};
</script>

<style lang='scss' scoped>
	@import '~assets/scss/mixins';
	
	.footer{
		width: 100%;
		height: 50px;
		box-shadow: 0 -1px 2px 0 red;
		background:#fff;
		@include flex-between();
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 1500;
		
		.footer-item{
			flex: 1;
			@include flex-center(column);
		}

		&-item-text{
			flex: 2;
			text-align: center;
			height: 50px;
			line-height: 50px;			
		}

		.cart{
			background: #FF9500;
		}

		.go{
			background: #FF0036;
		}
	}
	
</style>