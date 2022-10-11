import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () =>
    import(/* webpackChunkName: "index" */ "@/views/newPc/index.vue")
  },
  // {
  //   path: "/m",
  //   name: "m",
  //   component: () =>
  //   import(/* webpackChunkName: "newPc" */ "@/views/newPc/index.vue")
  // },
  {
    path: "/download",
    name: "download",
    component: () =>
    import(/* webpackChunkName: "download" */ "@/views/download.vue")
  },
  {
    path: "/ytboxdoc",
    name: "ytboxdoc",
    component: () =>
    import(/* webpackChunkName: "ytboxdoc" */ "@/views/mobile/doc.vue")
  },
  {
    path: "/ytboxdownload",
    name: "ytboxdownload",
    component: () =>
    import(/* webpackChunkName: "ytboxdownload" */ "@/views/mobile/downloadApp.vue")
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () =>
    import(/* webpackChunkName: "privacy" */ "@/views/mobile/privacy.vue")
    
  },
  { path: "*", component: () => import("@/views/errorPage/404.vue") },
];

const router = new VueRouter({
  mode: "history",
  base: '',
  routes
});

export default router;
