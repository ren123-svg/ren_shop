<template>
  <div id="app">
    <router-view/>
    <FooterGuider v-show="$route.meta.showFotter"/>
  </div>
</template>

<script>
import FooterGuider from './components/FooterGuider/FooterGuider'
export default {
  name: 'App',
  components: {
    FooterGuider
  }
}
</script>

<style>
  .app {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    position: relative;
  }
</style>
