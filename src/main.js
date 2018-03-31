// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/css/materialize.min.css'
import './assets/js/materialize.min.js'
import './assets/js/jquery-3.3.1.js'

Vue.config.productionTip = false

/* eslint-disable no-new */

let eventHub = new Vue();

Vue.prototype.$eventHub = eventHub;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})