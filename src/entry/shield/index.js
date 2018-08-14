import Vue from 'vue'
import App from '../../views/index.vue'
import router from '../../router/shield'
import store from '../../store/shield'
import '../../style/core/normalize.less'
import '../../style/views/shield/index.less'
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
})
