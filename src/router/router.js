import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import MainPage from "../components/MainPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/test", component: HelloWorld },
    { path: "/", component: MainPage },
  ],
});

export default router;
