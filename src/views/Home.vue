<template>
  <el-container style="height: 100%">
    <el-aside width="auto">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data () {
    return {}
  }

}

</script>

<style lang="less" scoped>
.el-header{
  margin: 0;
  background-color: #333;
}
.el-main{
  margin: 0;
  padding-top: 0;
}
.el-container{
  margin: 0;
}
</style>
