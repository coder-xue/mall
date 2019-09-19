<template>
  <div class="category">
    <header class="g-header-container">
      <category-header/>
    </header>
    <div class="g-content-container">

      <div class="sidebar">
        <category-tab @switch-tab="getCurrentId"/>
      </div>

      <div class="main">
        <category-content :curId="curId"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CategoryHeader from './header';
  import CategoryTab from './tab';
  import CategoryContent from './content';

  export default {
    name: 'Category',
    components: {
      CategoryHeader,
      CategoryTab,
      CategoryContent
    },
    data(){
      return{
        curId:''
      }
    },
    methods:{
      getCurrentId(id){
        this.curId = id;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .category {
    overflow:hidden;
    width:100%;
    height:100%;
    background-color: $bgc-theme;
  }

  .g-content-container {
    height:100%;
    display: flex;
    padding-top:50px;
    
  }
  .sidebar {
    width: 80px;
    
  }
  .main {
    flex: 1;
    height: 100%;
  }
</style>
