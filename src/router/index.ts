import { createRouter, createWebHistory } from 'vue-router'
import PlaylistView from '@/components/PlaylistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'playlist',
      component: PlaylistView
    }
  ]
})

export default router
