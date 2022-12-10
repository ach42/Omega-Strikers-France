import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from 'vue-lang-router'
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)

Vue.config.productionTip = false


new Vue({
  router,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
