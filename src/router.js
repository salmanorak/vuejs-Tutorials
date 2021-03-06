
import Vue from 'vue'
import Router from 'vue-router'
import MonsterGame from '@/views/MonsterGame.vue'
import Servers from '@/views/Servers.vue'
import DynamicComp from '@/views/DynamicComp.vue'
import Slots from '@/views/Slots.vue'
import Quotes from '@/views/Qoutes.vue'
import Forms from '@/views/Forms.vue'
import CustomDirectives from '@/views/CustomDirectives.vue'
import Home from '@/views/Home.vue'
import FilterAndMixin from '@/views/FilterAndMixin.vue'
import SaveUserInfo from '@/views/SaveUserInfo'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/monstergame",
      name: "monstergame",
      component: MonsterGame
    },
    {
      path: "/servers",
      name: "servers",
      component: Servers
    },
    {
      path: "/dynamicComp",
      name: "DynamicComp",
      component: DynamicComp
    },
    {
      path: "/slots",
      name: "Slots",
      component: Slots
    },
    {
      path: "/quotes",
      name: "quotes",
      component: Quotes
    },
    {
      path: "/forms",
      name: "forms",
      component: Forms
    },

    { path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/customdirectives',
      name: 'CustomDirectives',
      component: CustomDirectives
    },
    {
      path: '/filterandmixin',
      name: 'FilterAndMixin',
      component: FilterAndMixin
    },
    {
      path: '/saveuserinfo',
      name: 'SaveUserInfo',
      component: SaveUserInfo
    }
  ]
});
