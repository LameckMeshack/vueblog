<template>
  <div class="flex flex-wrap p-5">
    <BlogCard
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :content="blog.body"
      :id="blog.id"
    />
  </div>
</template>
<script>
import BlogCard from "./BlogCard.vue";
import axios from "axios";
export default {
  name: "BlogsContainer",
  data() {
    return { loading: false, blogs: null, error: "" };
  },
  //   props: {
  // blogs: {
  //   type: Array,
  //   required: true,
  // },
  //   },
  components: { BlogCard },
  mounted: function () {
    this.loading = true;
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.loading = false;
        this.blogs = res.data;
        // console.log(this.blogs);
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  },
};
//fetch data from api using axios
</script>
