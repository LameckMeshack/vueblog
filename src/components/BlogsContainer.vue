<template>
  <div class="flex flex-wrap p-5">
    <p v-if="loading"><Loading /></p>
    <BlogCard
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :content="blog.body"
      :id="blog.id"
    />
    <p v-if="error">{{ error }}</p>
  </div>
</template>
<script>
import BlogCard from "./BlogCard.vue";
import axios from "axios";
import Loading from "./Loading.vue";
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
  components: { BlogCard, Loading },
  mounted: function () {
    this.loading = true;
    axios
      .get("http://localhost:3000/blogs")
      .then((res) => {
        this.loading = false;
        this.blogs = res.data;
        console.log(this.blogs);
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  },
};
//fetch data from api using axios
</script>
