---
typora-copy-images-to: assets
---

# Vue2后台管理平台笔记

## 脚手架搭建

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



## Element脚手架中的使用

### 安装

npm i element-ui -S

![1696045092058](assets/1696045092058.png)

### 全局引入

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

