import './assets/main.css'
import Home from './view/Home.vue'
import GestionEtudiants from './view/GestionEtudiants.vue'
import About from './view/About.vue'
import Edit from './view/Edit.vue'
import TheTableStudent from './components/TheTableStudent.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/Gestion', component: GestionEtudiants },
  { path: '/About', component: About },
  { path: '/Edit/:id/', component: Edit, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
