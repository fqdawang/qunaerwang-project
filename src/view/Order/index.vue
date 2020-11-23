<template>
  <div>
    order
    <!-- <router-link to="/order/orderchildren">跳转到子路由</router-link> -->
    <!-- <router-link to="">跳转到test1</router-link> -->
    <button @click="handle">按钮</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Order",
  created() {
    console.log(this.$route);
    console.log(this.$route.meta.name);
  },
  methods: {
    handle() {
      this.$router.push("order/test");
    },
  },
};
</script>