// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  localStorage: {
    workdayItems: {
      type: Array,
      default: []
    },
    settings: {
      type: Object,
      default: {
        hourlyIncome: 8.84
      }
    }
  },
  components: { App }
})
