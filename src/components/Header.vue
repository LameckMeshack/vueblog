<template>
  <div class="header text-center p-40 text-white rounded-b-xl">
    <h1 class="text-8xl font-semibold">
      <small>Welcome t<span class="text-blue-600">o</span> </small>
      <span class="text-blue-600"> CyBor</span>ge Blogs
    </h1>
    <p class="text-4xl mt-10 italic">
      <span class="text-blue-600">One of the best site to</span>
      get the latest <br />
      <span class="text-blue-600">tech news and updates fro</span>m the world of
      technology.
    </p>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
<style scoped>
.header {
  background-image: url("../assets/banner2.jpeg");
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
  background-repeat: no-repeat;
}
</style>
