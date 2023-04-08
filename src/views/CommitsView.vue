<template>
  <section>
    <!-- Header - NavigationTabs -->
    <TheHeader />

    <!-- BreadCrumbs -->
    <div class="w-full flex items-center bg-grey border-b border-dark/10 px-2 py-6">
      <!-- Container -->
      <div
        class="container mx-auto flex flex-col items-start justify-between md:flex-row"
      >
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.4"
            stroke="currentColor"
            class="w-6 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
            />
          </svg>

          <!-- User Link -->
          <router-link
            :to="{ name: 'repositories', params: { login: $route.params.login } }"
            class="text-primary hover:underline"
            aria-label="user-link"
            >{{ $route.params.login }}</router-link
          >
          <span class="text-dark/50 text-xl px-1">/</span>

          <!-- Repository Name -->
          <h3
            class="text-primary text-lg font-bold truncate w-28 cursor-pointer hover:underline lg:w-auto"
            aria-label="repositories-name-link"
          >
            {{ $route.params.reponame }}
          </h3>
          <!-- Visiblity -->
          <span
            class="text-xs text-dark/80 border border-dark/20 rounded-full py-0.5 px-2 ml-2"
            >Public</span
          >
        </div>

        <!-- Pin - Stars Buttons -->
        <div class="flex items-center gap-2 mt-2 md:mt-0">
          <!-- Pin Button -->
          <button
            class="flex items-center text-sm text-dark bg-white border border-dark/20 rounded-md px-2 py-1.5 hover:bg-white/10"
            aria-label="pin-button"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              stroke-width="1.0"
              version="1.1"
              data-view-component="true"
              class="h-4 w-4 mr-2 text-dark/20"
            >
              <path
                d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.08 3.08 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.748.748 0 0 1-.332 1.265.75.75 0 0 1-.729-.205L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.08 3.08 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826ZM5.92 1.866a.253.253 0 0 0-.183-.142.251.251 0 0 0-.221.07L1.794 5.516a.251.251 0 0 0-.07.221c.015.08.068.149.142.183l1.328.613A4.582 4.582 0 0 1 5.73 9.63l.584 2.454a.251.251 0 0 0 .42.12l5.47-5.47a.25.25 0 0 0-.12-.42L9.63 5.73a4.583 4.583 0 0 1-3.098-2.537Z"
              ></path>
            </svg>

            Pin
          </button>

          <!-- Star Button -->
          <button
            class="flex items-center text-sm text-dark bg-white border border-dark/20 rounded-md px-2 py-1.5 hover:bg-white/10"
            aria-label="star-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4 mr-2 text-dark"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            Stars
          </button>

          <!-- Watch Button -->
          <button
            class="flex items-center text-sm text-dark bg-white border border-dark/20 rounded-md px-2 py-1.5 hover:bg-white/10"
            aria-label="watch-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            Watch
          </button>
        </div>
      </div>
    </div>

    <!-- Commits Dropdown -->
    <div class="relative container mx-auto px-1 py-6">
      <button
        class="flex items-center bg-grey text-dark text-sm font-semibold border border-dark/20 rounded-md px-4 py-1.5 transition-colors duration-500 ease-in-out hover:bg-grey/50"
        aria-label="commits-list-dropdown"
        @click="toggleBranchDropdown = !toggleBranchDropdown"
      >
        <!-- Branch Icon -->
        <svg
          text="gray"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
          class="h-4 w-4 mr-2"
        >
          <path
            d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
          ></path>
        </svg>

        <!-- Branch Name -->
        {{ $route.params.branch }}

        <!-- Down Arrow Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="w-3 h-3 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <!-- Branch Dropdown -->
      <div
        class="absolute w-44 mt-1 border border-dark/20 rounded-md shadow-xs bg-white z-10"
        v-if="toggleBranchDropdown"
      >
        <div class="flex items-center justify-between border-b border-dark/20 p-2">
          <h3 class="text-xs text-dark">Switch branch</h3>

          <!-- Close Button -->
          <button
            aria-label="close-branch-lists-dropdown"
            @click="toggleBranchDropdown = !toggleBranchDropdown"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Branches List -->
        <div class="flex flex-col bg-grey rounded-md max-h-full overflow-y-auto">
          <router-link
            class="text-dark text-sm w-full truncate text-left p-2 border-b border-dark/20 hover:bg-white"
            aria-label="branches-list"
            v-for="branch in branches"
            :key="branch.index"
            :to="{
              name: 'commits',
              params: {
                login: $route.params.login,
                reponame: $route.params.reponame,
                branch: branch.name,
              },
            }"
            @click="fetchNewCommits(branch)"
          >
            {{ branch.name }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Commits Cards -->
    <div class="relative container mx-auto flex items-center px-2">
      <!-- Timeline -->
      <span class="absolute h-full w-0.5 bg-dark/20">
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
          class="w-4 h-4 absolute -right-[7px] top-1 bg-white"
        >
          <path
            d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
          ></path>
        </svg>
      </span>

      <div class="ml-6 pb-6 w-full lg:w-2/3">
        <!-- Commit date -->
        <p class="text-sm text-dark/70 mt-0.5">
          Commits on {{ new Date().getMonth() }} {{ new Date().getDate() }},
          {{ new Date().getFullYear() }}
        </p>

        <!-- Commit List Card -->
        <div
          class="border border-dark/20 mt-4 rounded-md overflow-y-auto lg:h-screen"
          id="watched-container"
          v-show="commits"
        >
          <!-- Single Commit Card -->
          <div
            class="flex items-center justify-between rounded-md px-4 py-2 border-b border-dark/20 hover:bg-grey"
            v-for="commit in commits"
            :key="commit.key"
          >
            <!-- Commiter Informations -->
            <div>
              <!-- Commite message -->
              <router-link
                class="text-dark text-sm font-semibold hover:text-primary hover:underline"
                aria-label="commiter-message"
                to="#"
                >{{ commit.commit.message }}</router-link
              >

              <div class="flex items-center gap-2 text-xs mt-1">
                <!-- Commiter Image -->
                <img
                  class="w-6 h-6 rounded-full object-center object-cover cursor-pointer"
                  :src="commit.author.avatar_url"
                  alt="commiter-image"
                  loading="lazy"
                />

                <!-- Commiter Name -->
                <router-link
                  class="text-dark font-semibold hover:underline"
                  to="#"
                  aria-label="commiter-name"
                  >{{ commit.commit.author.name }}
                </router-link>

                <!-- Last Commit -->
                <p class="text-dark/60">{{ commit.commit.author.date }}</p>
              </div>
            </div>

            <!-- Copy SHA id button -->
            <button
              class="p-1.5 bg-grey border border-dark/20 rounded-md text-dark/70 hover:bg-primary hover:text-white"
              aria-label="copy-sha-id-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
            </button>
          </div>

          <div class="flex justify-center items-center my-4">
            <svg
              aria-hidden="true"
              class="flex items-center justify-center w-14 h-14 text-light animate-spin fill-primary"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="showLoadingSpinner"
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
        </div>

        <!-- Loading Card Skeleton -->
        <div
          class="flex items-center justify-between rounded-md px-4 py-3 mt-4 bg-grey animate-pulse"
          v-if="!commits"
        >
          <div class="w-full">
            <h2 class="w-20 h-4 bg-white rounded-md"></h2>
            <div class="w-5/6 h-6 bg-white my-4"></div>
          </div>
          <div class="w-10 h-10 bg-white rounded-md"></div>
        </div>
      </div>
    </div>

    <!-- Error Toast -->
    <ErrorToastView v-if="showErrorToast" :htmlError="htmlError" />
  </section>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
// Components
import TheHeader from "../components/TheHeader.vue";
import ErrorToastView from "../components/ErrorToastView.vue";

// Global API_URL
import API_URL from "../api/helper";

// Vue Router
const route = useRouter();

// Branches Dropdown
const toggleBranchDropdown = ref(false);

const branches = ref();
const commits = ref([]);

// Infinite Scroll Spinner
const showLoadingSpinner = ref(false);

// Content to display per page
const contentPerPage = ref(10);

// Show/Hide Error Toast
const showErrorToast = ref(false);
// Error html content
let htmlError = ref();

// Catch error if promise is rejected
const catchError = function (err) {
  // Error Toast HTML
  htmlError.value = err.response.status;
  console.error(err);

  showErrorToast.value = true;
  // Hide Error Toast after 3s
  setTimeout(() => {
    showErrorToast.value = false;
  }, 3000);
};

// Fetch Branch List
const fetchBranches = async () => {
  try {
    // branches list
    const response = await axios.get(
      `${API_URL}repos/${route.currentRoute.value.params.login}/${route.currentRoute.value.params.reponame}/branches`
    );

    // Assign data to branches value to be displayed
    branches.value = response.data;
  } catch (err) {
    catchError(err);
  }
};

// Fetch Commits List
const fetchCommits = async (page = contentPerPage.value) => {
  try {
    // commits data
    const response = await axios.get(
      `${API_URL}repos/${route.currentRoute.value.params.login}/${route.currentRoute.value.params.reponame}/commits?per_page=${page}`
    );

    // Push to the commits array
    commits.value.push(...response.data);
  } catch (err) {
    catchError(err);
  }
};

// Fetch new commits when branch changes
const fetchNewCommits = async (branch) => {
  try {
    // Push the clicked branch to the page router
    route.push({ params: { branch: branch.name } });

    // Fetch data from api
    const response = await axios.get(
      `${API_URL}repos/${route.currentRoute.value.params.login}/${route.currentRoute.value.params.reponame}/commits/${branch.name}`
    );

    // Assign data to commits value to be displayed
    commits.value = [...response.data];
    console.log(commits.value)
  } catch (err) {
    catchError(err);
  }
};

onMounted(() => {
  // Fetch data when component is mounted
  fetchBranches();
  fetchCommits();

  // Infinite Scroll
  const el = document.getElementById("watched-container");
  // Checks if user reached the bottom
  el.addEventListener("scroll", (e) => {
    // Get user viewport cords
    const { scrollHeight, scrollTop, clientHeight } = e.target;

    if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
      // If user has reached the buttom then show spinner
      showLoadingSpinner.value = true;

      setTimeout(() => {
        // fetch data and remove the spinner
        fetchCommits();
        showLoadingSpinner.value = false;
      }, 1000);
    }
  });
});
</script>
