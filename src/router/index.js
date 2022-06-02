import { createRouter, createWebHistory } from "vue-router";
import Page1 from "../views/Page-1.vue";
import Page2 from "../views/Page-2.vue";
import Page3 from "../views/Page-3.vue";
import Page4 from "../views/Page-4.vue";

const routes = [
  {
    path: "/",
    name: "Page-1",
    component: Page1,
  },
  {
    path: "/page=2",
    name: "Page-2",
    component: Page2,
  },
  {
    path: "/page=3",
    name: "Page-3",
    component: Page3,
  },
  {
    path: "/page=4",
    name: "Page-4",
    component: Page4,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
