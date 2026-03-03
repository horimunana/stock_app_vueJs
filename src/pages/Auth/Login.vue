<script setup>
import { ref } from "vue";
import { useGetToken } from "../../hook/useGetToken";

const { mutate, error, isPending } = useGetToken();

const username = ref("horimunana");
const password = ref("12345678");
let errorName = ref("");

function reset() {
  username.value = "";
  password.value = "";
  errorName.value = "";
}

console.log(error.response?.data);

function handleSubmit() {
  if (!username.value && !password.value) {
    errorName.value = "username and password are required";
    return;
  }

  if (password.value.length >= 8) {
    // POST TO LOGIN LOGIC
    mutate(
      { username: username.value, password: password.value },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data?.access);
          if (localStorage.getItem("token")) {
            window.location.href = "/dashboard";
          }
          console.log("Login successful:", data);
        },
        onError: (error) => {
          console.error("Login failed:", error);
          console.log(error.response?.data);
          reset();
          errorName.value = "Invalid username or password";
        },
      },
    );
  }
  if (password.value.length < 8) {
    errorName.value = "password must have 8 character";
    reset();
    return;
  }

  // reset the form
}
</script>

<template>
  <div class="container_form">
    <h1 class="title">Login to your Account</h1>
    <p v-if="errorName" class="err_message">{{ errorName }}</p>
    <div class="form">
      <div class="input_field">
        <label for="text">Username</label>
        <input
          type="text"
          v-model="username"
          :disabled="isPending"
          placeholder="Enter username"
        />
      </div>
      <div class="input_field">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          :disabled="isPending"
          placeholder="Enter password"
        />
        <span
          >Don't you have an account?,<router-link to="/auth/register"
            >register</router-link
          ></span
        >
      </div>
      <button type="submit" @click="handleSubmit" class="btn">
        {{ isPending ? "Logging in..." : "Login" }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.container_form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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
