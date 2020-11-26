<template>
  <div class="login-tab-wrapper">
    <div class="title">
      <div
        :class="['title-item', item.isActive ? 'active' : '']"
        @click="handleIndex(index)"
        v-for="(item, index) in titleList"
        :key="item.id"
      >
        {{ item.value }}
      </div>
    </div>
    <!-- 内容 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LoginTab",
  props: ["titleList"],
  methods: {
    handleIndex(index) {
      this.$emit("choose", index);
    },
  },
};
</script>
<style lang="less" scope>
.login-tab-wrapper {
  .title {
    background-color: #18c0c8;
    display: flex;
    padding: 0.5rem;
    .title-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1rem;
      border: 1px solid #fff;
      padding: 0.3rem 0;
    }
    .active {
      background-color: #fff;
      color: #18c0c8;
    }
  }
}
</style>