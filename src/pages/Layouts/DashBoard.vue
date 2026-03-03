<script setup>
import { ContentLoader } from "vue-content-loader";
</script>
<template>
  <div id="dashboard" class="page">
    <div class="card">
      <h2 class="card-title">Bienvenue 👋</h2>
      <p class="card-text">Ceci est le tableau de bord.</p>

      <ContentLoader
        :speed="2"
        :width="800"
        :height="100"
        backgroundColor="#664747"
        foregroundColor="#585555"
      >
        <!-- <rect x="0" y="0" rx="5" ry="5" width="400" height="20" /> -->
        <rect x="0" y="40" rx="5" ry="5" width="800" height="20" />
        <rect x="0" y="80" rx="5" ry="5" width="800" height="20" />
      </ContentLoader>
    </div>
  </div>
</template>
