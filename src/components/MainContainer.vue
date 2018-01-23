<template>
  <el-container>
    <el-aside width="200px">
      <side-menu></side-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from './SideMenu'
import api from '../api'
export default {
  components: {
    SideMenu
  },
  data () {
    return {
    }
  },
  methods: {
    loadDocs () {
      let params = {}
      api.loadDocs(params).then(data => {
        // TODO
      })
    }
  },
  mounted () {
  }
}
</script>
