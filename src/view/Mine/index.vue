<template>
  <div class="mine-wrapper">
    <div class="top-w">
      <img
        class="top-bg"
        src="https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg"
        alt=""
      />
      <div class="back">
        <span @click="$router.go(-1)">《</span>
      </div>
      <div class="avatar-w" @click="handleLogin">
        <div class="avatar">
          <img
            src="https://source.qunarzz.com/usercenter/touch/avatar.png"
            alt=""
          />
        </div>
        <div class="login">登录/注册</div>
      </div>
    </div>
    <Wallet></Wallet>
    <!-- 我的订单 -->
    <div class="mine-content-w">
      <div class="item">
        <div class="name">
          <i class="iconfont icon-wode"></i>
          我的订单
        </div>
        <span>》</span>
      </div>
      <div class="item">
        <div class="name">
          <i class="iconfont icon-wode"></i>
          我的退款
        </div>
        <span>》</span>
      </div>
      <div class="item">
        <div class="name">
          <i class="iconfont icon-wode"></i>
          我的发票
        </div>
        <span>》</span>
      </div>
      <div class="item">
        <div class="name">
          <i class="iconfont icon-wode"></i>
          我的攻略
        </div>
        <span>》</span>
      </div>
      <div class="item feedback">
        <div class="name">
          <i class="iconfont icon-wode"></i>
          意见反馈
        </div>
        <span>》</span>
      </div>
      <div class="item">
        <div class="name">
          <i class="iconfont icon-wode"></i>
          关于去哪儿网
        </div>
        <span>》</span>
      </div>
    </div>
  </div>
</template>
<script>
import Wallet from "./components/Wallet";
export default {
  name: "Mine",
  components: {
    Wallet,
  },
  methods: {
    handleLogin(){
      this.$router.push('login')
    }
  },
};
</script>
<style lang="less" scoped>
.mine-wrapper {
  height: 100vh;
  background-color: #ebeced;
  .top-w {
    height: 12rem;
    position: relative;
    margin-bottom: 0.5rem;
    .top-bg {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .back {
      position: relative;
      padding: 1rem;
      span {
        color: #fff;
        font-size: 1rem;
      }
    }

    .avatar-w {
      position: relative;
      text-align: center;
      .avatar {
        img {
          width: 5.5rem;
          height: 5.5rem;
        }
      }

      .login {
        color: #fff;
        font-size: 1rem;
      }
    }
  }
  .mine-content-w {
    margin-top: 0.5rem;
    .item {
      background-color: #fff;
      padding: 0.8rem 1rem;
      display: flex;
      justify-content: space-between;
      .name {
        i {
            margin-right: 0.3rem;
        }
      }

      span {
      }
    }
    .feedback {
      margin-top: 0.5rem;
    }
  }
}
</style>