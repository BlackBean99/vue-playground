<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ViteSetup from './components/ViteSetup.vue';
import OpenApi from './components/OpenApi.vue';
import COmpositionApi from './components/COmpositionApi.vue';
import Watch from './components/Watch.vue';
</script>

<template>
  <div>
    <ViteSetup/>
    <OpenApi/>
    <COmpositionApi/>
    <Watch/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
