import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Jingxuan from '../components/Jingxuan.vue'
import Mianfei from '../components/Mianfei.vue'
import Nansheng from '../components/Nansheng.vue'
import Nvsheng from '../components/Nvsheng.vue'
import Chuban from '../components/Chuban.vue'
import Tingshu from '../components/Tingshu.vue'
import Shuji from '../components/Shuji.vue'
import Paihangbang from '../components/Paihangbang.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: Home,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'jingxuan',
        name: 'Jingxuan',
        component: Jingxuan,
      },
      {
        path: 'mianfei',
        name: 'Mianfei',
        component: Mianfei,
      },
      {
        path: 'nansheng',
        name: 'Nansheng',
        component: Nansheng,
      },
      {
        path: 'nvsheng',
        name: 'Nvsheng',
        component: Nvsheng,
      },
      {
        path: 'chuban',
        name: 'Chuban',
        component: Chuban,
      },
      {
        path: 'tingshu',
        name: 'Tingshu',
        component: Tingshu,
      }
    ]
  },
  // 小说页面
  {
    path: '/shuji',
    name: 'Shuji',
    component: Shuji,
  },
  // 排行榜页面
  {
    path: '/paihangbang',
    name: 'Paihangbang',
    component: Paihangbang,
  }
]

const router = new VueRouter({
  routes
})

export default router
