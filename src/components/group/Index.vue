<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>title</h3>
    </div>
    <div>
      <h3>版本</h3>
      <p>{{version}}</p>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      version: {}
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  }
}
</script>
