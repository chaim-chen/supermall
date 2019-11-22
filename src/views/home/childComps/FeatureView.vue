<template>
    <div class="feature">
      <a :href="feature_link">
        <img src="~assets/img/home/recommend_bg.jpg" alt="">
      </a>
    </div>
</template>

<script>
  export default {
    name: "FeatureView",
    props:{
      feature_link:String
    }
  }
</script>

<style scoped>
  img{
    width: 100%;
  }
</style>
