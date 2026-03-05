<script setup>
import { useGetClients } from "../../hook/useClients";
const { data: clients, isLoading, isError } = useGetClients();
</script>

<template>
  <div id="clients" class="page">
    <div class="card">
      <div class="container_title">
        <h2 class="card-title">Clients</h2>
        <router-link to="/newproduct" class="add_prod">➕</router-link>
      </div>
      <div class="list">
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="isError">Error loading clients</div>
        <div
          v-else
          class="list-item"
          v-for="client in clients?.results"
          :key="client?.nom"
        >
          <p>{{ client?.nom }}</p>
          <span class="card-text">{{ client?.email }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add_prod {
  color: aliceblue;
  list-style: none;
  text-decoration: none;
  background: transparent;
}
</style>
