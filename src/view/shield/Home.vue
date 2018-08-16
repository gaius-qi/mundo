<template>
  <div>
    <div class="example">{{ test }}{{ msg }}</div>
    <p>{{ $t('hello') }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  created () {
    this.getTest()
  },
  data () {
    return {
      msg: 'shield',
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
