import Vue from 'vue'
import App from '../../view/index.vue'
import router from '../../router/sword'
import store from '../../store/sword'
import '../../style/common/normalize'
import '../../style/sword'

import {
  setupLang,
  i18n,
} from '../../utils/i18n'

setupLang('sword').then(() => {
  new Vue({
    el: '#app',
    i18n,
    store,
    router,
    render: h => h(App),
  })
})
