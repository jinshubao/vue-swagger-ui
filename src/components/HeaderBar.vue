<template>
  <el-row>
    <el-col :span="5">
      <img class="header-logo" src="../assets/logo.png">
    </el-col>
    <el-col :span="15" style="text-align: center;">
      <h1 class="header-title">接口文档</h1>
    </el-col>
    <el-col :span="4" style="text-align: right;">
      <el-select v-model="group" placeholder="请选择" @change="change">
        <el-option
          v-for="item in groups"
          :key="item.name"
          :label="item.name"
          :value="item.name">
        </el-option>
      </el-select>
    </el-col>
  </el-row>
</template>

<script>
import { apiDocs, resources } from '../api'
import { mapActions } from 'vuex'
import { forEachValue } from '../util'
export default {
  props: {
  },
  data () {
    return {
      groups: [],
      group: ''
    }
  },
  methods: {
    ...mapActions({
      addApiDocs: 'addApiDocs'
    }),
    getResources () {
      resources().then(data => {
        this.groups = data.data
      })
    },
    change (value) {
      this.getApiDocs({group: value})
    },
    getApiDocs (params) {
      apiDocs(params).then(res => {
        if (res.data) {
          let data = res.data
          data = this.handlePath(data)
          this.handleTags(data['tags'], data['definitions'])
          data['definitions'] = this.handleDefinitionsRef(data['definitions'])
          this.addApiDocs(data)
          this.$router.push({name: 'group', query: params})
        }
      })
    },
    handlePath (data) {
      let tags = data.tags
      let pathsObj = data.paths
      tags.forEach((v, index, arr) => {
        let paths = []
        let tag = arr[index]
        forEachValue(pathsObj, (pathObj, path) => {
          forEachValue(pathObj, (methodObj, key) => {
            if (methodObj['tags'].includes(tag.name)) {
              methodObj['path'] = path
              methodObj['method'] = key
              paths.push(methodObj)
            }
          })
        })
        tag['operations'] = paths
      })
      data.paths = {}
      return data
    },
    handleDefinitionsRef (definitions) {
      let definition = {}
      forEachValue(definitions, (value, key) => {
        this.handleDefinition(definitions, value)
        definition[key] = value
      })
      return definition
    },
    handleDefinition (definitions, definition) {
      let properties = definition['properties']
      forEachValue(properties, (property, key) => {
        if (property['type'] === 'array') {
          let ref = property['items']['$ref']
          if (ref && (typeof ref === 'string')) {
            ref = ref.replace('#/definitions/', '')
            let reference = definitions[ref]
            this.handleDefinition(definitions, reference)
            property['items']['$ref'] = reference
          }
        } else {
          let ref = property['$ref']
          if (ref && (typeof ref === 'string')) {
            ref = ref.replace('#/definitions/', '')
            let reference = definitions[ref]
            this.handleDefinition(definitions, reference)
            property['$ref'] = reference
          }
        }
      })
    },
    handleTags (tags, definitions) {
      for (let index in tags) {
        let tag = tags[index]
        let operations = tag['operations']
        if (operations) {
          for (let i in operations) {
            let operation = operations[i]
            let parameters = operation['parameters']
            this.handleParameters(parameters, definitions)
          }
        }
      }
    },
    handleParameters (parameters, definitions) {
      for (let index in parameters) {
        let param = parameters[index]
        let schema = param['schema']
        if (schema) {
          if (schema['type'] === 'array') {
            let ref = schema['items']['$ref']
            if (ref && (typeof ref === 'string')) {
              ref = ref.replace('#/definitions/', '')
              schema['items']['$ref'] = definitions[ref]
            }
          } else {
            let ref = schema['$ref']
            if (ref && (typeof ref === 'string')) {
              ref = ref.replace('#/definitions/', '')
              schema['$ref'] = definitions[ref]
            }
          }
        }
      }
    }
  },
  computed: {
  },
  created () {
    this.getResources()
  },
  mounted () {
  }
}
</script>
<style>
  .header-logo {
    width: 60px;
  }
  .header-title {
    margin: 0 auto;
  }
  .el-header {
    background-color: #89bf04;
    color: #333;
    line-height: 60px;
  }

</style>
