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
import api from '../api'
export default {
  data () {
    return {
      security: {},
      ui: {}
    }
  },
  methods: {
    securityConfig () {
      api.securityConfiguration().then(data => {
        this.security = data.data
      })
    },
    uiConfig () {
      api.uiConfiguration().then(data => {
        this.ui = data.data
      })
    }
  },
  created () {
    this.securityConfig()
    this.uiConfig()
  },
  mounted () {
  }
}
</script>
