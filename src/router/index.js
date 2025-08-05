import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login/LoginUsuario.vue'
import Cadastro from '@/components/CadastrarUsuario/CadastrarUsuario.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router