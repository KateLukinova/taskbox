<template>
  <div id="app">
    <my-header  />
  </div>
</template>

<script>
import MyHeader from './components/Header.vue';

export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style>
@import "./index.css";
body {
  background-color: #504871;
}
</style>
