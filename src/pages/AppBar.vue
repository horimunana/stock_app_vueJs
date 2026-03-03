<script setup>
import { ContentLoader } from "vue-content-loader";
import { useCurrentUser } from "../hook/useCurrentUser";
import useToogle from "../stores/ToogleDrawable";
const { data, isLoading, error } = useCurrentUser();

const user = data?.results || null;
console.log("user", user);
console.log("error", error);
const toogleStore = useToogle();
// THIS DOES NOT HAVE PERFOMANCE
// const props = defineProps({
//   onOpen: Function,
// });

// Good way vue dev recommwnded us
// const emit = defineEmits(["open"]);

// function handleOpen() {
//   // emit("open");
// }

function handleOpen() {
  toogleStore.open();
}
</script>

<template>
  <header class="header">
    <!-- LOADING FOR SKELETON -->
    <div class="header-profilegg" v-if="isLoading">
      <ContentLoader
        :speed="2"
        :width="40"
        :height="40"
        class="loader_img"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="50" cy="50" r="40" />
      </ContentLoader>
      <!-- Custom rectangle skeleton -->
      <!-- <ContentLoader
        :speed="2"
        :width="400"
        :height="160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="5" ry="5" width="400" height="20" />
        <rect x="0" y="40" rx="5" ry="5" width="400" height="20" />
        <rect x="0" y="80" rx="5" ry="5" width="400" height="20" />
      </ContentLoader> -->
    </div>

    <div class="header-profile" v-if="!isLoading" @click="handleOpen">
      <svg
        v-if="user?.image == null || user?.image == ''"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-user-round-icon lucide-user-round"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>

      <img :src="user?.image" alt="Profile" />
      <span>{{ user?.username }}hhjh</span>
    </div>
    <button class="header-menu-btn" aria-label="Menu">🔔</button>
  </header>
</template>
<!-- ⋮ -->
