<template>
  <div id="app">
    <img src="./assets/logo.png">
    <BeforeSleep/>
    <AfterSleep/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BeforeSleep from './components/BeforeSleep.vue';
import AfterSleep from './components/AfterSleep.vue';


@Component({
  components: {
    BeforeSleep,
    AfterSleep,
  },
})
export default class App extends Vue {}
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
