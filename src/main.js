import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

new Vue({
  render: h => h(App),
}).$mount('#app')
