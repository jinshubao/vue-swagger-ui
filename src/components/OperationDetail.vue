<template>
  <el-row>
    <el-col :span="24">
      <h3>title</h3>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: '接口详情',
  props: {
    operation: Array
  },
  data () {
    return {
      active: '0'
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
