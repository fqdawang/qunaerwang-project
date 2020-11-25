<template>
  <div class="wallet-wrapper">
    <div class="title">
      <i class="iconfont icon-shouyeshouye"></i>
      我的钱包
    </div>
    <div class="money-w">
      <div class="money-item">
        <p class="num">0.00</p>
        <p class="des">账户余额</p>
      </div>
      <div class="money-item">
        <p class="num">0</p>
        <p class="des">星券</p>
      </div>
      <div class="money-item">
        <p class="num">
          0
          <span class="card-num">张</span>
        </p>
        <p class="des">银行卡</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wallet",
};
</script>
<style lang="less" scope>
.wallet-wrapper {
  background-color: #fff;
  .title {
    font-size: 0.9rem;
    padding: 1rem;
    
    i {
    }
  }

  .money-w {
      display: flex;
      justify-content: space-around;
      padding: 1rem 0;
    .money-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      .num {
          margin-bottom: 0.5rem;
      }

      .des {
      }
    }
  }
}
</style>