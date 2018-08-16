import Vue from 'vue'
import App from '../../view/index.vue'
import router from '../../router/sword'
import store from '../../store/sword'
import '../../style/common/normalize.less'
import '../../style/sword/index.less'

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
