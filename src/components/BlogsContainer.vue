<template>
  <div class="flex flex-wrap p-5">
    <p v-if="loading"><Loading /></p>
    <BlogCard
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :body="blog.body"
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
    return { loading: false, error: "" };
  },
  computed() {
    return {
      blogs() {
        return this.$store.state.blogs;
      },
    };
  },
  //paginations for blogs from the store
  methods: {
    async getBlogs() {
      this.loading = true;
      try {
        const res = await axios.get("http://localhost:3000/blogs");
        this.$store.commit("setBlogs", res.data);
        this.loading = false;
      } catch (err) {
        this.error = err.message;
        this.loading = false;
      }
    },
  },

  components: { BlogCard, Loading },
  mounted: function () {
    this.loading = true;
    axios
      .get("http://localhost:3000/blogs")
      .then((res) => {
        this.loading = false;
        this.blogs = res.data;
        this.$store.commit("setBlogs", this.blogs);
        console.log(this.$store.blogs);
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  },
};
</script>
