<template>
  <div class="tabs">
    <el-tag
      size="small"
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
    >
      {{tag.label}}
    </el-tag>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonTag',
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    changeMenu (item) {
      this.$router.push({
        name: item.name
      })
    },
    handleClose (tag, index) {
      const length = this.tags.length - 1
      this.close(tag)
      // tag标签与当前路由不一致，不需要操作
      // eslint-disable-next-line no-useless-return
      if (tag.name !== this.$route.name) return
      if (index === length) {
        // 向左进行跳转
        this.$router.push({
          name: this.tags[index - 1].name
        })
      } else {
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  }
}
</script>

<style lang="less" scoped>
.tabs{
  padding: 5px;
  .el-tag{
    margin-right: 5px;
    cursor: pointer;
  }
}
</style>
