import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});


//router.beforeEach((to, from) => {});

export default router;
