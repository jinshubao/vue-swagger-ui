<template>
  <el-row>
    <el-col>
      <el-menu :default-active="active" @open="handleOpen" @close="handleClose" router>
        <el-submenu v-for="item in tags" :key="item.name" :index="item.name">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{item.description}}</span><br/>
          </template>
          <el-menu-item v-for="path in item.paths" :index="'/operation/'+ path.operationId" :key="path.operationId">
            <i class="el-icon-info"></i>
              <span slot="title">{{path.summary}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
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
    handleOpen (item) {
    },
    handleClose (item) {
    }
  },
  mounted () {
  }
}
</script>
