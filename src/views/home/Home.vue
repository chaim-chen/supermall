<template>
  <div id="home">
    <nav-bar id="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <home-swiper :banners="result.banners"></home-swiper>
      <recommend-view :recommends="result.recommends"></recommend-view>
      <feature-view :feature_link="result.feature_link"></feature-view>
      <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
      <goods-list-view :goods="result.goods['pop'].list"></goods-list-view>
    </scroll>
    <back-top class="back-top" @click.native="backTop"></back-top>
  </div>
</template>

<script>
  import {getHomeMultidata, getHomeData} from "../../network/home";
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "components/content/tabControl/TabControl";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  import home_data from "./model/homemodel";
  import GoodsListView from "../../components/content/goodlist/GoodsListView";

  export default {
    name: "Home",
    components: {
      GoodsListView,
      BackTop,
      Scroll,
      TabControl,
      FeatureView,
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        result: home_data
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeNewsData(1)
      this.getHomePoPData(1)
      this.getHomeSellData(1)
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          console.log(res);
          this.result.banners = res.data.data.banner.list
          this.result.recommends = res.data.data.recommend.list
        }).catch(error => {
          console.log(error);
        })
      },
      getHomePoPData(page){
        getHomeData('pop',page).then(res=>{
          console.log(res);
          for (let i=0;i<20;i++){
            const item={
              img:'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg',
              title:'流行数据',
              collect:i,
            }
            this.result.goods['pop'].list.push(item)
          }
        })
      },
      getHomeSellData(page){
        getHomeData('sell',page).then(res=>{
          console.log(res);
          for (let i=0;i<20;i++){
            const item={
              img:'"https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg"',
              title:'新款数据'+i,
              collect:i,
            }
            this.result.goods['sell'].list.push(item)
          }
        })
      },
      getHomeNewsData(page){
        getHomeData('news',page).then(res=>{
          console.log(res);
          for (let i=0;i<20;i++){
            const item={
              img:'"https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg"',
              title:'精选数据'+i,
              collect:i,
            }
            this.result.goods['news'].list.push(item)
          }
        })
      },
      backTop(){
        this.$refs.scroll.scrollTo(0,0)
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  #home-nav {
    background-color: var(--color-high-text);
    color: var(--color-background);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
  .content{
     /*height: calc(100% - 49px);*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
