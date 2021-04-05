import Vue from 'vue'
import App from './App.vue'
import Bag from "@/components/Bag";
import Library from "@/components/Library";
import VueRouter from "vue-router";


Vue.use(VueRouter);
const routes = [
  {path: '/bag', component: Bag},
  {path: '/items', component: Library}
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
