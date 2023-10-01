<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

//去掉页面的白边
html, body{
    margin: 0;
    padding: 0;
  }

#app{
    height: 100vh;
  }
</style>
