// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Authors from '@/components/Authors.vue';
import Phrases from '@/components/Phrases.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  ,
  {
    path: '/authors',
    name: 'Authors',
    component: Authors
  },
  {
    path: '/phrases',
    name: 'Phrases',
    component: Phrases
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
