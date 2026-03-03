<script setup>
import { ref } from "vue";

const username = ref("");
const email = ref("");
const password = ref("");
let errorName = ref("");

function reset() {
  username.value = "";
  email.value = "";
  password.value = "";
  errorName.value = "";
}

function handleSubmit() {
  if (!username.value && !password.value && !email.value) {
    return (errorName.value = "All fields are required");
  }

  if (password.value.length >= 8) {
    // POST TO LOGIN LOGIC
    return console.log(
      `login with: ${username.value} ${password.value} ${email.value}`,
      reset(),
    );
  }

  errorName.value = "password must have 8 character";

  // reset the form
  reset();
}
</script>

<template>
  <div class="container_form">
    <h1 class="title">Create an Account</h1>
    <p v-if="errorName" class="err_message">{{ errorName }}</p>
    <div class="form">
      <!-- Username -->
      <div class="input_field">
        <label for="text">Username</label>
        <input type="text" v-model="username" placeholder="Enter username" />
      </div>
      <!-- Email field -->
      <div class="input_field">
        <label for="email">Email</label>
        <input type="email" v-model="email" placeholder="Enter username" />
      </div>
      <!-- Password field -->
      <div class="input_field">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Enter password"
        />
        <span
          >Have you already an account?,<router-link to="/auth/login"
            >login</router-link
          ></span
        >
      </div>
      <button type="button" @click="handleSubmit" class="btn">register</button>
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
</style>
