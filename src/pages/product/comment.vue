<template>
	<div class="product-comment">
		<h3 >商品评价 ({{commentCount}})</h3>
		
		<!-- 评论关键词 -->
		<ul class="list">
			<li class="list-item" 
				v-for="(item,index) in keywords"
				>
				{{item.word}}({{item.count}})
			</li>
		</ul>
		
		<!-- 评论内容 -->
		<div class="comment-content">
			<img :src="rateList.headPic" alt="">
			<span class="userName">{{rateList.userName}}</span>
			<div class="content">{{rateList.content}}</div>
			<span class="dateTime">{{rateList.dateTime}}</span>
			
		</div>
		
		<!-- 卖家信息 -->
		<div class="seller">
			<img :src="seller.shopIcon" alt="">
			<span class="shopName">{{seller.shopName}}</span>
			<ul class="evaluates">
				<li class="list-item" v-for="(item,index) in seller.evaluates">{{item.title}} {{item.score}}</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import MeNavbar from 'base/slider';
	export default{
		name:"ProductComment",
		components:{
			MeNavbar
		},
		props:{
			commentCount:{
				type:String,
				default:''
			},
			keywords:{
				type:Array,
				default:function(){
					return [];
				}
			},
			rateList:{
				type:Object,
				default:{}
			},
			seller:{
				type:Object,
				default:{}
			}
		}
	}
</script>

<style lang="scss" scoped="">
	@import '~assets/scss/mixins';
	.product-comment{
		background:#fff;
		border-top:10px solid #F5F5F5;
		font-size:12px;

		h3{
			padding:10px;
		}

		.list{
			display: flex;
			flex-wrap:wrap;

			.list-item{
				border-radius: 10px;
				background:#FFEEEE;
				padding:5px;
				margin: 5px;
			}
		}
		
		.comment-content{
			padding: 10px;

			img{
				border-radius:50%;
				width: 30px;
				height: 30px;
			}

			.userName{
				display: inline-block;
				margin-top: 8px;
			}

			.content{
				padding-top: 5px;
       			overflow: hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 2;  //2行
			    -webkit-box-orient: vertical;
			}

			.dateTime{
				display: inline-block;
				padding-top: 5px;
			}
		}

		.seller{
			border-top: 10px solid #F5F5F5;
			padding: 10px;
			
			img{
				width: 35px;
				height: 35px;
			}
			
			.shopName{
				display: inline-block;
				margin-top: 12px;
			}

			.evaluates{
				display: flex;
				margin-top: 10px;
				height: 40px;
				line-height: 40px;
				.list-item{
					flex: 1;
					text-align: center;
				}
			}
		}
	}
	
</style>