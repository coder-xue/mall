<template>
	<div class="middle">
		<MeNavbar class="detail-header">
			<span slot="left">￥{{price}}</span>
			<span slot='right'>{{sell}}件已售</span>
		</MeNavbar>
		<MeNavbar class="detail-middle">
			<span slot="left">{{title}}</span>
		</MeNavbar>
		<MeNavbar class="detail-footer">
			<span slot="left">快递包邮</span>
			<span slot="center">月销量{{sales}}</span>
			<span slot="right">广东广州</span>
		</MeNavbar>
	</div>
</template>

<script>
	import MeNavbar from 'base/navbar'; 
	
	export default{
		name:'ProductMiddle',
		components:{
			MeNavbar
		},
		props:{
			price:{
				type:String,
				default:''
			},
			sell:{
				type:String,
				default:''
			},
			sales:{
				type:String,
				default:''
			},
			title:{
				type:String,
				default:''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail-header{
		background:#EF3560;
		color:#fff;
	}
	.detail-footer{
		height:30px;
	}
</style>