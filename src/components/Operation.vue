<template>
  <el-row>
    <el-col :span="24">
      <p>{{operation}}</p>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
  },
  data () {
    return {
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters({
      operation: 'operation'
    })
  },
  created () {
  },
  mounted () {
  }
}
</script>
