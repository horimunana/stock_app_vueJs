<script setup>
import { useGetProducts } from "../../hook/useGetProducts";
const { data: products, isLoading, isError } = useGetProducts();
const dataLocal = JSON.parse(localStorage.getItem("products"));

const orgData = isError ? products : dataLocal;
</script>

<template>
  <div id="produits" class="page">
    <div class="card">
      <div class="container_title">
        <h2 class="card-title">Produits</h2>
        <router-link to="/newproduct" class="add_prod">➕</router-link>
      </div>
      <div class="list">
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="isError">Error loading products</div>
        <div v-else>
          <!--  item -->
          <div
            class="list-item"
            v-for="product in orgData?.results"
            :key="product?.nom"
          >
            <div class="list-item-info">
              <p>{{ product?.nom }}</p>
              <p>Code-barres: {{ product?.code_barre }}</p>
            </div>
            <span class="badge badge-success"
              >Stock: {{ product?.valeur_stock }}</span
            >
          </div>
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
