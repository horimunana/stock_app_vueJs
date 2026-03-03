<script setup>
import useToogle from "../stores/ToogleDrawable";

// DECLARE TOOGLE STORE
const toogleStore = useToogle();

function handleClose() {
  toogleStore.close();
}

let listItem = [
  {
    name: " Profile",
    icon: "👤",
    path: "/profile",
  },
  {
    name: "Settings",
    icon: "☸️",
    path: "/settings",
  },
  {
    name: "Logout",
    icon: "📤",
    path: "/logout",
  },
];

// THIS WORK BUT DOES NOT HAVE PERFORMANCE
// const props = defineProps({
//   onClose: Function,
// });

//BETTER PERFOMANCE
// const emit = defineEmits(["close"]);
</script>
<template>
  <div class="overlay" @click="handleClose"></div>
  <div class="drawable">
    <!-- profile -->
    <div class="container_image">
      <img src="./../assets/hori.jpg" alt="profile image" />
      <span class="name">Munana Hori</span>
    </div>
    <div class="container_setting">
      <!-- NavItem -->
      <div v-for="item in listItem" @click="handleClose" class="setting">
        <span>
          {{ item.icon }}
        </span>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.drawable {
  position: absolute;
  left: 0;
  width: 70%;
  height: 100dvh;
  background: #ffffff;
  border-right: 1px solid #e6e4e4;
}
.container_image {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #d4d3d3;
  padding: 1.5rem 2.5rem;
}
.name {
  font-weight: 600;
}
.container_image img {
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
}
/* settings */
.container_setting {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.5rem 0.4rem;
}
.setting {
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid #e6e4e4;
  padding: 0.5rem 0.8rem;
}
.overlay {
  width: 100%;
  height: 100dvh;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
}
</style>
