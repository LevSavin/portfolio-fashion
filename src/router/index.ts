import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/Home.vue"),
    },
  ],
});

export default router;
