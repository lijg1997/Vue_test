<template>
  <li class="card">
    <a :href="item.html_url" target="_blank">
      <img :src="item.avatar_url" style="width: 100px" />
    </a>
    <p class="card-text">{{ item.login }}</p>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
