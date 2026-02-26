<script setup>
import AppBar from "./pages/AppBar.vue";
import BottomNavBar from "./pages/BottomNavBar.vue";
</script>

<template>
  <div class="app">
    <!-- Header -->
    <AppBar />
    <!-- Main Content -->
    <main class="main">
      <router-view />
    </main>
    <!-- Main Content -->
    <!-- Bottom Navigation -->
    <BottomNavBar />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100dvh;
}
.main {
  flex: 1;
}
</style>
