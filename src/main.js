import { createApp } from "vue";
import { createPinia } from "pinia";
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";

import "./style.css";
import App from "./App.vue";
import router from "./route/index";
import { ContentLoader } from "vue-content-loader";

// createApp(App).use(router).mount("#app");
const queryClients = new QueryClient();

const app = createApp(App);
app.use(router);
app.use(VueQueryPlugin, { queryClients });
app.component("ContentLoader", ContentLoader);
app.use(createPinia());
app.mount("#app");
