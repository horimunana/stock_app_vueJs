<script setup>
import { ref } from "vue";
import { useAddNewProduct } from "../../hook/useAddNewProduct";
const { mutate: addProduct, isPending, error } = useAddNewProduct();
// All form variable
const nomDuProduit = ref("");
const description = ref("");
const image = ref(null);
const codeBarre = ref("");
const categorie = ref("");
const stockMinimum = ref("");
const prixUnitaire = ref("");
let errorName = ref("");

//RESET FORM
function reset() {
  nomDuProduit.value = "";
  description.value = "";
  image.value = null;
  codeBarre.value = "";
  categorie.value = "";
  stockMinimum.value = "";
  prixUnitaire.value = "";
  errorName.value = "";
}

const productData = {
  //   nom: nomDuProduit.value,
  //   description: description.value,
  //   image: image.value,
  //   code_barre: codeBarre.value,
  //   categorie: categorie.value,
  //   seuil_minimum: stockMinimum.value,
  //   prix_unitaire: prixUnitaire.value,
};

function handleImage(e) {
  image.value = e.target.files[0];
}

function handleSubmit() {
  if (
    !nomDuProduit.value &&
    !description.value &&
    !codeBarre.value &&
    !categorie.value &&
    !stockMinimum.value &&
    !prixUnitaire.value
  ) {
    return (errorName.value = "All fields are required");
  }
  const formData = new FormData();
  formData.append("nom", nomDuProduit.value);
  formData.append("description", description.value);
  formData.append("code_barre", codeBarre.value);
  formData.append("categorie", categorie.value);
  formData.append("seuil_minimum", stockMinimum.value);
  formData.append("prix_unitaire", prixUnitaire.value);
  if (image.value) {
    formData.append("image", image.value);
  }
  addProduct(formData, {
    onSuccess: () => {
      // Handle success (e.g., show a success message, redirect, etc.)
      console.log("Product added successfully");
    },
    onError: (err) => {
      // Handle error (e.g., show an error message)
      console.error("Error adding product:", err);
    },
  });
  // reset the form
  reset();
}
</script>

<template>
  <div class="container_form">
    <h1 class="title">Add new product</h1>
    <p v-if="errorName" class="err_message">{{ errorName }}</p>
    <div class="form">
      <!-- Nom du produit -->
      <div class="input_field">
        <label for="text">Nom du produit</label>
        <input
          type="text"
          v-model="nomDuProduit"
          placeholder="Nom du produit"
        />
      </div>
      <!-- Description field -->
      <div class="input_field">
        <label for="email">Description</label>
        <textarea
          v-model="description"
          name="description"
          placeholder="description"
          id="descript"
        />
      </div>
      <!-- Image field -->
      <div class="input_field">
        <label for="image">Image de produit</label>
        <input
          type="file"
          @change="handleImage"
          placeholder="Ajouter une image de produit"
        />
      </div>
      <!-- Code barre field -->
      <div class="input_field">
        <label for="password">Code barre</label>
        <input
          type="number"
          v-model="codeBarre"
          placeholder="Enter code barre"
        />
      </div>
      <!-- Categorie field -->
      <div class="input_field">
        <label for="password">Categorie</label>
        <input type="text" v-model="categorie" placeholder="Enter categorie" />
      </div>
      <!-- Stock field -->
      <div class="input_field">
        <label for="password">Stock minimum</label>
        <input
          type="number"
          v-model="stockMinimum"
          placeholder="Enter stock minimum"
        />
      </div>
      <!-- Prix unitaire field -->
      <div class="input_field">
        <label for="text">Prix unitaire</label>
        <input
          type="number"
          v-model="prixUnitaire"
          placeholder="Enter prix unitaire"
        />
      </div>

      <button type="button" @click="handleSubmit" class="btn">
        {{ isPending ? "Adding..." : "Add Product" }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.container_form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
}
.form {
  width: 100%;
}
.title {
  margin-bottom: 2.5rem;
}
.input_field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 1.5rem;
}
.input_field input {
  width: 100%;
  padding-block: 1rem;
  padding-inline: 0.8rem;
}
.input_field label {
  font-weight: 600;
}
.btn {
  width: 100%;
  padding: 1rem 0.8rem;
  background: var(--accent-primary);
  border: none;
}
.btn:hover {
  background: var(--accent-hover);
}
.err_message {
  color: red;
  font-weight: 600;
}
#descript {
  width: auto;
  height: 50px;
}
</style>
