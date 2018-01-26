<template>
  <el-container>
    <el-aside width="300px">
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
import SideMenu from '../SideMenu'
export default {
  components: {
    SideMenu
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  mounted () {
  }
}
</script>
<style>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .el-aside {
    background-color: #E9EEF3;
    /*background-color: #545c64;*/
  }
</style>
