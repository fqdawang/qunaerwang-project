<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <div class="tabbar-wrapper">
      <div
        :class="['tabbar-item', item.isActive ? 'active' : '']"
        v-for="(item, index) in tabs"
        :key="item.id"
        @click="handleGetIndex(index)"
      >
        <i :class="['iconfont', item.iconClass]"></i>
        <span class="item-title">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tabs"],
  methods: {
    handleGetIndex(index){
      this.$emit('getindex',index)
    }
  },
};
</script>

<style lang="less" scope>
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
  padding-bottom: 50px;
}
</style>