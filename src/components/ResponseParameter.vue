<template>
  <div>
    <h3>响应</h3>
    <div>
      <h5>Produces</h5>
      <p>[ {{produces ? produces.join(', ') : ''}} ]</p>
      <div v-for="param in parameters" :key="param.description">
        <h5>Status {{param.status}} : {{param.description}}</h5>
        <pre>{{format(getRefObject(param))}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { formatObject } from '../util'
import { mapGetters } from 'vuex'
export default {
  props: {
    parameters: Array,
    produces: Array
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapGetters({
      getDefinition: 'getDefinition',
      getDefinitions: 'getDefinitions'
    }),
    format (obj) {
      return formatObject(obj)
    },
    getRefObject (param) {
      let ref = param.schema['$ref']
      ref = ref.substring(14, ref.length)
      let definition = this.getDefinitions()
      return definition[ref]['properties']
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
<style>

</style>
