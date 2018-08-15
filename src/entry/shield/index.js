import Vue from 'vue'
import App from '../../view/index.vue'
import router from '../../router/shield'
import store from '../../store/shield'
import '../../style/common/normalize.less'
import '../../style/shield/index.less'
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
})
