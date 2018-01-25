<template>
  <el-row>
    <el-col :span="4">
      <img class="header-logo" src="../assets/logo.png">
    </el-col>
    <el-col :span="7">
      <h3 class="header-title">接口文档</h3>
    </el-col>
    <el-col :span="5">
      <el-input placeholder="请输入域名/IP" v-model="apiHost">
        <template slot="prepend">Http://</template>
        <el-button slot="append" icon="el-icon-search" @click="searchBtnClick"></el-button>
      </el-input>
    </el-col>
    <el-col :span="4">
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
      addApiHost: 'addApiHost'
    }),
    resources () {
      api.resources().then(data => {
        this.groups = data.data
      })
    },
    change (value) {
      this.$emit('groupChange', value)
    },
    searchBtnClick () {
      // this.addApiHost(this.apiHost)
      this.resources()
    }
  },
  computed: {
    apiHost: {
      set (value) {
        localStorage.lastname = value
      },
      get () {
        return localStorage.lastname
      }
    }
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
