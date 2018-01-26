<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>{{operation.summary}}</h3>
      <p>{{operation.description}}</p>
    </div>
    <div>
      <h3>Path</h3>
      <Method :method="upperCase(operation.method)">
        <span>{{operation.path}}</span>
      </Method>
      <request-parameter :parameters="parameters" :consumes="operation.consumes"></request-parameter>
      <response-parameter :parameters="responses" :produces="operation.produces"></response-parameter>
      <test :operation="operation"></test>
    </div>
  </el-card>
</template>

<script>
import Method from './RequestMethod'
import RequestParameter from './RequestParameters'
import ResponseParameter from './ResponseParameter'
import Test from './Test'
import { formatObject } from '../util'
export default {
  components: {
    ResponseParameter, RequestParameter, Method, Test
  },
  props: {
  },
  data () {
    return {
      form: {},
      testResult: {}
    }
  },
  methods: {
    format (obj) {
      return formatObject(obj)
    },
    upperCase (method) {
      if (method) {
        return method.toUpperCase()
      }
      return ''
    },
    getOperation () {
      return this.$store.getters.getOperation(this.$route.query['operationId'])
    }
  },
  computed: {
    operation: {
      get () {
        return this.getOperation()
      }
    },
    parameters: {
      get () {
        let operation = this.getOperation()
        if (operation && operation.parameters) {
          return operation.parameters
        }
        return []
      }
    },
    responses: {
      get () {
        let operation = this.getOperation()
        let arr = []
        if (operation && operation.responses) {
          let responses = operation.responses
          if (responses) {
            for (let key in responses) {
              let value = responses[key]
              let obj = Object.assign({}, value)
              obj['status'] = key
              arr.push(obj)
            }
          }
        }
        return arr
      }
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style>

</style>
