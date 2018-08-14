import * as types from './mutation-types'
import io from '../../service/shield/io'
export default {
  async getTest ({commit, state}) {
    const test = await io.getTest()
    commit(types.TEST, test)
  },
}
