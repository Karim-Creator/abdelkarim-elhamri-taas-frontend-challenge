<template>
  <div
    class="absolute bottom-2 inset-x-0 mx-auto flex items-center justify-center bg-red-500 w-1/3 p-4 rounded-md"
  >
    <!-- Error Message -->
    <h3 class="text-white text-sm text-center">
      {{ getProp.htmlError }}! Yikes, looks like something went south. Try reloading!
    </h3>
  </div>
</template>

<script setup>
const getProp = defineProps(["htmlError"]);
</script>
