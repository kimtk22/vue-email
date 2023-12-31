import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmailView from "../views/template/EmailView.vue";
import MessageView from "../views/MessageView.vue";
import LoginView from "../views/LoginView.vue";
import { useUserStore } from "@/store/userStore";

const routes = [
  {
    path: "/",
    beforeEnter: (to, from, next) => {
      useUserStore().email ? next("/email") : next();
    },
    component: LoginView,
  },
  {
    path: "/email",
    beforeEnter: (to, from, next) => {
      useUserStore().email ? next() : next("/");
    },
    component: EmailView,
    children: [
      {
        path: "",
        component: HomeView,
      },
      {
        path: "message/:id",
        component: MessageView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
