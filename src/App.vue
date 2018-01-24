<template>
  <el-container>
    <el-header>
      <header-bar @groupChange="groupChange"></header-bar>
    </el-header>
    <el-container>
      <el-aside width="300px">
        <side-menu :tags="tags"></side-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import HeaderBar from './components/HeaderBar'
import SideMenu from './components/SideMenu'
import api from './api'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    HeaderBar, SideMenu
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      addApiDocs: 'addApiDocs'
    }),
    groupChange (value) {
      this.apiDocs({group: value})
    },
    apiDocs (params) {
      api.apiDocs(params).then(res => {
        if (res.data) {
          let data = Object.assign({}, res.data)
          let tags = data.tags
          let pathsObj = data.paths
          tags.forEach((v, index, arr) => {
            let paths = []
            let tag = arr[index]
            for (let path in pathsObj) {
              let pathObj = pathsObj[path]
              for (let method in pathObj) {
                let methodObj = Object.assign({}, pathObj[method])
                if (methodObj['tags'].includes(tag.name)) {
                  methodObj['path'] = path
                  methodObj['method'] = method
                  paths.push(methodObj)
                }
              }
            }
            tag['operations'] = paths
          })
          data.paths = {}
          this.addApiDocs(data)
        }
      })
    }
  },
  computed: {
    ...mapGetters({
      tags: 'tags'
    })
  },
  mounted () {

  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
  }

  .el-container:nth-child(7) .el-aside {
  }
</style>
