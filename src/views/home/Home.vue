<template>
  <div id="home">
    <nav-bar id="home-nav"><div slot="center">首页</div></nav-bar>
    <tab-control ref="tabcontrol1" class="tabControl1" v-show="isShowTabControl" :titles="['流行','新款','精选']" @itemClick="itemClick"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" :pullUpLoad="false" @scroll="onScroll" @pullingUp="onLoadMore">
      <home-swiper :banners="banners" @imageLoad="onImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view :feature_link="feature_link"></feature-view>
      <tab-control ref="tabcontrol2" :titles="['流行','新款','精选']" @itemClick="itemClick"></tab-control>
      <goods-list-view :goods="goods[currentType].list"></goods-list-view>
    </scroll>
    <back-top  v-show="isShowBackTop" @click.native="backTop"></back-top>
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
  import {debounce} from "../../common/utils";
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
        banners: [],
        recommends: [],
        feature_link: 'http://act.mogujie.com/zzlx67',
        goods:{
          pop:{
            page:0,
            list:[]
          },
          sell:{
            page: 0,
            list: []
          },
          news:{
            page: 0,
            list: []
          }
        },
        currentType:'pop',
        isShowBackTop:false,
        isShowTabControl:false,
        tabOffSetTop:0,
      }
    },
    created() {
      console.log('created');
      this.getHomeMultidata()
      this.getHomeData('pop')
      this.getHomeData('sell')
      this.getHomeData('news')
    },
    destroyed(){
      console.log('destroyed');
    },
    mounted(){
      let refresh = debounce(this.$refs.scroll.refresh);
      //注册事件总线
      this.$bus.$on('imageLoad',()=>{
        //better-scroll加载数据高度问题   this.$refs.scroll.refresh()
        //刷新事件过于频繁
        refresh()
      })
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          console.log(res);
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        }).catch(error => {
          console.log(error);
        })
      },
      getHomeData(type){
        getHomeData(type).then(res=>{
          const  page =this.goods[type].page+1;
          for (let i=0;i<30;i++){
            let item=null;
            switch (type) {
              case 'pop':
                 item={
                  img:'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg',
                  title:'流行数据',
                  zan:2*i*page,
                  collect:i*page,
                }
                break
              case 'sell':
                 item={
                  img:'https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg',
                  title:'新款数据'+i,
                  zan:i*100,
                  collect:i,
                }
                break
              case 'news':
                 item={
                  img:'https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg',
                  title:'精选数据'+i,
                  zan:i*100,
                  collect:i+100,
                }
                break;
            }
            this.goods[type].list.push(item)
            this.goods[type].page=page
          }
        })
      },
      backTop(){
        this.$refs.scroll.scrollTo(0,0)
      },
      itemClick(index){
        switch (index) {
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='sell'
            break
          case 2:
            this.currentType='news'
            break
        }
        this.$refs.tabcontrol1.currentIndex=index;
        this.$refs.tabcontrol2.currentIndex=index;
      },
      onScroll(position){
        this.isShowBackTop=(-position.y)>1000
        this.isShowTabControl=(-position.y)>this.tabOffSetTop
      },
      onLoadMore(){
        this.getHomeData(this.currentType)
        this.$refs.scroll.finishPullUp()
      },
      //获取tab-control距离顶部的距离
      onImageLoad(){
        console.log(this.$refs.tabcontrol2.$el.offsetTop);
        this.tabOffSetTop=this.$refs.tabcontrol2.$el.offsetTop;
      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
    overflow-y: hidden;
  }

  #home-nav {
    background-color: var(--color-high-text);
    color: var(--color-background);
    /*在使用原生滚动的时候使用*/
    position: relative;
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    z-index: 9;
  }
  .tabControl {
    /*原生的吸顶效果*/
    /*position: sticky;*/
    /*top: 44px;*/
    /*z-index: 9;*/

    /*better-scroll下的处理 无效*/
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .tabControl1{
     position: relative;
     z-index: 9;
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
