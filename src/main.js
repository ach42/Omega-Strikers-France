import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from 'vue-lang-router'

Vue.config.productionTip = false

new Vue({
  router,
i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
