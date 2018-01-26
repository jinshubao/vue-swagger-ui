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
import api from '../api'
import { mapActions } from 'vuex'
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
    resources () {
      api.resources().then(data => {
        this.groups = data.data
      })
    },
    change (value) {
      this.apiDocs({group: value})
      this.$router.push({name: 'groupIndex', query: {group: value}})
    },
    apiDocs (params) {
      api.apiDocs(params).then(res => {
        if (res.data) {
          let data = Object.assign({}, res.data)
          let tags = data.tags
          let pathsObj = data.paths
          tags.forEach((v, index, arr) => {
            let paths = []
            let tag = arr[index]
            for (let path in pathsObj) {
              let pathObj = pathsObj[path]
              for (let method in pathObj) {
                let methodObj = Object.assign({}, pathObj[method])
                if (methodObj['tags'].includes(tag.name)) {
                  methodObj['path'] = path
                  methodObj['method'] = method
                  paths.push(methodObj)
                }
              }
            }
            tag['operations'] = paths
          })
          data.paths = {}
          this.addApiDocs(data)
        }
      })
    }
  },
  computed: {
  },
  created () {
    this.resources()
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
