import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/shopping',
    name: 'Shopping',
    component: () => import('../components/shopping/Index.vue')
  },
  {
    path: '/basicvue',
    name: 'BasicVue',
    component: () => import('../components/basicvue/Index.vue'),
  },
  {
    path: '/vslot',
    name: 'Vslot',
    component: () => import('../components/V-slotAndSlotProps/Index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router
