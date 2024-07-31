import { createRouter, createWebHistory } from 'vue-router'   // 删掉了HashHistory
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView'
import NotFoundView from '../views/NotFoundView'
import RegisterView from '../views/RegisterView'
import UserList from '../views/UserList'
import UserProfile from '../views/UserProfile'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfile
  },
]

const router = createRouter({
  history: createWebHistory(),      // HashHistroy删掉了Hash
  routes
})

export default router
