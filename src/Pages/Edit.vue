<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
          <form @submit.prevent="send">
            <div class="mb-4">
              <label class="text-xl text-gray-600"
                >Title <span class="text-red-500">*</span></label
              >
              <input
                type="text"
                class="border-2 border-gray-300 p-2 w-full"
                name="title"
                id="title"
                value=""
                v-model="formData.title"
                required
              />
            </div>

            <div class="mb-4">
              <label class="text-xl text-gray-600">Image</label>
              <input
                type="text"
                v-model="formData.image"
                class="border-2 border-gray-300 p-2 w-full"
                name="description"
                id="description"
                required="required"
              />
            </div>
            <div class="mb-8">
              <textarea
                name="body"
                placeholder="Write your body here..."
                v-model="formData.body"
                class="border-2 border-gray-500 p-2 w-full h-96"
              >
              </textarea>
            </div>
            <div class="flex p-1">
              <select
                class="border-2 border-gray-300 border-r p-2"
                name="action"
              >
                <option>Save and Publish</option>
                <option>Save Draft</option>
              </select>
              <button
                role="submit"
                class="p-3 bg-blue-500 text-white hover:bg-blue-400"
                required
              >
                Submit
              </button>
            </div>
          </form>
          <!-- //filter using id -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "EditPage",
  data() {
    return {
      allBlogs: [],
      UpdateBlog: "",
      formData: {
        title: "",
        image: "",
        body: "",
      },
    };
  },
  methods: {
    send() {
      axios
        .put(`http://localhost:3000/blogs/${this.$route.params.id}`, {
          title: this.formData.title,
          image: this.formData.image,
          body: this.formData.body,
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  // watch:{
  //   console.log(blogs)
  // },

  computed: {
    //getting blog by id from the store
    ...mapGetters({ blogs: "blogs" }),
  },
  created: function () {
    this.allBlogs = this.blogs;
    this.UpdateBlog = this.allBlogs.filter(
      (blog) => blog.id === parseInt(this.$route.params.id)
    );
    console.log("here");
    console.log(this.UpdateBlog);
    this.formData.title = this.UpdateBlog[0].title;
    this.formData.image = this.UpdateBlog[0].image;
    this.formData.body = this.UpdateBlog[0].body;
  },
};
</script>
