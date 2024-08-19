<template>
   <div id="app">
    <HeaderComponent msg="Welcome to Your Vue.js App"/>
    <router-view></router-view>

   </div>

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

