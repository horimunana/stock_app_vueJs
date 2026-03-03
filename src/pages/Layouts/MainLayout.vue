<script setup>
import AppBar from "./../AppBar.vue";
import BottomNavBar from "./../BottomNavBar.vue";
// const emit = defineEmits(["open"]);
</script>

<template>
  <!-- Header -->
  <AppBar />
  <main class="main">
    <router-view />
  </main>
  <!-- Bottom Navigation -->
  <BottomNavBar />
</template>
<style>
.main {
  flex: 1;
}
</style>
