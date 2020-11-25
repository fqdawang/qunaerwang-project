<template>
  <div class="detail-wrapper">
    <div class="img-w">
      <img :src="goods.pic" alt="" />
    </div>
    <p class="price">￥{{ goods.price }}</p>
    <p class="title">{{ goods.title }}</p>
    <!-- 底部 -->
    <div class="foot-row">
      <button class="cart" @click="handleGoCart">购物车</button>
      <button class="add-cart" @click="handleAddCart">
        加入购物车
        <span>{{ totalNum }}</span>
      </button>
      <button class="buy">立即购买</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {
      goods: {},
      totalNum: 0,
    };
  },
  methods: {
    handleAddCart() {
      // 获取本地存储中的购物车
      let cart = localStorage.getItem("cart") || [];
      if (cart.length) {
        cart = JSON.parse(cart);
      }
      const { goods } = this;
      //   添加个selected属性
      goods.selected = false;

      // 存储到本地
      cart.push(goods);
      this.totalNum = cart.length;
      cart = JSON.stringify(cart);
      localStorage.setItem("cart", cart);
    },
    handleGoCart() {
      this.$router.push("cart");
    },
  },
  mounted() {
    this.goods = this.$route.params.goods;
    let cart = localStorage.getItem("cart") || [];
    if (cart.length) {
      cart = JSON.parse(cart);
    }
    this.totalNum = cart.length;
  },
};
</script>
<style lang="less" scope>
.detail-wrapper {
  height: 100vh;
  background-color: #edeff2;
  position: relative;
  .img-w {
    img {
      width: 100%;
    }
  }

  .price {
    color: #ff7452;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .title {
    padding: 0 0.5rem 0.5rem;
    font-size: 1rem;
  }

  .foot-row {
    height: 50px;
    width: 100%;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #18c0c8;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
    }
    .cart {
    }

    .add-cart {
      span {
        margin-left: 0.3rem;
      }
    }

    .buy {
    }
  }
}
</style>