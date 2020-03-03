import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/registeration',
    name: 'Registeration',
    component: () => import('../components/Registrations/Index.vue')
  },
  {
    path: '/restaurants',
    name: 'Restaurant',
    component: () => import('../components/Registrations/Index.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router
