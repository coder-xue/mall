<template>
  
  <div class="hot">
    <h4 class="hot-title">热门搜索</h4>
    <div class="loading-container" v-if="!host.length">
      <me-loading/>
    </div>
    <ul class="hot-list" v-else>
      <!-- //$_search_selectItem()是searchMixin下的方法 -->
      <li
        class="hot-item"
        v-for="(item,index) in host"
        :key = 'index'
        @click = "$_search_selectItem(item.hotWord)" 
      >{{item.hotWord}}</li>
    </ul>
  </div>
</template>

<script>
  import MeLoading from 'base/loading';
  import {getSearchHotKeyword} from 'api/search';
  import {searchMixin} from 'assets/js/mixins';
  // import storage from 'assets/js/storage';
  // import {SEARCH_HISTORY_KEYWORD_KEY} from './config';

  export default {
    name: 'SearchHot',
    components: {
      MeLoading
    },
    data(){
      return{
        host:[]
      }
    },
    mixins:[searchMixin],//mixins是vue提供的,表示公用代码
    created(){
      this.getHotKeyword().then(() => {
        this.$emit('loading');
      });
    },
    methods:{
      getHotKeyword(){
        return getSearchHotKeyword().then(data => {
          return new Promise(resolve => {
            if(data){
              console.log(data);
              this.host = data;
              resolve();
            }
          });
        });
      },
      // selectItem(keyword){
      //   let keywords = storage.get(SEARCH_HISTORY_KEYWORD_KEY,[]);

      //   if(keywords.length !== 0){
      //    keywords = keywords.filter(val => val !== keyword); //过滤数组
      //   }

      //   keywords.unshift(keyword);

      //   storage.set(SEARCH_HISTORY_KEYWORD_KEY,keywords);

      //   location.href = `https://s.m.taobao.com/h5?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&n=20&buying=buyitnow&q=${keyword}`;

      // }
    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

  .hot {
    padding-left: 10px;
    background-color: #fff;
    border-bottom: 1px solid $border-color;
    margin-bottom: 10px;

    &-title {
      height: 34px;
      line-height: 34px;
      font-size: $font-size-l;
      font-weight: bold;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      padding: 8px;
      background-color: #f0f2f5;
      border-radius: 4px;
      margin: 0 10px 10px 0;
      color: #686868;
    }
  }

  .loading-container {
    padding: 10px 0;
  }
</style>
