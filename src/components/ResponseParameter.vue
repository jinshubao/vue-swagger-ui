<template>
  <div class="parameters">
    <h3>响应</h3>
    <h5>Produces</h5>
    <p>[ {{produces ? produces.join(', ') : ''}} ]</p>
    <div v-for="param in parameters" :key="param.description">
      <h5>Status {{param.status}} : {{param.description}}</h5>
      <pre>{{format(param)}}</pre>
    </div>
  </div>
</template>

<script>
import { formatObject } from '../util'
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
<style>
  .parameters {
    border-bottom: 1px solid #ebeef5;
    padding-bottom: 20px;
  }
</style>
