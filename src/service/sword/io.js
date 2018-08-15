import request from '../../utils/request.js'

let baseUrl = 'server'

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:5678/data/webpack-vue-multiple-pages/'
}

export default {
  async init () {
    /* istanbul ignore next */
    return request(`${baseUrl}api/init.json`, 'POST', {
      foo: 'bar',
    })
  },
}
