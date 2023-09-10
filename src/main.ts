import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import "./styles/styles.css";
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { createPinia } from "pinia";

const pinia = createPinia();

const vuetify = createVuetify({
  components,
  directives,
});

//Estilos globales
import "./styles/styles.css";

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(pinia);
app.mount("#app");
