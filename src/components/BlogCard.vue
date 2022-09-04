<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="max-w-lg mx-auto">
    <div
      class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5"
    >
      <a href="#">
        <img
          class="rounded-t-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {{ title.split(" ").splice(0, 3).join(" ") }}
          </h5>
        </a>
        <p class="font-normal text-gray-700 mb-3">
          {{ body.split(" ").splice(0, 15).join(" ") }}
        </p>
        <router-link
          :to="{ name: 'singleblog', params: { id } }"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        >
          Read more
        </router-link>
        <button
          @click="updateBlog(id)"
          class="ml-16 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        >
          update
        </button>
        <button
          @click="deleteBlog(id)"
          class="ml-16 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        >
          delete
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogCard",

  props: {
    id: {
      required: true,
    },

    title: {
      // type: String,
      required: true,
    },
    body: {
      // type: String,
      required: true,
    },
  },
  //delete request
  methods: {
    deleteBlog(id) {
      confirm("Are you sure you want to delete this blog?");
      fetch(`http://localhost:3000/blogs/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.$emit("deleteBlog", id);
          // refresh
          this.$router.go();
        });
    },
  },
};
</script>
