<template>
   
    <transition name="product">
      <div class="product">

        <!-- 头部 -->
        <header class="g-header-container">
          <ProductHeader :class="{'header-transition': isHeaderTransition}" ref="header"></ProductHeader>
        </header>

        <MeScroll>
          <!-- 轮播图 -->
          <ProductSlider :sliders="productDetial" ></ProductSlider>

          <!-- 商品价格之类信息 -->
          <ProductMiddle 
            :price="price" 
            :sell="sell"
            :title='title'
            :sales="sales"
            >
          </ProductMiddle>

          <!-- 商品评价 -->
          <ProductComment 
            :commentCount='commentCount'
            :keywords="keywords"
            :rateList="rateList"
            :seller="seller"
            >
          </ProductComment>
        </MeScroll>

        <!-- 底部导航 -->
        <ProductFooter class=footer></ProductFooter>
      </div>
    </transition>

</template>

<script>
  
  import {getProductDetial} from 'api/product';
  import ProductHeader from './header';
  import ProductSlider from './slider';
  import MeScroll from 'base/scroll';
  import ProductMiddle from './middle';
  import ProductComment from './comment';
  import ProductFooter from './footer';

  export default {
    name: 'Product',
    components:{
      ProductHeader,
      ProductSlider,
      ProductMiddle,
      MeScroll,
      ProductComment,
      ProductFooter
    },
    data(){
      return{
        productDetial:[],
        price:'',
        sell:'',
        title:'',
        sales:'',
        commentCount:'',
        keywords:[],
        rateList:{},
        seller:{},
        isHeaderTransition: false
      }
    },
    created(){
      this.getProduct();
    },
    methods:{
      getProduct(){
        return getProductDetial(this.$route.params.id).then(data => {
          return new Promise(resolve => {
            if(data){
              this.productDetial = data.item.images;//轮播图地址
              this.sell=data.item.commentCount;//销量
              this.price=JSON.parse(data.mockData).price.price.priceText;//价格
              this.title=data.item.title; //标题
              this.sales=data.item.commentCount;//已卖
              this.commentCount=data.item.commentCount;//评论数量
              this.keywords=data.rate.keywords;//评论关键词
              this.rateList=data.rate.rateList[0]; //评论内容
              this.seller=data.seller;//卖家信息
              resolve();
            }
          })
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
 @import "~assets/scss/mixins";
 .product {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
    z-index: $product-z-index;

    &-enter-active,
    &-leave-active{
      transition: all 0.3s;
    }

    &-enter,
    &-leave-to{
      transform:translate3d(100%,0,0);
    }
  }
</style>
