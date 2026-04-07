//This is the part I use copilot to create. Arouter list.
import { createRouter, createWebHistory } from 'vue-router'

// 导入所有页面组件
import Home        from './components/Home.vue'
import Ancient     from './components/Pages/Acient.vue'
import Industrial  from './components/Pages/Industrial.vue'
import Renaissance from './components/Pages/Renaissance.vue'
import WorldWars   from './components/Pages/World-wars.vue'

const routes = [
  { path: '/',            component: Home },
  { path: '/ancient',     component: Ancient },
  { path: '/industrial',  component: Industrial },
  { path: '/renaissance', component: Renaissance },
  { path: '/world-wars',  component: WorldWars },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})