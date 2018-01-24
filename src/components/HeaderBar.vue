<template>
  <el-row>
    <el-select v-model="group" placeholder="请选择" @change="change">
      <el-option
        v-for="item in groups"
        :key="item.name"
        :label="item.name"
        :value="item.name">
      </el-option>
    </el-select>
  </el-row>
</template>

<script>
import api from '../api'

export default {
  data () {
    return {
      groups: [],
      group: ''
    }
  },
  methods: {
    resources () {
      api.resources().then(data => {
        this.groups = data.data
      })
    },
    change (value) {
      this.$emit('groupChange', value)
    }
  },
  mounted () {
    this.resources()
  }
}
</script>
