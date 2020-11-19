<template>
  <div>
    <div
      class="area-item"
      v-for="(item, index) in contentList"
      :key="item.tabId"
    >
      <div class="title-h">{{ item.title }}</div>
      <HomeTab
        v-if="index === 0"
        :tabs="tabTitleOne"
        @getindex="tabOneIsActive"
      >
        <div class="content" v-if="tabTitleOne[0].isActive">
          <TabCard :tabContent="tabTotalContentOne[0]"></TabCard>
        </div>
        <div class="content" v-if="tabTitleOne[1].isActive">
          <TabCard :tabContent="tabTotalContentOne[1]"></TabCard>
        </div>
      </HomeTab>
      <HomeTab
        v-if="index === 1"
        :tabs="tabTitleTwo"
        @getindex="tabTwoIsActive"
      >
        <div class="content" v-if="tabTitleTwo[0].isActive">
          <TabCard :tabContent="tabTotalContentTwo[0]"></TabCard>
        </div>
        <div class="content" v-if="tabTitleTwo[1].isActive">
          <TabCard :tabContent="tabTotalContentTwo[1]"></TabCard>
        </div>
      </HomeTab>
    </div>
  </div>
</template>
<script>
import HomeTab from "../HomeTab";
import TabCard from "../TabCard";
export default {
  data() {
    return {
      contentList: {},
      tabTitleOne: [],
      tabTitleTwo: [],
      tabTotalContentOne: [], // 第一个tab总内容数据
      tabTotalContentTwo: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    tabOneIsActive(index) {
      let { tabTitleOne } = this;
      tabTitleOne.forEach((ele) => {
        ele.isActive = false;
        if (index === ele.tabId) {
          ele.isActive = true;
        }
      });
      this.tabTitleOne = tabTitleOne;
    },
    tabTwoIsActive(index) {
      let { tabTitleTwo } = this;
      tabTitleTwo.forEach((ele) => {
        ele.isActive = false;
        if (index === ele.tabId) {
          ele.isActive = true;
        }
      });
      this.tabTitleTwo = tabTitleTwo;
    },
    getList() {
      this.axios
        .get("http://127.0.0.1:5500/public/api/home.json")
        .then((res) => {
          const { list } = res.data;
          this.contentList = list;
          this.tabTitleOne = list[0].tabText;
          this.tabTitleTwo = list[1].tabText;

          let tabTotalContentOne = [];
          let tabTotalContentTwo = [];
          tabTotalContentOne.push(list[0].content, list[0].today);
          tabTotalContentTwo.push(list[0].content, list[0].today);

          this.tabTotalContentOne=tabTotalContentOne
          this.tabTotalContentTwo=tabTotalContentTwo
        });
    },
  },
  components: {
    HomeTab,
    TabCard,
  },
};
</script>
<style lang="less" scope>
.area-item {
  padding: 0 1rem 0.5rem;
  .title-h {
    font-weight: 700;
    font-size: 1.4rem;
  }
}
</style>