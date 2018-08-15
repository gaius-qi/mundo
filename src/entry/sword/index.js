import Vue from 'vue'
import App from '../../view/index.vue'
import router from '../../router/sword'
import store from '../../store/sword'
import '../../style/common/normalize.less'
import '../../style/sword/index.less'
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
})
