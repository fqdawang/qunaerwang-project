<template>
  <div class="login-wrapper">
    <div class="top-row">
      <span @click="$router.go(-1)" class="back">《</span>
      <span class="login">登录</span>
      <span class="register">注册</span>
    </div>
    <LoginTab :titleList="titleList" @choose="handleIsActive">
      <div v-if="titleList[0].isActive" class="message-connent-w">
        <div class="input-row">
          <span>手机号</span>
          <input type="text" placeholder="请输入手机号" />
        </div>
        <div class="input-row">
          <span>验证码</span>
          <input type="text" placeholder="请输入验证码" />
          <button>获取验证码</button>
        </div>
        <div class="btn-row">
          <button>登录</button>
        </div>
        <p class="tips">登录即同意去哪儿网用户服务协议和隐私政策</p>
      </div>
      <div v-if="titleList[1].isActive" class="message-connent-w">
        <div class="input-row">
          <span>账号</span>
          <input
            type="text"
            v-model="userName"
            @input="handleUserName"
            placeholder="请输入账号"
          />
        </div>
        <div class="input-row">
          <span>密码</span>
          <input
            type="password"
            v-model="password"
            @input="handlePwd"
            placeholder="请输入密码"
          />
        </div>
        <div class="btn-row">
          <button
            :class="[isLoginShow ? 'btn-show' : '']"
            @click="isLoginShow ? handleLogin() : handlenone()"
          >
            登录
          </button>
        </div>
        <p class="fond-pwd">找回密码</p>
        <p class="tips">登录即同意去哪儿网用户服务协议和隐私政策</p>
      </div>
    </LoginTab>
  </div>
</template>
<script>
import LoginTab from "./components/LoginTab";
export default {
  name: "Login",
  components: {
    LoginTab,
  },
  methods: {
    handleIsActive(index) {
      let { titleList } = this;
      titleList.forEach((ele, i) => {
        ele.isActive = false;
        if (i == index) {
          ele.isActive = true;
        }
      });
      this.titleList = titleList;
    },
    handleLogin() {
      // 存储到本地
      const { userName } = this;
      localStorage.setItem("userName", userName);
      this.$router.push("home");
    },
    handlenone() {},
    handleUserName() {
      console.log(this.userName.length);
      if (this.userName.length >= 5) {
        this.isUserName = true;
      } else {
        this.isUserName = false;
      }
      if (this.isUserName && this.isPassword) {
        this.isLoginShow = true;
      } else {
        this.isLoginShow = false;
      }
    },
    handlePwd() {
      if (this.password.length >= 5) {
        this.isPassword = true;
      } else {
        this.isPassword = false;
      }
      if (this.isUserName && this.isPassword) {
        this.isLoginShow = true;
      } else {
        this.isLoginShow = false;
      }
    },
  },
  data() {
    return {
      titleList: [
        { id: 0, value: "短信验证码登录", isActive: true },
        { id: 1, value: "账号登录", isActive: false },
      ],
      isLoginShow: false,
      userName: "",
      isUserName: false,
      password: "",
      isPassword: false,
    };
  },
};
</script>
<style lang="less" scope>
.login-wrapper {
  .top-row {
    background-color: #18c0c8;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 0.9rem;
    .back {
    }

    .login {
      font-size: 1rem;
    }

    .register {
    }
  }
  .message-connent-w {
    padding: 0.5rem;
    .input-row {
      padding: 0.5rem 0;
      font-size: 0.9rem;
      span {
        margin-right: 2rem;
        color: #00afc7;
      }

      input {
        height: 2rem;
        border: none;
      }
      button {
        float: right;
      }
    }
    .btn-row {
      button {
        color: #fff;
        background-color: #85d1db;
        width: 100%;
        border: none;
        border-radius: 3px;
        padding: 1rem 0;
        font-size: 1rem;
        margin: 1rem 0;
      }
      .btn-show {
        background-color: #18c0c8;
      }
    }
    .fond-pwd {
      text-align: right;
      color: #00afc7;
    }
    .tips {
      text-align: center;
      color: #333;
    }
  }
}
</style>