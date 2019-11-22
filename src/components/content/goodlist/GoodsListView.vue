<template>
  <div class="goods-list">
       <good-list-item  class="good-item" v-for="item in goods" :good-item="item"/>
  </div>
</template>

<script>
  import GoodListItem from "./GoodListItem";
  export default {
    name: "GoodsListView",
    components: {GoodListItem},
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list{
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
  }
</style>
