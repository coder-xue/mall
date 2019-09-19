<template>
	<div class="personal-info">
		<i class="iconfont">&#xe626;</i>
		<div class="text">
			<span>登陆</span>
			<span class="line">|</span>
			<span>注册</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PersonalInformation'
	}
</script>

<style lang="scss" scoped>
	@import "~assets/scss/mixins";	
	.personal-info{
		padding-top: 50px;
		width:100%;
		height:200px;
		color:#fff;
		background:#F12B1A;
		@include flex-center(column);
		font-size:16px;

		.iconfont{
			font-size:40px;
		}

		.text{
			margin-top: 15px;
			display:flex;
			justify-content:center;

			span{
				padding:0 15px;
			}
		}
	}
</style>