<template>
	<div class="mine-navbar">
		<!-- $slots是用来判断这个插槽是否有内容。这里是在子组件中定义了slot插槽，然后在父组件(pages/home/header.vue)中传递。但是不传递的话，会显示默认的（这里默认的是空的），所以通过$slots来判断是否为空，若是为空的话，则不显示。 -->
		<div class="mine-navbar-left" v-if='$slots.left'> 
			<slot name='left'></slot>
		</div>
		<div class="mine-navbar-center" v-if='$slots.center'>
			<slot name='center'></slot>
		</div>
		<div class="mine-navbar-right" v-if='$slots.right'>
			<slot name='right'></slot>
		</div>
		<h1 class="mine-navbar-title" v-if='title' >
			<span v-text='title' class="mine-navbar-text"></span>
		</h1>
	</div>
</template>

<script>
	export default{
		name:'MeNavbar',
		props:{
			title:{
				type:String,
				default:''
			}
		}
	};
</script>

<style lang='scss' scoped="">

	@import '~assets/scss/mixins';

	.mine-navbar{
		@include flex-between();
		height:50px;
		background-color:#fff;

		&-left{
			margin-left:10px;
					
			~ .mine-navbar-right{   
				position:static;
			}
		}
		
		&-center{
			margin:0 10px;
			flex:1;
			@include flex-center();

			
			~ .mine-navbar-right{
				position:static;
			}
		}
				
		&-right{
			
			position:absolute;
			right:0;
			@include flex-center();
			height:100%;

			margin-right:10px;
		}

		&-title{
			position: absolute;
			top:0;
			bottom:0;
			left:20%;
			right:20%;
			@include flex-center();
			text-align: center;
		}

		&-text{
			width: 100%;
			font-size:18px;
			line-height: 1.5;
			@include ellipsis();
		}
	}
</style>