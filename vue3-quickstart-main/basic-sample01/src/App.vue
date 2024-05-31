<template>
  <div>
    <ul>
      <li><a href="http://www.google.com">google</a></li>
      <li><a :href="url">{{  url }}</a></li>
      <li><a v-bind:href=url>{{  url  }}</a></li>
    </ul>
    <p style="font-size: 24px;">style bind</p>
    <p :style="{redfont}">스타일 바인드</p>
  </div>
  <BasicVue-5/>
</template>

<script>
import BasicVue4 from "./components/BasicVue-4.vue"
import BasicVue5 from "./components/BasicVue-5.vue"

export default {
  data(){
    return{
      url:"https://www.google.com",
      redfont: "color: red;"
    }
  },
methods:{
  getUrl(name){
    return "http://" + name + ".com";
  }
},
  name:"App",
  components : { Calc },    
}
</script>