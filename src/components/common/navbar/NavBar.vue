<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center">标题</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
  }

  .left {
    width: 60px;
  }

  .center {
    flex: 1;
  }

  .right {
    width: 60px;
  }

</style>
