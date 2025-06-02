import { createMemoryHistory, createRouter } from 'vue-router';

import Home from '../pages/Home.vue';
import Single from '../pages/Single.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/single', component: Single },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
