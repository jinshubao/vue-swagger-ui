<template>
  <el-row>
    <el-col>
      <el-menu :default-active="active" @select="handleSelect">
        <el-submenu v-for="item in tags" :key="item.name" :index="item.name">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{item.description}}</span><br/>
          </template>
          <el-menu-item v-for="path in item.operations" :index="path.operationId" :key="path.operationId">
            <i class="el-icon-info"></i>
            <span slot="title">{{path.summary}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    tags: Array
  },
  data () {
    return {
      active: '0'
    }
  },
  methods: {
    ...mapActions({
      addOperation: 'addOperation'
    }),
    handleSelect (index, indexPath) {
      let params = null
      this.tags.forEach((v, tindex, arr) => {
        let tag = arr[tindex]
        tag.operations.forEach((pv, pindex, paths) => {
          let path = paths[pindex]
          if (path.operationId === index) {
            params = Object.assign({}, path)
          }
        })
      })
      if (params) {
        this.addOperation(params)
        this.$router.push({name: 'operation', params: params})
      }
    }
  },
  mounted () {
  }
}
</script>
