import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resource from 'vue-resource'
// eslint-disable-next-line no-multiple-empty-lines


Vue.config.productionTip = false

export const EventBus = new Vue()

Vue.filter('addCountLength', function (value) { return value + ' ( ' + value.length + ' )' })

Vue.use(resource)

new Vue({
  router,
  store,
  resource,
  render: h => h(App)
}).$mount('#app')
