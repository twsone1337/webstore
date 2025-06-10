import {
  createRouter,
  createWebHistory,
  type RouterScrollBehavior,
} from 'vue-router';

import Home from '../pages/Home.vue';
import Single from '../pages/Single.vue';
import Cart from '@/pages/Cart.vue';
import NotFound from '@/pages/NotFound.vue';

const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (to.hash) {
    return { el: to.hash };
  }
  if (savedPosition) {
    return savedPosition;
  }
  return { left: 0, top: 0 };
};

const routes = [
  { path: '/', component: Home },
  { path: '/store/:id', component: Single },
  { path: '/cart', component: Cart },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

export default router;
