<template>
  <div class="parameters">
    <h3>参数</h3>
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
          prop="name"
          label="参数名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="120">
        </el-table-column>
        <el-table-column
          prop="in"
          label="参数位置"
          width="100">
        </el-table-column>
        <el-table-column
          prop="required"
          label="是否必填"
          width="100">
          <template slot-scope="scope">
            {{ scope.row.required? '是' : '否' }}
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
      <pre>{{format(bodyParameters)}}</pre>
    </div>
  </div>
</template>

<script>

import { formatObject } from '../util'
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
    format (obj) {
      return formatObject(obj)
    }
  },
  computed: {
    headerAndQueryParameters: {
      get () {
        if (this.parameters) {
          return this.parameters.filter(param => param.in === 'header' || param.in === 'query')
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
