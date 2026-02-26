import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "./../pages/DashBoard.vue";
import Clients from "./../pages/Clients.vue";
import Products from "./../pages/Products.vue";
import Movements from "./../pages/Movements.vue";
import NotFound from "./../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashBoard,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/clients",
    name: "clients",
    component: Clients,
  },
  {
    path: "/mouvement",
    name: "mouvement",
    component: Movements,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
