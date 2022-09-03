<template>
  <div>
    <Header />
    <BlogsContainer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import BlogsContainer from "@/components/BlogsContainer.vue";
export default {
  name: "HomePage",
  components: { Header, BlogsContainer },
};
</script>
