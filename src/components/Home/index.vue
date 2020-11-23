<template>
  <div class="wrapper">
    <!-- nav-->
    <div class="top-nav-wrapper">
      <a
        href="javascript:void(0)"
        class="top-nav-item"
        v-for="(item, index) in navList"
        :key="index"
      >
        <img :src="item.imgSrc" alt="" />
        <span>{{ item.title }}</span>
      </a>
    </div>
    <!-- 内容 -->
    <HomeContent></HomeContent>
  </div>
</template>
<script>
import HomeContent from "../HomeContent";
export default {
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
      this.axios
        .get("api/home.json")
        .then((res) => {
          this.navList = res.data.nav;
        });
    },
  },
  components: {
    HomeContent,
  },
};
</script>

<style lang="less" scope>
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