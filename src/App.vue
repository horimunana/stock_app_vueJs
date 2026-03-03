<script setup>
import useToogle from "./stores/ToogleDrawable";
import Drawable from "./pages/Drawable.vue";

const toogle = useToogle();
</script>

<template>
  <div class="app">
    <router-view />
    <!-- Drawable -->
    <Drawable v-if="toogle.isOpen" />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100dvh;
}
</style>
