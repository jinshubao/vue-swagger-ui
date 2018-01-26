<template>
  <section>
    <h3>测试</h3>
    <el-form ref="form" label-width="150px">
      <section v-if="headerParameters.length > 0">
        <el-form-item size="mini"  v-for="param in headerParameters"
                      :label="param.name"
                      :key="param.name"
                      :prop="'headerParam.' + param.name"
                      :rules="{
                              required: param.required,
                              message: param.name +'必填',
                              trigger: 'blur, change'
                      }">
          <el-input :value="param.default"></el-input>
        </el-form-item>
      </section>
      <section v-if="queryParameters.length > 0">
        <el-form-item size="mini"  v-for="param in queryParameters"
                      :label="param.name"
                      :key="param.name"
                      :prop="'queryParam.' + param.name"
                      :rules="{
                              required: param.required, message: param.description +'必填', trigger: 'blur, change'
                      }">
          <el-input :value="param.default"></el-input>
        </el-form-item>
      </section>
      <section v-if="bodyParameters.length > 0">
        <el-form-item v-for="param in bodyParameters"
                      :label="param.name"
                      :key="param.name"
                      :prop="'bodyParam.' + param.name">
          <el-input type="textarea" :value="format(param)" autosize></el-input>
        </el-form-item>
      </section>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">测一测</el-button>
      </el-form-item>
    </el-form>
    <p>{{format(testResult)}}</p>
  </section>
</template>

<script>
import { formatObject } from '../util'
import { test } from '../api'
export default {
  props: {
    operation: Object
  },

  data () {
    return {
      headerParam: {},
      queryParam: {},
      bodyParam: {},
      testResult: {}
    }
  },
  methods: {
    onSubmit () {
      console.log('headerParam', this.headerParam)
      console.log('queryParam', this.queryParam)
      console.log('bodyParam', this.bodyParam)
      test(this.operation.method, this.operation.path, {}).then(data => {
        this.testResult = data.data
      })
    },

    format (obj) {
      return formatObject(obj)
    }
  },
  computed: {
    headerParameters: {
      get () {
        if (this.operation && this.operation['parameters']) {
          return this.operation.parameters.filter(param => param.in === 'header')
        }
        return []
      }
    },
    queryParameters: {
      get () {
        if (this.operation && this.operation.parameters) {
          return this.operation.parameters.filter(param => param.in === 'query')
        }
        return []
      }
    },
    bodyParameters: {
      get () {
        if (this.operation && this.operation.parameters) {
          return this.operation.parameters.filter(param => param.in === 'body')
        }
        return []
      }
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
