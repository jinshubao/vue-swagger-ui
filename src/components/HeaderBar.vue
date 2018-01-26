<template>
  <el-row>
    <el-col :span="5">
      <img class="header-logo" src="../assets/logo.png">
    </el-col>
    <el-col :span="15" style="text-align: center;">
      <h1 class="header-title">接口文档</h1>
    </el-col>
<!--    <el-col :span="5">
      <el-input placeholder="请输入域名/IP" v-model="apiHost">
        <template slot="prepend">Http://</template>
        <el-button slot="append" icon="el-icon-search" @click="searchBtnClick"></el-button>
      </el-input>
    </el-col>-->
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
          let definitions = this.handleDefinitionsRef(data['definitions'])
          data['definitions'] = definitions
          this.addApiDocs(data)
          this.$router.push({name: 'groupIndex', query: params})
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
    /*text-align: center;*/
    line-height: 60px;
  }
  .el-header .el-row .el-col {
    height: 60px;
  }
</style>
