<template>
  <section class="pb-8">
    <!-- Navigation Tabs -->
    <NavigationTabs />

    <!-- Repositories Cards Container -->
    <div class="w-full container mx-auto px-4 lg:px-0 lg:flex">
      <!-- Avatar Image -->
      <div class="w-full flex flex-col justify-start items-center mr-0 lg:w-1/3">
        <img
          class="w-56 h-56 rounded-full object-center object-cover lg:w-72 lg:h-72"
        :src="
            repositoriesData[0]?.owner.avatar_url||
            'https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255670-stock-illustration-avatar-people-male-profile-gray.jpg?forcejpeg=true'
          "
          alt="github-avatar"
          loading="lazy"
        />
        <!-- Avatar Names -->
        <h3 class="text-dark text-xl text-center mt-4 md:text-left">
          {{ $route.params.login }}
        </h3>
      </div>

      <div class="w-full mt-4 md:mt-0 lg:w-2/3">
        <div class="flex items-center justify-between">
          <!-- Heading -->
          <h4 class="text-dark/80">Repositories List :</h4>

          <!-- Search Form -->
          <form @submit.prevent class="relative">
            <div class="relative">
              <!-- Search Icon -->
              <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-dark/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="!showSearchSpinner"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>

                <!-- Loading Spinner -->
                <svg
                  aria-hidden="true"
                  class="absolute top-1.5 left-2 flex items-center justify-center w-6 h-6 text-light animate-spin fill-primary"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="showSearchSpinner"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>

              <!-- Search Input -->
              <input
                type="search"
                id="search-input"
                class="block w-full px-4 py-2 pl-10 text-sm text-dark border border-dark/20 rounded-md bg-grey outline-none"
                placeholder="Search for repositories ..."
                autocomplete="off"
                v-model="searchInput"
              />
            </div>

            <div
              class="absolute flex flex-col items-start justify-start w-full max-h-80 overflow-y-auto bg-grey border border-b-0 border-dark/20 rounded-md mt-1"
              v-if="searchInput.length != ''"
            >
              <button
                class="flex items-center text-dark text-sm text-left border-b border-dark/20 w-full px-3 py-6 truncate transition-colors duration-500 ease-out hover:bg-white"
                v-for="data in filterData()"
                :key="data.index"
              >
                <span>{{ data.name }}</span>
              </button>
            </div> 
          </form>
        </div>

        <!-- Cards List -->
        <div class="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
          <!-- Single Card -->
          <div
            class="p-4 border border-dark/20 rounded-md"
            v-for="data in filterData()"
            :key="data.index"
          >
            <!-- Repository Link + Visiblity -->
            <div class="flex items-center justify-between text-xs">
              <!-- Repository Link -->
              <router-link
                to="/"
                class="text-primary font-semibold hover:underline"
                aria-label="repository-link"
                >{{ data.name }}</router-link
              >

              <!-- Visiblity -->
              <span class="text-dark/80 border border-dark/20 rounded-full py-0.5 px-2">{{
                data?.visibility
              }}</span>
            </div>

            <!-- Repository Description -->
            <p class="text-dark/80 text-xs my-3">{{ data?.description }}</p>

            <!-- Repository Language -->
            <div class="flex items-center" v-if="data.language">
              <!-- Language badge -->
              <span
                class="w-3 h-3 rounded-full mr-1"
                :class="
                  data?.language == 'Vue'
                    ? 'bg-secondary'
                    : '' || data?.language == 'HTML'
                    ? 'bg-yellow-800'
                    : '' || data?.language == 'Ruby'
                    ? 'bg-red-600'
                    : 'bg-yellow-500'
                "
              ></span>
              <p class="text-dark/80 text-xs">{{ data?.language }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavigationTabs from "./NavigationTabs.vue";
import axios from "axios";
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";

// Global API_URL
import API_URL from "../api/helper";

// Vue Route
const route = useRouter();

const repositoriesData = ref([]);

const searchInput = ref(""); 
const showSearchSpinner = ref(false); 

// Watch for changes in the search input
watchEffect(() => {
  if (searchInput.value.length > 0) {
    // Debounce function
    showSearchSpinner.value = true;
    const searchInputStatus = setTimeout(() => {
      showSearchSpinner.value = false;
      filterData(); 
    }, 1000);
  } else return;
});

// Fetch User Data
const fetchUserData = async () => {
  try {
    // Fetch data based on route params
    const response = await axios.get(
      `${API_URL}users/${route.currentRoute.value.params.login}/repos`
    );

    repositoriesData.value = response.data;
 
  } catch (err) {
    //Catch erros & log them
    console.error(err);
  }
};

// Filter Input Dropdown Data
const filterData = function () { 
  return repositoriesData.value.filter(data =>{
    return data.name.toLowerCase().includes(searchInput.value.toLowerCase());
  })
};

filterData();

// Fetch data when component is mounted
onMounted(() => {
  fetchUserData();
});
</script>
