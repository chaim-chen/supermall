<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles"
         :class="{active:index===currentIndex}" @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        currentIndex:0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      itemClick(index){
         this.currentIndex=index;
         this.$emit('itemclick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    background-color: var(--color-background);
  }

  .tab-control-item {
    flex: 1;
    color: var(--color-text);
  }

  .tab-control-item span{
     padding: 5px;
  }
  .active {
     color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }



</style>
