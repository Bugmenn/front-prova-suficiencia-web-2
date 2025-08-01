import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Mensagem from '../components/mensagem/MensagemUsuario.vue'

const routes = [
  {
    path: '/',
    name: 'Mensagem',
    component: Mensagem
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld,
    props: { msg: 'Página HelloWorld!' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router