<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <ProductBox />
  <CafeMenu />
  <InputBox v-for="idol in idols" :key="idol.id" :id="idol.id" :name="idol.name"
  : checked
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ProductBox from "./components/ProductBox.vue";
import CafeMenu from "./components/CafeMenu.vue";
import BasicVue from "./components/BasicVue.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ProductBox,
  },
};
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
