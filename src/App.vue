<template>
  <div id="app">
    <Header v-bind:title = "title"></Header>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/common/header.vue"
export default {
  name: 'App',
  components:{
    Header
  },
  data(){
    return{
      title:"欢迎进入test！！"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
