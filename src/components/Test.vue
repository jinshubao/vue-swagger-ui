<template>
  <div>
    <h3>测试</h3>
    <div>
      <el-form ref="formModel" :label-position="labelPosition" :model="formModel" label-width="160px">
        <el-form-item size="default" v-for="(param, index) in formModel.params"
                      :label="param.name"
                      :key="param.name"
                      :prop="'params.'+index +'.value'"
                      :rules="{
                                required: param.required,
                                message: param.name +'必填',
                                trigger: ['blur', 'change']
                              }">
          <el-input v-model="param.value"></el-input>
        </el-form-item>
        <!--
        <div v-if="bodyParameters.length > 0">
          <el-form-item v-for="param in formModel.bodies"
                        :label="param.name"
                        :key="param.name"
                        :prop="bodyParam">
            <el-input type="textarea" :value="format(param)" autosize></el-input>
          </el-form-item>
        </div>
        -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">测一测</el-button>
        </el-form-item>
      </el-form>
      <pre>{{format(testResult)}}</pre>
    </div>
  </div>
</template>

<script>
import { formatObject, deepCopy } from '../util'
import { test } from '../api'
export default {
  props: {
    operation: Object
  },

  data () {
    return {
      labelPosition: 'left',
      formModel: {
        params: [],
        bodies: []
      },
      testResult: {}
    }
  },
  methods: {
    onSubmit () {
      this.$refs['formModel'].validate((valid) => {
        if (valid) {
          let headers = {}
          let params = {}
          let data = {}
          this.formModel.params.forEach(function (param) {
            if (param.in === 'header') {
              headers[param.name] = param.value
            } else if (param.in === 'query') {
              params[param.name] = param.value
            }
          })
          test(this.operation.method, this.operation.path, headers, params, data).then(data => {
            this.testResult = data.data
          })
        } else {
          return false
        }
      })
    },
    format (obj) {
      return formatObject(obj)
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
    if (this.operation.parameters) {
      this.operation.parameters.forEach((param) => {
        let model = deepCopy(param)
        if (param.in === 'header' || param.in === 'query') {
          model.value = model.default
          this.formModel.params.push(model)
        } else {
          this.formModel.bodies.push(model)
        }
      })
    }
    this.testResult = {}
  }
}
</script>
