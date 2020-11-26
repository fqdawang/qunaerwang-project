<template>
  <div class="title-list-wrapper">
    <div class="list-w">
      <div
        :class="['item', item.isActive ? 'active' : '']"
        v-for="(item, index) in titleList"
        :key="item.id"
        @click="handleChoose(index)"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TitleList",
  props: ["titleList"],
  methods: {
    handleChoose(index) {
      this.$emit("choose", index);
        const { titleList } = this;
        titleList.forEach((ele, i) => {
          ele.isActive = false;
          if (i == index) {
            ele.isActive = true;
          }
        });
        this.titleList = titleList;
    },
  },
};
</script>
<style lang="less" scoped>
.title-list-wrapper {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  .list-w {
    border-top: 1px solid #ccc;
    padding: 0.8rem 1rem;
    background-color: #edeff2;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      width: 30%;
      height: 36px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.3rem 0;
      border-radius: 5px;
    }
    .active {
      color: #fff;
      font-weight: 600;
      background-color: #18c0c8;
    }
    &::after {
      width: 30%;
      content: "";
    }
  }
}
</style>