<template>
  <section>
    <!-- Navigation Tabs -->
    <NavigationTabs />

    <!-- Repositories Cards Container -->
    <div class="w-full container mx-auto px-4 lg:px-0 lg:flex">

      <!-- Avatar Image -->
      <div class="w-full flex flex-col justify-center items-center mr-0 lg:w-1/3">
        <img
          class="w-56 h-56 rounded-full object-center object-cover lg:w-72 lg:h-72"
          src="https://avatars.githubusercontent.com/u/71701164?v=4"
          alt="github-avatar"
          loading="lazy"
        />

        <!-- Avatar Names -->
        <h3 class="text-dark text-xl text-center mt-4 md:text-left">Karim</h3>
        <h4 class="text-dark/50 text-lg text-center md:text-left">Karim-Creator</h4>
      </div>

      <div class="w-full mt-4 md:mt-0 lg:w-2/3">

        <!-- Heading -->
        <h4 class="text-dark/80">Repositories List :</h4>

        <!-- Cards List -->
        <div class="grid grid-cols-1 gap-6 mt-2 md:grid-cols-2">

          <!-- Single Card -->
          <div class="p-4 border border-dark/20 rounded-md">

            <!-- Repository Link + Visiblity -->
            <div class="flex items-center justify-between text-xs">

              <!-- Repository Link -->
              <router-link to="/" class="text-primary font-semibold hover:underline" aria-label="repository-link"
                >Go to Home</router-link
              >

              <!-- Visiblity -->
              <span class="text-dark/80 border border-dark/20 rounded-full py-0.5 px-2">Public</span>
            </div>

            <!-- Repository Description -->
            <p class="text-dark/80 text-xs my-3 ">A robot powered training repository</p>

            <!-- Repository Language -->
            <div class="flex items-center">
              <span class="w-3 h-3 rounded-full bg-primary mr-1"></span>
              <p class="text-dark/80 text-xs">Ruby</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavigationTabs from "./NavigationTabs.vue";
</script>
