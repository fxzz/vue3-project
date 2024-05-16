import { createWebHistory, createRouter } from "vue-router";

import MainPage from "../pages/MainPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import IndexPage from "../pages/todo/IndexPage.vue";
import todoRouter from "./todoRouter.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/about", component: AboutPage },
    {
      path: "/todo",
      component: IndexPage,
      children: todoRouter(),
    },
  ],
});

export default router;
