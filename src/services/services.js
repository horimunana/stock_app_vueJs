import { QueryClient } from "@tanstack/vue-query";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";
const queryClient = new QueryClient();

//LOGIN METHOD
export async function loginApi({ username, password }) {
  try {
    const res = await axios.post(`${BASE_URL}/api/token/`, {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.log("error from backend", error.response?.data);
    throw new Error("Failed to login");
  }
}

//SIGN UP METHOD
export async function signupApi({ username, email, password }) {
  try {
    const res = await axios.post(`${BASE_URL}/api/users`, {
      username,
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.log("Failed to signup", error.response?.data);
    throw new Error("Failed to signup");
  }
}

//GET CURRENT USER METHOD
export async function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${BASE_URL}/api/users/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("Failed to load user", error.response?.data);

    // if (error.response?.status === 401) {
    //   localStorage.removeItem("token");
    //   queryClient.clear();
    //   window.location.href = "/auth/login";
    // }
    throw error;
  }
}

//GET ALL PRODUCT METHOD
export async function getProducts() {
  try {
    const res = await axios.get(`${BASE_URL}/api/produits/`);
    return res.data;
  } catch (error) {
    console.log("Failed to load products", error.response?.data);
    throw new Error("Failed to load products");
  }
}

//GET ALL MOUVEMENT METHOD
export async function getMouvements() {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${BASE_URL}/api/mouvements/`, {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    });
    return res.data;
  } catch (error) {
    console.log("Failed to load mouvements", error.response?.data);
    throw new Error("Failed to load mouvements");
  }
}

//GET ALL CLIENTS METHOD
export async function getClients() {
  try {
    const res = await axios.get(`${BASE_URL}/api/clients/`);
    return res.data;
  } catch (error) {
    console.log("Failed to load clients");
    throw new Error("Failed to load clients");
  }
}
