import Vue from 'vue'
import App from '../../view/index.vue'
import router from '../../router/shield'
import store from '../../store/shield'
import '../../style/common/normalize'
import '../../style/shield'
import {
  setupLang,
  i18n,
} from '../../utils/i18n'

setupLang('shield').then(() => {
  new Vue({
    el: '#app',
    i18n,
    store,
    router,
    render: h => h(App),
  })
})
