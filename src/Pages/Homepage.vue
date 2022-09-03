<template>
  <div>
    <Header />
    <div class="flex flex-wrap p-5">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import BlogCard from "@/components/BlogCard.vue";
export default {
  name: "HomePage",
  components: { Header, BlogCard },
};
</script>
