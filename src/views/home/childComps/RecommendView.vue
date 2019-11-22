<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
          <div class="recommend-text">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: 10px solid #f2f2f2;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
  }
  img{
    width: 65px;
    height: 65px;
  }
  .recommend-text{
    font-size: 12px;
    margin-top: 10px;
  }
</style>
