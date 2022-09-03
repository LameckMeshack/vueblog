<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Footer, Navbar },
};
</script>
