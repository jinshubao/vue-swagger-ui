<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>title</h3>
    </div>
    <div>
      <h3>security</h3>
      <p>{{security}}</p>
      <h3>ui config</h3>
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
