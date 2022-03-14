import { createRouter, createWebHashHistory } from 'vue-router';
import home from '../views/home.vue';
import about from '../views/about.vue';
import toyApp from '../views/toy-app.vue';
import toyDetails from '../views/toy-details.vue';


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about

    },
    {
      path: '/toy',
      name: 'topApp',
      component: toyApp

    },
    {
      path: '/toy/details',
      name: 'toy-details',
      component: toyDetails

    },
    {
      path: '/toy/edit/:id?',
      name: 'toy-details',
      component: toyDetails

    },
  ]
});

export default router;
