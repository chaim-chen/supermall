<template>
    <div class="good-item">
      <img :src="goodItem.img" alt="">
    </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props:{
       goodItem:{
          type:Object,
          default(){
            return {}
          }
       }
    }
  }
</script>

<style scoped>

  .good-item{
     width: 48%;
  }
  .good-item img{
     width: 100%;
  }
</style>
