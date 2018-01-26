<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>title</h3>
    </div>
    <div>
      <h5>安全设置</h5>
      <p>{{security}}</p>
      <h5>界面设置</h5>
      <p>{{ui}}</p>
    </div>
  </el-card>
</template>

<script>
import { securityConfiguration, uiConfiguration } from '../api'
export default {
  data () {
    return {
      security: {},
      ui: {}
    }
  },
  methods: {
    getSecurityConfig () {
      securityConfiguration().then(data => {
        this.security = data.data
      })
    },
    getUiConfig () {
      uiConfiguration().then(data => {
        this.ui = data.data
      })
    }
  },
  created () {
    this.getSecurityConfig()
    this.getUiConfig()
  },
  mounted () {
  }
}
</script>
