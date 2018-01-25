<template>
  <section>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>{{operation.summary}}</h3>
        <p>{{operation.description}}</p>
      </div>
      <div>
        <Method :method="operation.method">
          <span>{{operation.path}}</span>
        </Method>
        <p>{{operation.responses}}</p>
        <pre>
          {{JSON.stringify(operation.responses['200'], null, '\t')}}
        </pre>
      </div>
    </el-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Method from './RequestMethod'
export default {
  components: {
    Method
  },
  props: {
  },
  data () {
    return {
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters({
      operation: 'operation'
    })
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style>
 .el-card {
   height: 100%;
 }
</style>
