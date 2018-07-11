<template>
  <el-container class="app-wrapper">
    <el-header class="app-header">
      <header-bar></header-bar>
    </el-header>
    <el-container>
      <div class="app-sider">
        <el-scrollbar style="height:100%">
        <side-menu></side-menu>
        </el-scrollbar>
      </div>
      <div  class="app-main" >
        <el-scrollbar style="height:100%">
          <router-view :key="key"></router-view>
        </el-scrollbar>
      </div>
    </el-container>
  </el-container>
</template>
<script>
import HeaderBar from './components/HeaderBar'
import SideMenu from './components/SideMenu'
export default {
  components: {
    HeaderBar, SideMenu
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    key () {
      return this.$route.fullPath
    }
  },
  mounted () {
  }
}
</script>
<style>
  .app-header{
    height: 60px;
  }
  .app-wrapper{
    height: 100%;
    width: 100%;
  }
  .app-sider{
    position: fixed;
    left: 0;
    overflow: hidden;
    top: 70px;
    bottom: 0;
    height: 100%;
  }
  .app-main {
    position: fixed;
    margin-left: 300px;
    height: 100%;
    width: 100%;
  }
</style>
