---
typora-copy-images-to: assets
---

#脚手架搭建

shift + 鼠标右键 打开 powershell

![1696040895090](assets/1696040895090.png)

创建的名字中不能有大写字母

![1696041169608](assets/1696041169608.png)



![1696041280882](assets/1696041280882.png)

![1696041325845](assets/1696041325845.png)

不使用 history mode， 默认哈希，因为history需要后端的工作。使用less

![1696041437160](assets/1696041437160.png)

ESLint对代码进行修正

![1696041484555](assets/1696041484555.png)

在保存的时候修正

![1696041528172](assets/1696041528172.png)

存放在单个文件中



## package.json

```json
{
  "name": "vue-manage-platform", // 项目的名称
  "version": "0.1.0", // 项目的版本号
  "private": true, // 将项目标记为私有，防止意外发布到公共包管理器
  "scripts": {
    "serve": "vue-cli-service serve", // 用于启动开发服务器的命令
    "build": "vue-cli-service build", // 用于构建生产版本的命令
    "lint": "vue-cli-service lint" // 用于运行代码风格检查的命令
  },
  "dependencies": { //包含了项目在运行时所需的依赖项，通常是生产环境所需的包
    "core-js": "^3.8.3", // 项目所依赖的核心JavaScript库的版本
    "element-ui": "^2.15.14", // 项目依赖的Element UI框架的版本
    "vue": "^2.6.14", // 项目依赖的Vue.js的版本
    "vue-router": "^3.5.1", // 项目依赖的Vue Router的版本
    "vuex": "^3.6.2" // 项目依赖的Vuex的版本
  },
  
  "devDependencies": { // 包含了开发时需要的依赖项，例如构建工具、测试框架、代码质量工具等。这种分离有助于减小生产环境的包大小，并确保不必要的工具不会部署到生产服务器上。
    "@babel/core": "^7.12.16", // 开发环境依赖的Babel核心的版本
    "@babel/eslint-parser": "^7.12.16", // 用于ESLint解析的Babel插件的版本
    "@vue/cli-plugin-babel": "~5.0.0", // Vue CLI的Babel插件的版本
    "@vue/cli-plugin-eslint": "~5.0.0", // Vue CLI的ESLint插件的版本
    "@vue/cli-plugin-router": "~5.0.0", // Vue CLI的Vue Router插件的版本
    "@vue/cli-plugin-vuex": "~5.0.0", // Vue CLI的Vuex插件的版本
    "@vue/cli-service": "~5.0.0", // Vue CLI的服务插件的版本
    "@vue/eslint-config-standard": "^6.1.0", // Vue项目使用的ESLint配置的版本
    "eslint": "^7.32.0", // 项目使用的ESLint工具的版本
    "eslint-plugin-import": "^2.25.3", // 用于支持ESLint的import规则的插件的版本
    "eslint-plugin-node": "^11.1.0", // 用于支持ESLint的Node.js规则的插件的版本
    "eslint-plugin-promise": "^5.1.0", // 用于支持ESLint的Promise规则的插件的版本
    "eslint-plugin-vue": "^8.0.3", // 用于支持ESLint的Vue.js规则的插件的版本
    "less": "^4.2.0", // 项目依赖的Less CSS预处理器的版本
    "less-loader": "^8.1.1", // 用于Webpack的Less加载器的版本
    "vue-template-compiler": "^2.6.14" // 用于编译Vue模板的版本
  }
}

```



## vue.config.js





#Element脚手架中的使用

##安装

npm i element-ui -S

![1696045092058](assets/1696045092058.png)

##全局引入

```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```



# Vue路由的使用

## 组件定义时设置的name和路由定义时设置的name的区别

当在Vue.js中定义组件时，`name`属性用于指定该组件的名字，以便在开发工具和调试中更容易识别和跟踪组件。下面是一个带有注释的代码示例，演示如何在Vue组件中使用`name`属性：

```vue
<template>
  <div>
    <h1>Hello, {{ message }}</h1>
  </div>
</template>

<script>
export default {
  // Vue组件的名字，用于开发和调试
  name: 'HelloWorld', // 组件的名字

  data() {
    return {
      message: 'World'
    };
  }
};
</script>
```

在这个示例中：

- `name: 'HelloWorld'` 是为Vue组件指定名字。这个名字在**开发工具中可见**，有助于开发者追踪和调试组件。

- `data()` 方法定义了一个名为`message`的数据属性，用于在模板中显示 "World"。

虽然在路由设置中也可以使用`name`属性，但在路由中的使用方式略有不同。以下是一个路由配置示例，以演示如何在路由中使用`name`属性：

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home', // 路由的名字
    component: HelloWorld
  }
];

const router = new VueRouter({
  routes
});

export default router;
```

在这个示例中：

- `name: 'home'` 是路由的名字，它与Vue组件的名字是不同的。路由的名字用于在路由配置和导航中引用路由，以便在代码中进行路由导航。

所以，Vue组件的`name`属性用于组件本身的识别和调试，而路由的`name`属性用于路由的配置和导航。尽管它们可能具有相似的名字，但在不同上下文中具有不同的用途。



# 首页UI搭建

![1696055222845](assets/1696055222845.png)



首页布局

![1696055308747](assets/1696055308747.png)



安装less和less解析器

```
npm i less
npm i less-loader
```

在Home组件中放入首页布局，App.vue中使用 routerview



# slot

![1696127181904](assets/1696127181904.png)



默认显示SUBMIT，在插槽中间写上默认内容

![1696127255633](assets/1696127255633.png)



## 具名插槽

有时，一个组件拥有多个插槽很有用。让我们看一下现代 Web 应用程序中的常见 UI 组件来探索这个概念。

![1696128070714](assets/1696128070714.png)

如果您使用过任何大型社交媒体平台，您都会见过这样的组件。它通常称为媒体对象或媒体框。如您所见，它显示用户头像、标题和段落。

用户头像可以是它自己的组件，然后我们可以插入**标题和段落**。我们可以首先为它们添加两个插槽，如下所示：



**`<slot>` 元素有一个特殊的 attribute：`name`。这个 attribute 可以用来定义额外的插槽。**

**在向具名插槽提供内容的时候，我们可以在一个 `<template>` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称。**

**v-slot 只能添加在 <template> 上** (只有[一种例外情况](https://v2.cn.vuejs.org/v2/guide/components-slots.html#%E7%8B%AC%E5%8D%A0%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99%E8%AF%AD%E6%B3%95))，这一点和已经废弃的 [`slot` attribute](https://v2.cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95) 不同。



**MediaBox.vue** 问题版

```Vue
 <template>
      <div>
        <UserAvatar/>
        <slot></slot>
        <slot></slot>
        //有两个插槽
      </div>
</template>

//但是当我们尝试使用这个组件时遇到了一个问题：

<MediaBox>
      <h2>Adam Jahr</h2>
      <p>My words.</p>
</MediaBox>

//Vue 不知道哪些内容应该放入哪个槽中。
//我们需要明确并指定内容的去向，我们可以通过具名插槽来做到这一点。
```

**MediaBox.vue** 具名插槽版

```vue
<template>
      <div>
        <slot name="heading"></slot>
        <slot name="paragraph"></slot>
      </div>
</template>
//现在，我们可以在slot将插入的模板代码的属性中使用该名称。

非常重要：
<MediaBox>
      <h2 v-slot:heading>Adam Jahr</h2>
      <p v-slot:paragraph>My words.</p>
</MediaBox>
//我们正在将标题和段落插入到我们想要的位置。
```



# 侧边栏实现

elementUI提供了**NavMenu 导航菜单**

分为顶栏和侧栏，提供折起和展开

```vue
<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside> //使用侧边栏导航组件，注意是小写，单词之间用短划线隔开
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue' //引入侧边栏组件
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    CommonAside
  },
  data () {
    return {}
  }

}
```

在Vue挂载的app中默认设置为1屏的高度

```vue
<style>
  #app{
    height: 100vh;
  }
</style>
```



**将侧边栏的导航分为有子菜单的和无子菜单的**

```vue
//菜单中的数据
data () {
    return {
      isCollapse: false,
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    }
  },


//使用计算属性进行区分
computed: {
    noChildren () {
      return this.menu.filter(item => !item.children)
    },
    hasChildren () {
      return this.menu.filter(item => item.children)
    }
  }

//无子菜单进行遍历 index是EL组件自己的属性，意为唯一标志
<el-menu-item v-for="item in noChildren" @click="clickMenu(item)" :index="item.path" :key="item.path">
      <template v-slot:title>
// v-slot必须用在template（只有一种特殊情况）
        <i :class="'el-icon-' + item.icon"></i>
//图标用拼接的形式实现
        <span >{{item.label}}</span>
      </template>
    </el-menu-item>

//有子菜单进行遍历
<el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
    <template v-slot:title>
      <i :class="'el-icon-'+item.icon"></i>
      <span>{{item.label}}</span>
    </template>
    <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
      <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
    </el-menu-item-group>
</el-submenu>
```



**去掉页面整体的白边**      （暂时无效，不知道哪里出了问题）

```
//去掉页面的白边
html, body{
    margin: 0;
    padding: 0;
  }
```



# 路由跳转初步设置

## 页面结构与路由设置

![1696141442822](assets/1696141442822.png)



```JS
//路由设置
const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/index.vue')
      }
    ]
  }
]
```



## 路由跳转

### 路由跳转设置解析

```vue
//router下的index.js文件中
const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/index.vue')
      }
    ]
  }
]

//CommonAside组件中
<el-menu-item v-for="item in noChildren" @click="clickMenu(item)" :index="item.path" :key="item.path">
      <template v-slot:title>
        <i :class="'el-icon-' + item.icon"></i>
        <span >{{item.label}}</span>
      </template>
  </el-menu-item>

//注意click点击事件
clickMenu (item) {
      this.$router.push({
        name: item.name
      })
    }

```

**解析：**

`clickMenu` 函数能够实现路由跳转的原因是因为它使用了Vue Router库的 `$router.push()` 方法来进行页面路由的切换。

`this.$router.push()` 方法用于导航到不同的路由，具体来说，它使用 `item.name` 来确定要导航到的路由。

`clickMenu` 函数接收一个 `item` 参数，这个参数代表了菜单项的信息，其中包括 `item.name`。`item.name` 在菜单项对象中是路由的名称。通过 `this.$router.push({ name: item.name })`，你告诉Vue Router去激活具有指定名称的路由，从而导航到相应的页面。

所以，当你点击菜单项时，`clickMenu` 函数根据被点击菜单项的路由名称（`item.name`），触发了Vue Router的路由切换，从而实现了页面的跳转。



`clickMenu` 函数与路由配置中的 `name` 属性相关。在你的路由配置中，有一个名为 `Main` 的路由，它是你的主视图组件。 `Main` 路由有两个子路由：`home` 和 `user`，它们分别具有 `name` 属性为 `'home'` 和 `'user'`。

当你调用 `this.$router.push({ name: item.name })` 来触发路由导航时，`item.name` 的值应该匹配路由配置中的某个路由的 `name` 值。在你的示例中，`item.name` 应该匹配 `Main`、`home` 或 `user` 中的一个，以便导航到相应的路由。

所以，`clickMenu` 函数与路由配置中的 `Main`、`home` 和 `user` 三个路由的 `name` 属性相关。



### this.$

`this.$router.push` 中的 `$` 符号表示 Vue.js 中的实例属性。在 Vue.js 应用中，你可以通过 `this.$` 来访问全局的 Vue 实例的属性和方法。

- `this`：代表当前 Vue 组件的实例。
- `$router`：是 Vue Router 的实例，它允许你进行前端路由导航。
- `.push`：是 Vue Router 提供的一个方法，用于导航到不同的路由。





###编程式导航

除了使用 `<router-link>` 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。

`router.push(location, onComplete?, onAbort?)`

注意：在 Vue 实例内部，**你可以通过 $router 访问路由实例**。因此你可以调用

```
this.$router.push
```

想要导航到不同的 URL，则使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

当你点击 `<router-link>` 时，这个方法会在内部调用，所以说，点击 `<router-link :to="...">` 等同于调用 `router.push(...)`。

| 声明式                       | 编程式                |
| ------------------------- | ------------------ |
| `<router-link :to="...">` | `router.push(...)` |

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：

```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})

```

**注意：如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：**

```js
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user

```

同样的规则也适用于 `router-link` 组件的 `to` 属性。

在 2.2.0+，可选的在 `router.push` 或 `router.replace` 中提供 `onComplete` 和 `onAbort` 回调作为第二个和第三个参数。这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。在 3.1.0+，可以省略第二个和第三个参数，此时如果支持 Promise，`router.push` 或 `router.replace` 将返回一个 Promise。

**注意**： 如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 `/users/1` -> `/users/2`)，你需要使用 [`beforeRouteUpdate`](https://v3.router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96) 来响应这个变化 (比如抓取用户信息)。



`router.replace(location, onComplete?, onAbort?)`

跟 `router.push` 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

| 声明式                               | 编程式                   |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

`router.go(n)`

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 `window.history.go(n)`。

例子

```
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)

```



**操作 History**

你也许注意到 `router.push`、 `router.replace` 和 `router.go` 跟 [`window.history.pushState`、 `window.history.replaceState` 和 `window.history.go` (opens new window)](https://developer.mozilla.org/en-US/docs/Web/API/History)好像， 实际上它们确实是效仿 `window.history` API 的。

因此，如果你已经熟悉 [Browser History APIs (opens new window)](https://developer.mozilla.org/en-US/docs/Web/API/History_API)，那么在 Vue Router 中操作 history 就是超级简单的。

还有值得提及的，Vue Router 的导航方法 (`push`、 `replace`、 `go`) 在各类路由模式 (`history`、 `hash` 和 `abstract`) 下表现一致。



## 注意点

当在Vue.js中定义组件时，`name`属性用于指定该组件的名字，以便在开发工具和调试中更容易识别和跟踪组件。下面是一个带有注释的代码示例，演示如何在Vue组件中使用`name`属性：

```vue
<template>
  <div>
    <h1>Hello, {{ message }}</h1>
  </div>
</template>

<script>
export default {
  // Vue组件的名字，用于开发和调试
  name: 'HelloWorld', // 组件的名字

  data() {
    return {
      message: 'World'
    };
  }
};
</script>
```

在这个示例中：

- `name: 'HelloWorld'` 是为Vue组件指定名字。这个名字在开发工具中可见，有助于开发者追踪和调试组件。

- `data()` 方法定义了一个名为`message`的数据属性，用于在模板中显示 "World"。

虽然在路由设置中也可以使用`name`属性，但在路由中的使用方式略有不同。以下是一个路由配置示例，以演示如何在路由中使用`name`属性：

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home', // 路由的名字
    component: HelloWorld
  }
];

const router = new VueRouter({
  routes
});

export default router;
```

在这个示例中：

- `name: 'home'` 是路由的名字，它与Vue组件的名字是不同的。路由的名字用于在路由配置和导航中引用路由，以便在代码中进行路由导航。

所以，Vue组件的`name`属性用于组件本身的识别和调试，而路由的`name`属性用于路由的配置和导航。尽管它们可能具有相似的名字，但在不同上下文中具有不同的用途。



# header组件搭建

header组件分为两个部分，左边部分是导航图标+面包屑，右边部分是用户图标+下拉菜单





导航图标



面包屑



Dropdown下拉菜单





靠左、靠右布局，左右贴边同时上下居中



通过导航图标控制aside部分的展开和收起



# Vuex实现左侧折叠

