<template>
  <div :id="'#/definitions/'+name">
    <h3>{{name}}</h3>
    <div>
      <pre>{{format(definition)}}</pre>
    </div>
  </div>
</template>

<script>
import { formatObject } from '../util'
export default {
  props: {
    name: String,
    definition: Object
  },
  data () {
    return {
    }
  },
  methods: {
    format (obj) {
      return formatObject(obj)
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  }
}
</script>
