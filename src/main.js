import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(require('vue-chartist'),  {
  messageNoData: "You have not enough data",
  classNoData: "empty"
})

new Vue({
  render: h => h(App),
}).$mount('#app')
