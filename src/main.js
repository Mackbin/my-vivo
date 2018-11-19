import Vue from 'vue/dist/vue.js';
import router from './vue-router';
import routes from './components/router/router.js'
import App from './App.vue'

Vue.use(router)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render(h){
		return h(App);
	},
  template: '<App/>',
  components: { App },
  router : new VueRouter(routes)

})
