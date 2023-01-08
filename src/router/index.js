import Vue from 'vue'
import LangRouter from 'vue-lang-router'
import translations from '../lang/translations'
import localizedURLs from '../lang/localized-urls'

import HomeView from '../views/HomeView.vue'
import WikiView from '../views/WikiView.vue'

import Arenas from '../components/wiki/maps.vue'
import Rank from '../components/wiki/rank.vue'
import trainings from '../components/wiki/trainings.vue'
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

  // Strikers

  {
    path: '/strikers',
    name: 'strikers',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/strikers/StrikersListView.vue')
    }
  },
  {
    path: '/strikers/:id',
    name: 'Strikers',
    component: function () {
    return import(/* webpackChunkName: "strikerJuliette" */ '../views/strikers/StrikerView.vue')
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
        name : 'trainings',
        path : 'trainings',
        component : trainings
      },
      {
        name : 'patch',
        path : 'patch',
        component : PatchList,
        redirect: '/wiki/patch/6/Quand-omega-strikers-reviendra',
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
