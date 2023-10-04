export default {
  state: {
    isCollapse: false,
    tabList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],

    currentMenu: null // 高亮显示
  },
  mutations: {
    collapseMenu (state) {
      state.isCollapse = !state.isCollapse
    },
    // 每次点击左侧菜单时，都需要改变tabList
    selectMenu (state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val
        // 判断原有tabList里存不存在这个路由
        const result = state.tabList.findIndex(item => item.name === val.name)
        if (result === -1) {
          state.tabList.push(val)
        }
      } else {
        // 如果是首页，将当前选中的标识重置
        state.currentMenu = null
      }
    }
  }
}
