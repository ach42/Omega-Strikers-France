import Vue from 'vue'
import LangRouter from 'vue-lang-router'
import translations from '../lang/translations'
import localizedURLs from '../lang/localized-urls'

import HomeView from '../views/HomeView.vue'
import WikiView from '../views/WikiView.vue'

import Arenas from '../components/wiki/maps.vue'
import Rank from '../components/wiki/rank.vue'
import PatchList from '../components/wiki/patchList.vue'
import Patch from '../components/wiki/patch.vue'
import Count from '../components/wiki/count.vue'

Vue.use(LangRouter, {
	defaultLanguage: 'fr',
	translations,
	localizedURLs,
})

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  // Strikers Menu

  {
    path: '/strikers',
    name: 'strikers',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/strikers/StrikersListView.vue')
    }
  },
  {
    path: '/strikers/juliette',
    name: 'StrikerJuliette',
    component: function () {
    return import(/* webpackChunkName: "strikerJuliette" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/kai',
    name: 'StrikerKai',
    component: function () {
    return import(/* webpackChunkName: "strikerKai" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/Dubu',
    name: 'StrikerDubu',
    component: function () {
    return import(/* webpackChunkName: "strikerDubu" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/Estelle',
    name: 'StrikerEstelle',
    component: function () {
    return import(/* webpackChunkName: "strikerEstelle" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/Atlas',
    name: 'StrikerAtlas',
    component: function () {
    return import(/* webpackChunkName: "strikerAtlas" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/Juno',
    name: 'StrikerJuno',
    component: function () {
    return import(/* webpackChunkName: "strikerJuno" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/Drek\'ar',
    name: 'StrikerDrekar',
    component: function () {
    return import(/* webpackChunkName: "strikerDrekar" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/Rune',
    name: 'StrikerRune',
    component: function () {
    return import(/* webpackChunkName: "strikerRune" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/X',
    name: 'StrikerX',
    component: function () {
    return import(/* webpackChunkName: "strikerX" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/Era',
    name: 'StrikerEra',
    component: function () {
    return import(/* webpackChunkName: "strikerEra" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/Luna',
    name: 'StrikerLuna',
    component: function () {
    return import(/* webpackChunkName: "strikerLuna" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/Ai.mi',
    name: 'StrikerAimi',
    component: function () {
    return import(/* webpackChunkName: "strikerAimi" */ '../views/strikers/StrikerView.vue')
    }
  },
  {
    path: '/strikers/Asher',
    name: 'StrikerAsher',
    component: function () {
    return import(/* webpackChunkName: "strikerAsher" */ '../views/strikers/StrikerView.vue')
    }
  },

  // Wiki 

  {
    path: '/wiki',
    name: 'Wiki',
    component: WikiView,
    redirect: '/wiki/patch',
    children : [
      {
        name : 'rank',
        path : 'rank',
        component : Rank
      },
      {
        name : 'arena',
        path : 'maps',
        component : Arenas
      },
      {
        name : 'patch',
        path : 'patch',
        component : PatchList,
        redirect: '/wiki/patch/3/Patch-du-20-octobre-2022',
        children : [
          {
            name : 'Patch19082022' ,
            path : '1/Patch-du-19-septembre-2022',
            component : Patch
          },
          {
            name : 'Patch06092022' ,
            path : '2/Patch-du-6-octobre-2022',
            component : Patch
          },
          {
            name : 'Patch20092022' ,
            path : '3/Patch-du-20-octobre-2022',
            component : Patch
          },
          {
            name : 'Patch17112022' ,
            path : '4/Patch-du-17-novembre-2022',
            component : Patch
          },
          {
            name : 'Patch08122022' ,
            path : '5/Patch-du-8-decembre-2022',
            component : Patch
          },
          {
            name : 'Patch01012023' ,
            path : '6/Quand-omega-strikers-reviendra',
            component : Count
          },
        ],
      },
    ]
  },
]

const router = new LangRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
