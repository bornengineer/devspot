import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  // main veiws
  {
    // "/" is used to make Home default route
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/development",
    name: "singlepage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/singlepage.vue"),
  },

  // services and tnc pages
  {
    path: "/web-development",
    name: "web",
    component: () => import(/* webpackChunkName: "about" */ "../views/Services/webU.vue"),
  },
  {
    path: "/app-development",
    name: "app",
    component: () => import(/* webpackChunkName: "about" */ "../views/Services/appU.vue"),
  },
  {
    path: "/desktop-application-development",
    name: "desktop",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Services/desktopU.vue"),
  },
  {
    path: "/cloud-development",
    name: "cloud",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Services/cloudU.vue"),
  },
  {
    path: "/devops-development",
    name: "devops",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Services/devopsU.vue"),
  },
  {
    path: "/big-data-development",
    name: "bigdata",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Services/bigdataU.vue"),
  },
  {
    path: "/terms-and-conditions",
    name: "tnc",
    component: () => import(/* webpackChunkName: "about" */ "../views/Services/tnc.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
