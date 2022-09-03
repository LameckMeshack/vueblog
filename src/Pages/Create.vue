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
                type="file"
                v-on:change="onFileChange"
                class="border-2 border-gray-300 p-2 w-full"
                name="description"
                id="description"
                required="required"
              />
            </div>

            <div class="mb-8">
              <!-- <label class="text-xl text-gray-600">Content <span class="text-red-500">*</span></label></br> -->
              <ckeditor
                name="content"
                placeholder="Write your content here..."
                v-model="formData.content"
                class="border-2 border-gray-500"
              >
              </ckeditor>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import CKEditor from "@ckeditor/ckeditor4-vue";
export default {
  name: "CreateForm",
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.image = file;
    },
    send() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);
      //   formData.append("image", this.image);
      //   this.$store.dispatch("createPost", formData);
      console.log(formData.title);
    },
  },
  data() {
    return {
      formData: {
        title: "",
        content: "",
        // onFileChange: "",
      },

      //   editorConfig: {
      //     // The configuration of the editor.
      //   },
    };
  },
};
// CKEditor.replace("content");
</script>
