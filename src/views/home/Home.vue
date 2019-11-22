<template>
  <div id="home">
    <nav-bar id="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :banners="result.banners"></home-swiper>
    <recommend-view :recommends="result.recommends"></recommend-view>
    <feature-view :feature_link="result.feature_link"></feature-view>

    <ul>
      <li>数据1</li>
      <li>数据2</li>
      <li>数据3</li>
      <li>数据4</li>
      <li>数据5</li>
      <li>数据6</li>
      <li>数据7</li>
      <li>数据8</li>
      <li>数据9</li>
      <li>数据10</li>
      <li>数据11</li>
      <li>数据12</li>
      <li>数据13</li>
      <li>数据14</li>
      <li>数据15</li>
      <li>数据16</li>
      <li>数据17</li>
      <li>数据18</li>
      <li>数据19</li>
      <li>数据20</li>
      <li>数据21</li>
      <li>数据22</li>
      <li>数据23</li>
      <li>数据24</li>
      <li>数据25</li>
      <li>数据26</li>
      <li>数据27</li>
      <li>数据28</li>
      <li>数据29</li>
      <li>数据30</li>
      <li>数据31</li>
      <li>数据32</li>
      <li>数据33</li>
      <li>数据34</li>
      <li>数据35</li>
      <li>数据36</li>
      <li>数据37</li>
      <li>数据38</li>
      <li>数据39</li>
      <li>数据40</li>
      <li>数据41</li>
      <li>数据42</li>
      <li>数据43</li>
      <li>数据44</li>
      <li>数据45</li>
      <li>数据46</li>
      <li>数据47</li>
      <li>数据48</li>
      <li>数据49</li>
      <li>数据50</li>
    </ul>
  </div>
</template>

<script>
  import {getHomeMultidata, getHomeData} from "../../network/home";


  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  export default {
    name: "Home",
    components: {
      FeatureView,
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        result: {
          banners: [],
          recommends: [],
          feature_link: 'http://act.mogujie.com/zzlx67',
        },
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.result.banners = res.data.data.banner.list
        this.result.recommends = res.data.data.recommend.list
      }).catch(error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    z-index: 10;
  }
  #home-nav {
    background-color: var(--color-high-text);
    color: var(--color-background);
    font-weight:700;
    font-size: 18px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
