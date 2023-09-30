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





# UI搭建

![1696055222845](assets/1696055222845.png)



首页布局

![1696055308747](assets/1696055308747.png)



安装less和less解析器

```
npm i less
npm i less-loader
```

在Home组件中放入首页布局，App.vue中使用 routerview