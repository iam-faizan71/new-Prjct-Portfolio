import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import MyProjects from '../views/MyProjects.vue'
import MyTeam from '../views/MyTeam.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/myprojects',
    name: 'myprojects',
    component: MyProjects

  },

  {
    path: '/myteam',
    name: 'myteams',
    component: MyTeam
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
