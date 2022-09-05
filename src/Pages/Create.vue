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
              <!-- //filter using id -->
              {{ blogs.filter((blog) => blog.id === 1) }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "CreateForm",
  methods: {
    send() {
      axios
        .post("http://localhost:3000/blogs", this.formData)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "home" });
          this.formData = {
            title: "",
            image: "",
            body: "",
          };
        })

        .catch((error) => {
          console.log(error);
        });
    },
    // filter blogs
  },
  data() {
    return {
      formData: {
        title: "",
        image: "",
        body: "",
      },
    };
  },
  //getting all blogs from the store
  computed: {
    ...mapGetters(["blogs"]),
  },
};
</script>
