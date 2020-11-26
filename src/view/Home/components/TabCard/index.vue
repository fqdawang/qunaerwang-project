<template>
  <div class="tab-card-wrapper">
    <div class="tab-card-content">
      <a
        href="javascript:void(0)"
        class="content-item"
        v-for="item in tabContent"
        :key="item.id"
        @click="handleToDetail(item)"
      >
        <div class="img-w">
          <img :src="item.pic" alt="" />
          <div class="mask" v-if="item.tip">
            <div class="mask-city">{{ item.tip[0] }}</div>
            <div class="mask-tour">{{ item.tip[1] }}</div>
          </div>
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="sub-title" v-if="item.subTitle">{{ item.subTitle }}</div>
        <div class="price">￥{{ item.price }}</div>
      </a>
    </div>
    <div class="btn-w">
      <a href="javascript:void(0)" class="btn-more">更多特惠门票</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeCard",
  props: ["tabContent"],
  methods: {
    handleToDetail(goods) {
      // 注意：如果提供了path，params会被忽略，所以要用name
      this.$router.push({ name: "detail", params: { goods } });
    },
  },
};
</script>
<style lang="less" scoped>
.tab-card-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.content-item {
  display: flex;
  flex-direction: column;
  width: 49%;
  .img-w {
    width: 100%;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      vertical-align: top;
    }

    .mask {
      width: 60%;
      height: 40%;
      position: absolute;
      bottom: 0;
      left: 20%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mask-city {
        color: #fff;
        font-size: 0.8rem;
      }

      .mask-tour {
        color: #ffde00;
      }
    }
  }

  .title {
    color: #000;
    font-size: 0.8rem;
    margin: 0.1rem 0;
  }
  .sub-title {
    color: rgb(117, 117, 117);
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price {
    color: #ff7452;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }
}
.btn-w {
  border: 1px solid #18c0c8;
  border-radius: 3px;
  height: 2.2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn-more {
    color: #18c0c8;
    font-size: 0.9rem;
  }
}
</style>