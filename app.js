import Vue from 'vue'
import VueRouter from 'vue-router'

// routes
import Home from './components/home'
import Home_2 from './components/home_2'
import Caracteristicas from './components/caracteristicas'
import Agentesventaspy from './components/agentesventaspy'
import Caller from './components/caller'
import EndCall from './components/end-call'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home_2', component: Home_2 },
    { path: '/caracteristicas', component: Caracteristicas },
    { path: '/agentesventaspy', component: Agentesventaspy },
    { path: '/caller', component: Caller },
    { path: '/end', component: EndCall }
  ]
})

new Vue({
  router
  // render: h => h(App)
}).$mount('#app')
