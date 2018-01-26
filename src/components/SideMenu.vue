<template>
  <el-menu @select="handleSelect">
    <el-submenu v-for="item in tags" :key="item.name" :index="item.name">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>{{item.description}}</span>
      </template>
      <el-menu-item v-for="path in item.operations" :index="path.operationId" :key="path.operationId">
        <i class="el-icon-info"></i>
        <span slot="title">{{path.summary}}</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      addOperation: 'addOperation'
    }),
    handleSelect (index, indexPath) {
      let param = Object.assign({}, this.$route.query)
      param['operationId'] = index
      this.$router.push({name: 'operation', query: param})
    }
  },
  computed: {
    ...mapGetters({
      tags: 'tags'
    })
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  .el-aside .el-submenu__title * {
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
