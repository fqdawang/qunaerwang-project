<template>
  <div>
    <div class="title-w">
      <div
        :class="['title-item', item.isActive ? 'active' : '']"
        v-for="(item, index) in tabs"
        :key="item.id"
        @click="handleGetIndex(index)"
      >
        {{ item.value }}
      </div>
    </div>
    <div class="content">
      <!-- 内容区域 -->
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tabs"],
  methods: {
    handleGetIndex(index) {
      this.$emit('getindex',index)
    },
  },
};
</script>
<style lang="less" scope>
.title-w {
  display: flex;
  margin: 0.5rem 0;
  .title-item {
    height: 1.7rem;
    color: #666;
    border-radius: 3px;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d7d7d7;
    margin-right: 0.5rem;
  }
  .active {
    background-color: #18c0c8;
    color: #fff;
    border-color: #18c0c8;
  }
}
</style>