<template>
  <div>
    <button @click="login">登录</button>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    login() {
      localStorage.setItem("name", "Tony");
    },
  },
};
</script>