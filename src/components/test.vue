<template>
  <div class="hello">
    <el-button>点击</el-button>
    <el-tag type="success">{{msg}}</el-tag>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to test!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
