<template>
  <swiper >
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "HomeSwiper",
    components:{
      Swiper,SwiperItem
    },
    data(){
      return {
         isLoad:false
      }
    },
    props:{
      banners:{
         type:Array,
         default(){
           return []
         }
      }
    },
    methods:{
      imageLoad(){  //图片加载完成的监听
        if (!this.isLoad){
          this.$emit("imageLoad")
          this.isLoad=true
        }
      }
    }
  }
</script>

<style scoped>

</style>
