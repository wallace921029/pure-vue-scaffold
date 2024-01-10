import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: '/log-in',
      name: 'LogIn',
      component: () => import('@/views/LogIn/LogIn.vue')
    },
    {
      path: '/',
      component: () => import('@/layouts/NormalLayout/NormalLayout.vue'),
      children: [
        {
          path: '',
          redirect: {path: '/home'}
        },
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/Home/Home.vue')
        }
      ]
    }
  ],
  history: createWebHistory()
})

export default router
