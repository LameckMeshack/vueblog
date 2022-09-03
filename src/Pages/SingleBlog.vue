<template>
  <div>
    <p v-if="loading"><Loading /></p>

    <div class="flex px-32 bg-gray-100 py-10">
      <!-- blog read -->

      <div class="w-3/5">
        <button @click="back">More Blogs</button>
        <h1 class="text-4xl py-2 text-center text-bold">
          {{ blog.title }}
          <span class="text-black-500 text-sm">{{ id }}</span>
        </h1>
        <div><img src="../assets/banner2.jpeg" alt="" /></div>
        <p>
          {{ blog.body }}
        </p>
        <div
          class="flex mx-auto items-center justify-center shadow-lg mt-4 mx-8 mb-4 max-w-lg"
        >
          <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
            <div class="flex flex-wrap -mx-3 mb-6">
              <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">
                Add a new comment
              </h2>
              <div class="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                  class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                  name="body"
                  placeholder="Type Your Comment"
                  required
                ></textarea>
              </div>
              <div class="w-full md:w-full flex items-start md:w-full px-3">
                <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                  <svg
                    fill="none"
                    class="w-5 h-5 text-gray-600 mr-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <!-- <p class="text-xs md:text-sm pt-px">Some HTML is okay.</p> -->
                </div>
                <div class="-mr-1">
                  <input
                    type="submit"
                    class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                    value="Post Comment"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- sidebar -->
      <div class="w-2/5 px-16 bg-blue-100 rounded-t-lg ml-24">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quaerat a
        aspernatur! Quas, temporibus explicabo neque eveniet quasi ipsam
        inventore veniam ullam cumque provident sit beatae esse porro obcaecati
        impedit!
        <hr class="h-1.5 border-solid bg-gray-900" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Loading from "@/components/Loading.vue";
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      loadings: false,
      blog: null,
      error: "",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  mounted: function () {
    this.loading = true;
    axios
      .get(`http://localhost:3000/blogs/${this.id}`)
      .then((res) => {
        this.loading = false;
        this.blog = res.data;
        console.log(this.blog);
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  },
  components: { Loading },
};
</script>
