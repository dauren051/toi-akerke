import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router'
import Vuex from 'vuex'
import Toast from '@/components/Toast.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('Toast', Toast);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.prototype.$toast = {
  show(title, message, position = 'top-right', duration = 3000) {
    const toastComponent = new Vue({
      render: (h) =>
        h(Toast, {
          props: {
            title,
            message,
            position,
            duration,
          },
        }),
    }).$mount();

    document.body.appendChild(toastComponent.$el);
    toastComponent.$children[0].showToast();
  },
};

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
