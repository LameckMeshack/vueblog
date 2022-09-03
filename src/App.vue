<template>
  <div id="app" class="bg-gray-500">
    <div class="flex flex-wrap">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
    <Footer />
  </div>
</template>

<script>
import BlogCard from "./components/BlogCard.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { BlogCard, Footer },
};
</script>

<style></style>
