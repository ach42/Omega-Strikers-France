import Vue from 'vue'
import App from './App.vue'
import Ads from 'vue-google-adsense'
import router from './router'
import { i18n } from 'vue-lang-router'

Vue.config.productionTip = false

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)

new Vue({
  router,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
