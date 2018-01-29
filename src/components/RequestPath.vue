<template>
  <div>
    <h3>Path</h3>
    <div>
      <el-tag :type="type">{{upperCase(method)}}</el-tag>
      <span>{{path}}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    method: String,
    path: String
  },
  data () {
    return {
    }
  },
  methods: {
    upperCase (method) {
      if (method) {
        return method.toUpperCase()
      }
      return ''
    }
  },
  computed: {
    type: {
      get () {
        if (!this.method) {
          return ''
        }
        let meth = this.method.toUpperCase()
        if (meth === 'GET') {
          return ''
        } else if (meth === 'POST') {
          return 'success'
        } else if (meth === 'DELETE') {
          return 'danger'
        }
        return ''
      }
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
