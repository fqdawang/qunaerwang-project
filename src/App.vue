<template>
  <div id="app">
    <div class="content">
      <div v-if="tabs[0].isActive">
        <Home></Home>
      </div>
      <div v-if="tabs[1].isActive">1</div>
      <div v-if="tabs[2].isActive">2</div>
      <div v-if="tabs[3].isActive">3</div>
    </div>
    <div class="tabbar-wrapper">
      <div
        :class="['tabbar-item', item.isActive ? 'active' : '']"
        v-for="(item, index) in tabs"
        :key="item.id"
        @click="handleIsActive(index)"
      >
        <i :class="['iconfont', item.iconClass]"></i>
        <span class="item-title">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import Tabbar from "./components/Tabber";
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    // Tabbar,
    Home,
  },
  data() {
    return {
      tabs: [
        {
          id: 0,
          value: "首页",
          iconClass: "icon-shouyeshouye",
          isActive: true,
        },
        {
          id: 1,
          value: "订单",
          iconClass: "icon-dingdan",
          isActive: false,
        },
        {
          id: 2,
          value: "客服",
          iconClass: "icon-kefu",
          isActive: false,
        },
        {
          id: 3,
          value: "我的",
          iconClass: "icon-wode",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    handleIsActive(index) {
      const { tabs } = this;
      tabs.forEach((ele) => {
        ele.isActive = false;
        if (ele.id === index) {
          ele.isActive = true;
        }
      });
      this.tabs = tabs;
    },
  },
};
</script>

<style lang="less">
#app {
  width: 375px;
  min-width: 375px;
  font-size: 10px;
  padding-bottom: 50px;
}
.tabbar-wrapper {
  position: fixed;
  z-index: 999999;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.active {
  color: #18c0c8;
}
.tabbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    font-size: 1.6rem;
  }

  .item-title {
  }
}
.content {
  // padding-bottom: 50px;
}
</style>
