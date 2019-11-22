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
    mounted() {
      this.scroll=new BScroll(document.querySelector('.wrapper'),{
          probeType:2,
          scroll:true,
          click:true
       })
      this.scroll.on('scroll',position=>{
        console.log(position);
      })
    },
    methods:{
       scrollTo(x,y,time=300){
          this.scroll.scrollTo(x,y,time);
       }
    }
  }
</script>

<style scoped>

</style>
