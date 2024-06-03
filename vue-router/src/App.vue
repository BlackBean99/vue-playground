<template>
  <div>
    

    <router-view />
    <Header></Header>
    
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Loading from '../components/Loading.vue'
import { provide } from 'vue';

export default {
  name : "App",
  components : { Header, Loading },
}
</script>