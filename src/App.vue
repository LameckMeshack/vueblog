<template>
  <div id="app" class="bg-gray-500">
    <Navbar />
    <Create />
    <!-- <Login /> -->
    <!-- <SingleBlog /> -->
    <!-- <Header /> -->
    <!-- <div class="flex flex-wrap p-5">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div> -->
    <Footer />
  </div>
</template>

<script>
// import BlogCard from "./components/BlogCard.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Create from "./Pages/Create.vue";
// import Login from "./Pages/Login.vue";
// import SingleBlog from "./components/SingleBlog.vue";
// import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Navbar, Footer, Create },
};
</script>

<style></style>
