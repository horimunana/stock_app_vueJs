<script setup>
import { useGetMouvements } from "../../hook/useGetMouvement";
const { data: mouvements, isLoading, isError } = useGetMouvements();
</script>
<template>
  <div id="mouvements" class="page">
    <div class="card">
      <h2 class="card-title">Derniers mouvements</h2>
      <div class="list">
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="isError">Error loading mouvements</div>
        <div
          v-else
          class="list-item"
          v-for="mouvement in mouvements?.results"
          :key="mouvement?.id"
        >
          <p>{{ mouvement?.type }} - {{ mouvement?.produit?.nom }}</p>
          <span
            :class="
              mouvement?.type === 'entrée' ? 'text-success' : 'text-danger'
            "
            >{{ mouvement?.quantite }}</span
          >
        </div>
        <!-- <div class="list-item">
          <p>Sortie - Produit B</p>
          <span class="text-danger">-3</span>
        </div> -->
      </div>
    </div>
  </div>
</template>
