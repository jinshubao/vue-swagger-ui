<template>
  <el-container>
    <el-header>
      <header-bar></header-bar>
    </el-header>
    <router-view></router-view>
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
  },
  mounted () {
  }
}
</script>
