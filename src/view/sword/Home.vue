<template>
  <div>
    <div class="example">{{ test }}{{ msg }}</div>
    <p>{{ $t('hello') }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { loadLanguageAsync } from '../../utils/i18n'
export default {
  created () {
    this.getTest()
    setTimeout(() => {
      loadLanguageAsync('sword', 'zh-CN')
      setTimeout(() => {
        loadLanguageAsync('sword', 'en-US')
      }, 2000)
    }, 2000)
  },
  data () {
    return {
      msg: 'sword',
    }
  },
  computed: {
    ...mapState([
      'test',
    ]),
  },
  methods: {
    ...mapActions([
      'getTest',
    ]),
  },
}
</script>
