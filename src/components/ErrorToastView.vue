<template>
  <!-- Error Toast Container -->
  <div class="fixed bottom-2 inset-x-0 mx-4">
    <div
      class="flex items-center justify-center bg-red-500 p-4 w-full px-4 rounded-md lg:w-1/3 lg:mx-auto"
    >
      <!-- Error Message -->
      <h3 class="text-white text-sm text-center">
        {{ getProp.htmlError }}! Yikes, looks like something went south. Try again !
      </h3>
    </div>
  </div>
</template>

<script setup>
import router from '../router';

// Receive props from other components
const getProp = defineProps(["htmlError"]);
</script>
