// 配置路由规则 src/router/index.ts
import { createRouter,  createWebHistory } from "vue-router";

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/LayoutPage.vue"),
      children: [
        {
          path: "",
          component: () => import("@/components/testDemo.vue"),
        },
        {
          path:"users",
          component : () => import("@/components/ascoulseDemo.vue"),
        },
        {
          path:"pie", component: () => import("@/components/pieDemo3.vue"),
        }
      ],
    },
  ],
});

export default router;