<template>
  <div class="order-wrapper">
    <div class="title-row">
      <div class="back" @click="$router.go(-1)">《</div>
      <div class="title" @click="handleShowTitle">{{ chooseValue }}</div>
      <div class="phone">手机查单</div>
    </div>
    <div class="content">
      <TitleList
        v-if="isShow"
        :titleList="titleList"
        class="title-list"
        @choose="handlechoose"
      ></TitleList>
      <img src="https://s.qunarzz.com/q_design_font/images/empty.png" alt="" />
      <div class="no-content">暂无数据</div>
    </div>
  </div>
</template>
<script>
import TitleList from "./components/TitleList";
export default {
  name: "Order",
  data() {
    return {
      isShow: false,
      chooseValue: "全部",
      titleList: [
        { isActive: true, id: 0, value: "全部" },
        { isActive: false, id: 1, value: "机票" },
        { isActive: false, id: 2, value: "酒店" },
        { isActive: false, id: 3, value: "酒店住宿" },
        { isActive: false, id: 4, value: "汽车票·船票" },
        { isActive: false, id: 5, value: "火车票" },
        { isActive: false, id: 6, value: "门票" },
        { isActive: false, id: 7, value: "美食团购" },
        { isActive: false, id: 8, value: "专车·租车" },
        { isActive: false, id: 9, value: "旅游度假团购" },
        { isActive: false, id: 10, value: "签证" },
        { isActive: false, id: 11, value: "惠玩当地" },
        { isActive: false, id: 12, value: "保险·车险" },
        { isActive: false, id: 13, value: "全球购" },
      ],
    };
  },
  methods: {
    handleShowTitle() {
      this.isShow = !this.isShow;
    },
    handlechoose(index) {
      this.chooseValue = this.titleList[index].value;
      this.isShow = false;
    },
  },
  components: {
    TitleList,
  },
};
</script>
<style lang="less" scoped>
.order-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: #edeff2;
  .title-row {
    font-size: 1rem;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    .back {
      flex: 1;
    }

    .title {
      flex: 1;
      text-align: center;
    }

    .phone {
      flex: 1;
      text-align: right;
    }
  }

  .content {
    padding: 1rem;
    position: relative;
    .title-list {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
    }
    img {
      width: 100%;
    }
    .no-content {
      width: 100%;
      text-align: center;
      color: #999;
      font-size: 1rem;
    }
  }
}
</style>