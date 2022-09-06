<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div class="s-container">
    <div class="s-input-wrapper">
      <input type="text" v-model="query" placeholder="search" />
    </div>
    <div class="s-results">
      <div class="s-result-placeholder">
        <div class="placeholder-item">
          <div></div>
        </div>
      </div>
      <div class="s-result-items">
        <div>
          <div v-if="!results.length">
            <div class="s-result-item">
              <div class="s-result-item-content">
                <Loading />
                <div class="s-result-item-title">No results found</div>
              </div>
            </div>
          </div>
          <div v-else>
            <BlogCard
              v-for="result in results"
              :key="result.id"
              :title="result.title"
              :body="result.body"
              :id="result.id"
            />
            <!-- <div
              v-for="result in results"
              :key="result.id"
              class="s-result-item"
            >
              <div class="s-result-item-content">
                <div class="s-result-item-title">{{ result.title }}</div>
                <div class="s-result-item-description">
                  {{ result.description }}
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BlogCard from "./BlogCard.vue";
import Loading from "./Loading.vue";

export default {
  name: "SearchComponent",
  data() {
    return {
      allBlogs: [],
      query: "",
      results: [],
      loading: false,
      message: "",
    };
  },
  computed: {
    ...mapGetters({ blogs: "blogs" }),
    // filteredBlogs() {
    //   return this.allBlogs.filter((blog) => {
    //     return blog.title.toLowerCase().includes(this.query.toLowerCase());
    //   });
    // },
  },
  created: function () {
    this.allBlogs = this.blogs;
  },
  watch: {
    query() {
      this.loading = true;
      this.message = "";
      this.results = [];
      if (this.query.length > 0) {
        this.results = this.allBlogs.filter((blog) => {
          return blog.title.toLowerCase().includes(this.query.toLowerCase());
        });
        console.log(this.results);
        this.loading = false;
        if (this.results.length === 0) {
          this.message = "No results found";
          console.log(this.message);
        }
      } else {
        this.loading = false;
      }
    },
  },
  components: { BlogCard, Loading },
};
</script>

<style scopped>
.s-container,
.s-results {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
}
.s-container {
  margin: 10px 40px;
  grid-gap: 5px;
}
.s-input-wrapper > input {
  height: 50px;
  width: 100%;
  background-color: #efefef;
  font-size: 1.5rem;
  padding: 2px 5px;
}

.s-result-items > div,
.placeholder-item,
.s-status-message {
  font-size: 1rem;
  background-color: rgb(255, 255, 255, 0.9);
  backdrop-filter: blur(10%);
  padding: 4px 5px;
  min-height: 30px;
  display: flex;
  justify-content: space-between;
}
.s-result-items > div:nth-child(n + 2) {
  border-top: 2px solid #d8d8d8;
}
.category {
  font-style: italic;
  color: rgb(158, 158, 158);
  font-size: medium;
  font-weight: 600;
}

.placeholder-item > div {
  position: relative;
  width: 100%;
  height: 22px;
  padding: 5px;
  border-radius: 4px;
  background: rgb(225, 225, 225);
  background: linear-gradient(
    90deg,
    rgba(227, 227, 227, 1) 0%,
    rgba(207, 207, 207, 1) 7%,
    rgba(207, 207, 207, 1) 13%,
    rgba(227, 227, 227, 1) 25%
  );
  background-size: 900%;
  background-position: 100% 0%;
  animation: placeholder-animation 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.s-status-message > p {
  width: 100%;
  text-align: center;
}

@keyframes placeholder-animation {
  0% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
