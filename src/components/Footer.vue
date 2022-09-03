<template>
  <footer class="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
    <div
      class="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0"
    >
      <div class="flex flex-row pr-3 space-x-4 sm:space-x-8">
        <div
          class="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-white-400"
        >
          <!-- <div class="w-5 h-5 rounded-full dark:text-gray-900">
            <img src="../assets/logo.jpeg" alt="" />
          </div> -->
          <img class="rounded-full" src="../assets/logo.jpeg" alt="" />
        </div>
        <ul class="flex flex-wrap items-center space-x-4 sm:space-x-8">
          <li>
            <a rel="#" href="#">Terms of Use</a>
          </li>
          <li>
            <a rel="#" href="#">Privacy</a>
          </li>
        </ul>
      </div>
      <p>&copy; 2022 <a rel="#" href="#">Cytonn</a>. All rights reserved.</p>
      <ul class="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
        <li>
          <a rel="#" href="#">Instagram</a>
        </li>
        <li>
          <a rel="#" href="#">Facebook</a>
        </li>
        <li>
          <a rel="#" href="#">Twitter</a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterComponent",
};
</script>
