<template>
  <div class="goods-item">
    <img :src="goodItem.img" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodItem.title}}</p>
      <span>{{goodItem.zan}}</span>
      <span class="goods-collect">{{goodItem.collect}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      goodItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
         //发射事件
         this.$bus.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    text-align: center;
  }

  .goods-item img {
    width: 100%;
    border-radius: 4px;
  }
  .goods-info {
    margin-top: 3px;
    font-size: 13px;
    color: var(--color-text);
  }

  .goods-info p{
    margin-bottom: 5px;
  }
  .goods-info .goods-collect {
    margin-left: 25px;
    position: relative;
  }

  .goods-collect:before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
