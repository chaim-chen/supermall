<template>
    <div class="wrapper">
        <div class="content">
             <slot></slot>
        </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return {
          scroll:null
      }
    },

    props:{
      pullUpLoad:{
        type:Boolean,
        default:false
      },
      probeType:{
         type: Number,
         default: 0
      }

    },
    mounted() {
      this.scroll=new BScroll(document.querySelector('.wrapper'),{
          probeType:3,
          pullUpLoad:this.pullUpLoad,
          click:true
       })
      //监听滚动事件
      this.scroll.on('scroll',position=>{
        this.$emit('scroll',position);
      })
      //监听上拉事件
      this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp');
      })
    },
    methods:{
       scrollTo(x,y,time=300){
          this.scroll&&this.scroll.scrollTo(x,y,time);
       },
      finishPullUp(){
         this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll&&this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
