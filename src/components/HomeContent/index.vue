<template>
  <div>
    <div class="area-item" v-for="item in contentList" :key="item.id">
      <div class="title-h">{{ item.title }}</div>
      <div class="tabbar-wrapper">
        <!-- tab组件 -->
        <!-- <HomeTab></HomeTab> -->
      </div>
    </div>
  </div>
</template>
<script>
// import HomeTab from "../HomeTab";
export default {
  data() {
    return {
      contentList: {},
    };
  },
  created() {
    this.axios.get("http://127.0.0.1:5500/public/api/home.json").then((res) => {
      console.log(res.data.list);
      this.contentList = res.data.list;
    });
  },
  components: {
    // HomeTab,
  },
};
</script>
<style lang="less" scope>
</style>