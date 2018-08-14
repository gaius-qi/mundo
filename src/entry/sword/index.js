import Vue from 'vue'
import App from '../../views/index.vue'
import router from '../../router/sword'
import store from '../../store/sword'
import '../../style/core/normalize.less'
import '../../style/views/sword/index.less'
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
})
