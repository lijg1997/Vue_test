<template>
  <div>
    <p>您是第【{{ id }}】位访问本站的用户</p>
    <p>欢迎您：【{{ name }}】的到来</p>
  </div>
</template>

<script>
export default {
  props: ["id", "name"],
  data() {
    return {};
  }
};
</script>

<style scoped></style>
