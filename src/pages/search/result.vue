<template>
  
  <div class="result">
    <div class="loading-container" v-show='loading'>
      <me-loading/>
    </div>
    <ul class="g-list" v-show="!loading && results.length">
      <!-- :key 的作用主要是为了高效的更新虚拟DOM -->
      <li class="g-list-item" 
          v-for="(item,index) in results" 
          :key="index"
          @click="$_search_selectItem(item[0])"
          >
        <span class="g-list-text">{{item[0]}}</span>
      </li>
    </ul>
    <div class="no-result" v-show="!loading && !results.length">没有结果</div>
  </div>
</template>

<script>
  import MeLoading from 'base/loading';
  import {getSearchResult} from 'api/search';
  import {searchMixin} from 'assets/js/mixins';
  export default {
    name: 'SearchResult',
    components: {
      MeLoading
    },
    data(){
      return{
        results:[],
        loading:false
      }
    },
    props: {
      query: {
        type: String,
        default: ''
      }
    },
    mixins:[searchMixin],
    watch:{
      query(query){
        this.getResults(query);
      }
    },
    methods:{
      getResults(keyword){
        if(!keyword){
          return;
        }

        this.loading = true; //每次获取数据之前显示loading
        getSearchResult(keyword).then(data => {
          if(data){
            this.results = data;
            this.loading = false; //获取数据之后隐藏loading
          }
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
