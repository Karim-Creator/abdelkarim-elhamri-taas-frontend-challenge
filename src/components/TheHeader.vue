<template>
  <!-- Header -->
  <header class="w-full bg-dark text-white py-2 px-4 md:px-0">
    <!-- Main Container -->
    <div class="container flex mx-auto justify-between items-center">
      <!-- Github Image -->
      <div class="flex justify-center items-center">
        <img
          class="w-10 h-10 rounded-full object-center object-cover cursor-pointer"
          src="../assets/images/github-logo-white.jpg"
          alt="github-logo"
          loading="lazy"
        />
      </div>

      <!-- Avatar - Dropdown Menu -->
      <div class="flex items-center gap-3">
        <!-- Dropdown Menu -->
        <div class="relative">
          <button class="flex items-center hover:text-white/80" aria-label="dropdown-menu" @click="showDropDown = !showDropDown">
            <!-- Plus Icon -->
            <span class="w-4 h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>

            <!-- Dropdown Icon -->
            <span class="w-4 h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>

          </button>
            <div class="absolute top-8 right-0 w-36 bg-white text-dark border border-dark/20 rounded shadow-md" v-if="showDropDown"> 
                
                <div class="text-dark text-sm border-b border-dark/20 p-2">
                    <p class="text-dark/70 text-xs">Authorized as</p>
                    <h3>Karim-Creator</h3>
                </div>

                <button class="text-sm text-left w-full p-2 my-2 transition-colors duration-500 ease-in-out hover:bg-light">Logout</button>
            </div>
        </div>

        <!-- Avatar Image -->
        <div class="rounded-full">
          <img
            class="w-8 h-8 rounded-full object-center object-cover cursor-pointer"
            src="https://avatars.githubusercontent.com/u/71701164?v=4"
            alt="github-avatar"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </header>
</template>


<script setup>
import { ref } from "vue";

const showDropDown = ref(false)
</script>