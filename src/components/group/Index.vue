<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>{{info.title}}</h3>
      <p>{{info.description}}</p>
    </div>
    <div>
      <h5>版本：{{info.version}}</h5>
      <h5>联系人：<a :href="info.contact.url">{{info.contact.name}}</a></h5>
      <h5>许可证：<a :href="info.license.url">{{info.license.name}}</a></h5>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      version: {}
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      info: 'getInfo'
    })
  },
  created () {
  },
  mounted () {
  }
}
</script>
