<template>
  <div>
    <div class="bg- white-500 navbar">
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
            >CyBorge
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <router-link
            :to="{ name: 'home' }"
            class="text-sm font-bold text-gray-800 hover:text-blue-400"
          >
            Home
          </router-link>
          <router-link
            :to="{ name: 'search' }"
            class="text-sm font-bold text-gray-800 hover:text-blue-400"
          >
            Search
          </router-link>

          <router-link
            :to="{ name: 'create' }"
            class="text-sm font-bold text-gray-800 hover:text-blue-400"
            v-if="isLoggedIn"
          >
            create
          </router-link>
          <router-link
            :to="{ name: 'login' }"
            class="text-sm font-bold text-gray-800 hover:text-blue-400"
            v-if="!isLoggedIn"
          >
            Login
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "NavbarComponent",
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>
<style scoped>
.navbar {
  background-color: rgb(101 109 116);
}
</style>
