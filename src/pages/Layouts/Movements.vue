<script setup>
import { useGetMouvements } from "../../hook/useGetMouvement";
const { data: mouvements, isLoading, isError } = useGetMouvements();
</script>
<template>
  <div id="mouvements" class="page">
    <div class="card">
      <div class="container_title">
        <h2 class="card-title">Derniers mouvements</h2>
        <router-link to="/newproduct" class="add_prod">➕</router-link>
      </div>
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
