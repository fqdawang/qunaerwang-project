<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="tabbar-wrapper" v-if="$route.path === '/home' ? true : false">
      <router-link
        :to="item.url"
        :class="['tabbar-item']"
        v-for="item in tabs"
        :key="item.id"
      >
        <i :class="['iconfont', item.iconClass]"></i>
        <span class="item-title">{{ item.value }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tabs: [
        {
          id: 0,
          value: "首页",
          iconClass: "icon-shouyeshouye",
          url: "/home",
        },
        {
          id: 1,
          value: "订单",
          iconClass: "icon-dingdan",
          url: "/order",
        },
        {
          id: 2,
          value: "客服",
          iconClass: "icon-kefu",
          url: "/customer",
        },
        {
          id: 3,
          value: "我的",
          iconClass: "icon-wode",
          url: "/mine",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.router-link-active {
  color: #18c0c8;
}
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
</style>
