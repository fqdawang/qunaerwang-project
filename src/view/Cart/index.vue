<template>
  <div class="cart-wrapper">
    <div class="list-wrapper">
      <div class="item" v-for="(item, index) in cart" :key="index">
        <div class="ck-w">
          <input
            type="checkbox"
            @change="handleChange(index)"
            :checked="item.selected"
          />
        </div>
        <div class="img-w">
          <img :src="item.pic" alt="" />
        </div>
        <div class="info-w">
          <p class="title">{{ item.title }}</p>
          <p class="price">￥{{ item.price }}</p>
        </div>
      </div>
    </div>
    <!-- 底部总价钱 -->
    <div class="foot-row">
      总价：
      <span class="foot-price">￥{{ totalPrice }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      cart: [],
      totalPrice: 0,
    };
  },
  methods: {
    handleChange(index) {
      let { cart } = this;
      let totalPrice = 0;
      cart.forEach((ele, i) => {
        if (i == index) {
          ele.selected = !ele.selected;
        }
        if (ele.selected) {
          totalPrice += Number.parseInt(ele.price);
        }
      });
      this.totalPrice = totalPrice;
      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    },
  },
  mounted() {
    //   获得cart缓存
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    this.cart = cart;
    console.log(cart);

    let totalPrice = 0;
    cart.forEach((ele) => {
      if (ele.selected) {
        totalPrice += Number.parseInt(ele.price);
      }
    });
    this.totalPrice = totalPrice;
  },
};
</script>
<style lang="less" scope>
.cart-wrapper {
  height: 100vh;
  background-color: #edeff2;
  position: relative;
  .list-wrapper {
    .item {
      display: flex;
      background-color: #fff;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      .ck-w {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
        }
      }
      .img-w {
        flex: 4;
        img {
          width: 100%;
          vertical-align: top;
        }
      }

      .info-w {
        padding-left: 1rem;
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 5.9rem;
        .title {
          font-size: 0.9rem;
        }

        .price {
          color: #ff7452;
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }
  }

  .foot-row {
    background-color: #fff;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    .foot-price {
      color: #ff7452;
      font-size: 1rem;
      font-weight: 600;
    }
  }
}
</style>