<template>
  <!-- Authorization Section -->
  <section class="relative w-full h-screen flex items-center justify-center bg-grey">
    <!-- Parent Container -->
    <div class="w-full flex flex-col items-center mx-2 md:mx-0">
      <!-- GitHub Logo -->
      <div class="flex justify-center items-center">
        <img
          class="w-12 h-12 rounded-full object-center object-cover"
          src="../assets/images/github-logo.png"
          alt="github-logo"
          loading="lazy"
        />
      </div>

      <!-- Form Container -->
      <div class="w-full bg-white border border-dark/20 rounded-md p-6 mt-8 md:w-80">
        <form @submit.prevent class="w-full h-full">
          <!-- Github User Name Input -->
          <div class="flex flex-col">
            <label for="github-username" class="text-dark text-sm">Github username</label>
            <input
              class="bg-white text-dark text-sm border border-dark/20 rounded py-1 px-3 mt-2 focus:outline focus:outline-blue-500"
              type="text"
              id="github-username"
              name="github-username"
              v-model="userNameInput"
            />
          </div>

          <!-- Submit Button -->
          <button
            class="w-full bg-secondary text-white text-sm rounded-md py-2 mt-4 hover:"
            aria-label="github-account-authorization"
            @click="fetchGithubUser(userNameInput)"
          >
            Authorize my Github Account
          </button>
        </form>
      </div>

      <!-- Github Repository For The Coding Challenge -->
      <div
        class="w-full bg-white text-sm text-center border border-dark/20 rounded-md px-6 py-4 mt-8 md:w-80"
      >
        <p class="text-dark">
          Check out Github
          <a
            class="text-primary hover:underline"
            href="https://github.com/Karim-Creator/abdelkarim-elhamri-taas-frontend-challenge"
            target="_blank"
            aria-label="github-repository-link"
            >Repository</a
          >
        </p>
      </div>
    </div>

    <!-- Error Toast --> 
    <ErrorToastView v-if="showErrorToast" :htmlError="htmlError"/>
  </section>
</template>

<script setup>
import ErrorToastView from "../components/ErrorToastView.vue";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

// Global API_URL
import API_URL from "../api/helper";

// Vue Route
const route = useRouter();

// Github User Input
const userNameInput = ref();

// Error Toast
const showErrorToast = ref(false);
let htmlError = ref();

// Fetch user based on User Input
const fetchGithubUser = async (userNameInputData) => {
  try {
    // Axios fetch function
    const response = await axios.get(`${API_URL}users/${userNameInputData}`);

    // If promise is resolved and data is available, then push 'repositories' route
    if (response) {
      route.push({
        name: "repositories",
        // Push Params to dynamic page
        params: { login: response.data.login },
      });
    } 

  } catch (err) {
    // If promise is rejected, show error toast
    showErrorToast.value = true;
    // Empty user input
    userNameInput.value = "";
    console.error(err);

    // Error Toast HTML
    htmlError.value = err.response.status;

    // Hide Error Toast after 3s
    setTimeout(() => {
      showErrorToast.value = false;
    }, 3000);
  }
};
</script>
