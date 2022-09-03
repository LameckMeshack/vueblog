<template>
  <div class="flex flex-wrap p-5">
    <BlogCard />
    <BlogCard />
    <BlogCard />
  </div>
</template>
<script>
import BlogCard from "./BlogCard.vue";
export default {
  name: "BlogsContainer",
  props: {
    blogs: {
      type: Array,
      required: true,
    },
  },
  components: { BlogCard },
};
//fetch data from api using axios
</script>
