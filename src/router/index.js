import { createRouter, createWebHashHistory } from 'vue-router';
import home from '../views/home.vue';
import about from '../views/about.vue';
import toyApp from '../views/toy-app.vue';
import toyDetails from '../views/toy-details.vue';
import toyEdit from '../views/toy-edit.vue';
import dashboard from '../views/dashboard.vue';
import loginSignup from '../views/login-signup.vue';



const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login-signup',
      name: 'login-signup',
      component: loginSignup
    },
    {
      path: '/about',
      name: 'about',
      component: about

    },
    {
      path: '/toy',
      name: 'toyApp',
      component: toyApp

    },
    {
      path: '/toy/:toyId',
      name: 'toy-details',
      component: toyDetails

    },
    {
      path: '/toy/edit/:id?',
      name: 'toy-edit',
      component: toyEdit
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
  ]
});

export default router;
