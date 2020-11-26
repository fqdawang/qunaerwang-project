<template>
  <div class="home-wrapper">
    <!-- nav-->
    <div class="top-nav-wrapper">
      <router-link
        to="/list"
        class="top-nav-item"
        v-for="(item, index) in navList"
        :key="index"
      >
        <img :src="item.imgSrc" alt="" />
        <span>{{ item.title }}</span>
      </router-link>
    </div>
    <!-- 内容 -->
    <HomeContent></HomeContent>
  </div>
</template>
<script>
import HomeContent from "./components/HomeContent";
export default {
  name: "Home",
  data() {
    return {
      navList: [],
    };
  },
  created() {
    this.getNavList();
  },
  methods: {
    getNavList() {
      this.axios.get("api/home.json").then((res) => {
        this.navList = res.data.nav;
      });
    },
  },
  components: {
    HomeContent,
  },
};
</script>

<style lang="less" scoped>
.home-wrapper {
  width: 100%;
}
.top-nav-wrapper {
  padding: 1rem 0 0.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .top-nav-item {
    width: 20%;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    img {
      width: 51px;
      height: 51px;
    }

    span {
      padding-top: 0.3rem;
    }
    &:nth-last-of-type(-n + 15) {
      img {
        width: 29px;
        height: 29px;
      }
    }
  }
}
</style>