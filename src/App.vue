<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MessageTsx name="my name is tsx"></MessageTsx>
    {{message}}
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import MessageTsx from './components/message-tesx';

/* type IMessage = String; */
@Component({
  components: {HelloWorld, MessageTsx},
})
export default class App extends Vue {
  public message: string = 'hello ts!';
  /* private mounted() {
    setTimeout(() => {
      this.message = 'hello typeScript!';
    }, 2000);
  } */
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
