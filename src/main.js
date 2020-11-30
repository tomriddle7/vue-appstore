import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClipboard, faRocket, faLayerGroup, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import Home from './components/Home.vue';
import Application from './components/Application.vue';
import Game from './components/Game.vue';
import Detail from './components/Detail.vue'
import Search from './components/Search.vue';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
library.add(faClipboard, faRocket, faLayerGroup, faSearch, faSpinner);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    { path:'/', component: Home },
    { path:'/home', component: Home },
    { path:'/application', component: Application },
    { path:'/game', component: Game },
    { path:'/app/:id', component: Detail },
    { path:'/search', component: Search }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
