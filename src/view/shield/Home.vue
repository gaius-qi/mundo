<template>
  <div class="example">{{ test }}{{ msg }}</div>
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
