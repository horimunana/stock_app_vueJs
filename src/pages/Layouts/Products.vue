<script setup>
import { useGetProducts } from "../../hook/useGetProducts";
const { data: products, isLoading, isError } = useGetProducts();
</script>

<template>
  <div id="produits" class="page">
    <div class="card">
      <h2 class="card-title">Produits</h2>
      <div class="list">
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="isError">Error loading products</div>
        <div v-else>
          <!--  item -->
          <div
            class="list-item"
            v-for="product in products?.results"
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
