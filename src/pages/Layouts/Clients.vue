<script setup>
import { useGetClients } from "../../hook/useClients";
const { data: clients, isLoading, isError } = useGetClients();
</script>

<template>
  <div id="clients" class="page">
    <div class="card">
      <h2 class="card-title">Clients</h2>
      <div class="list">
        
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="isError">Error loading clients</div>
        <div v-else class="list-item" v-for="client in clients?.results" :key="client?.nom">
          <p>{{ client?.nom }}</p>
          <span class="card-text">{{ client?.email }} </span>
        </div>
       
      </div>
    </div>
  </div>
</template>
