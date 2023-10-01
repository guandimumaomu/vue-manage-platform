<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader
    // 这里注册了一个子组件CommonAside，它可以在当前组件的模板中使用。
    // 这将在模板中添加一个自定义标签<common-aside></common-aside>，
    // 并将其渲染为CommonAside组件的内容。
  },
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
  padding: 0;
}
.el-container{
  margin: 0;
}
</style>
