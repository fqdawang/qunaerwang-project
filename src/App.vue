<template>
  <div id="app">
    nihao
    <Tabbar></Tabbar>
    <div class="father">
      father
      <div class="son">son</div>
    </div>
  </div>
</template>

<script>
import Tabbar from './components/Tabber'

export default {
  name: "App",
  components: {
    Tabbar
  },
};
</script>

<style lang="less">
#app {
}
.father {
  color: red;
  .son {
    color: green;
  }
}
</style>
