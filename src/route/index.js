import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../pages/Layouts/MainLayout.vue";
import AuthLayout from "../pages/Auth/AunthLayout.vue";
import DashBoard from "./../pages/Layouts/DashBoard.vue";
import Clients from "./../pages/Layouts/Clients.vue";
import Products from "./../pages/Layouts/Products.vue";
import Movements from "./../pages/Layouts/Movements.vue";
import Login from "./../pages/Auth/Login.vue";
import Register from "../pages/Auth/Register.vue";
import NotFound from "./../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    meta: { requireAuth: true },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: DashBoard,
      },
      {
        path: "products",
        name: "products",
        component: Products,
      },
      {
        path: "clients",
        name: "clients",
        component: Clients,
      },
      {
        path: "mouvement",
        name: "mouvement",
        component: Movements,
      },
    ],
  },
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "register",
        name: "register",
        component: Register,
      },
    ],
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

router.beforeEach((to, from, next) => {
  const isAunthenticated = localStorage.getItem("token");
  if (!isAunthenticated && to.meta.requireAuth) {
    next("/auth/login");
  } else {
    next();
  }
});

export default router;
