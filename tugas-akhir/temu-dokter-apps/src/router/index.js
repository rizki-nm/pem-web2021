import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Doctors from '@/views/Doctors.vue'
import Appointment from "@/views/Appointment.vue";
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Temu Dokter'
    }
  },
  {
    path: '/doctors',
    name: 'Doctors',
    component: Doctors,
    meta: {
      title: 'All Doctors'
    }
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: Appointment,
    meta: {
      title: 'Appointment Forms'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: NotFound,
    meta: {
      title: 'Not Found Page'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router
