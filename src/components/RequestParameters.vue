<template>
  <div>
    <h3>参数</h3>
    <div>
      <h5>Consumes</h5>
      <p>[ {{consumes ? consumes.join(', ') : ''}} ]</p>
      <div v-if="headerAndQueryParameters.length > 0">
        <h5>Header/Query参数</h5>
        <el-table
          :data="headerAndQueryParameters"
          border
          stripe
          style="width: 100%">
          <el-table-column
            prop="in"
            label="参数位置"
            width="100">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.in === 'header' ? 'danger' : 'primary'"
                disable-transitions>{{scope.row.in}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="参数名"
            width="120">
            <template slot-scope="scope">
              <strong v-if="scope.row.required">{{ scope.row.name}}</strong>
              {{ scope.row.required?'':scope.row.name}}
              <br/>
              <em>{{ scope.row.required? '（必填）' : '（可选）' }}</em>
            </template>
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型"
            width="120">
            <template slot-scope="scope">
              {{scope.row.type}}
              <em v-if="scope.row.format">({{scope.row.format}})</em>
            </template>
          </el-table-column>
          <el-table-column
            prop="default"
            label="默认值"
            width="120">
          </el-table-column>
          <el-table-column
            prop="enum"
            label="可选值"
            width="180">
            <template slot-scope="scope">
              {{scope.row.enum ? scope.row.enum.join(', ') : ''}}
            </template>
          </el-table-column>
          <el-table-column
            prop="description"
            label="描述">
          </el-table-column>
        </el-table>
      </div>
      <div v-if="bodyParameters.length > 0">
        <h5>Body参数</h5>
        <pre v-for="param in bodyParameters" :key="param.name">{{format(param.schema.$ref)}}</pre>
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
    consumes: Array
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapGetters({
      getDefinition: 'getDefinition'
    }),
    format (obj) {
      return formatObject(obj)
    }
  },
  computed: {
    headerAndQueryParameters: {
      get () {
        if (this.parameters) {
          return this.parameters.filter(param => param.in === 'header' || param.in === 'query').sort((a, b) => {
            return a.in === 'header' ? 0 : 1
          })
        }
        return []
      }
    },
    bodyParameters: {
      get () {
        if (this.parameters) {
          return this.parameters.filter(param => param.in === 'body')
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
<style>
  .parameters {
    border-bottom: 1px solid #ebeef5;
    padding-bottom: 20px;
  }
</style>
