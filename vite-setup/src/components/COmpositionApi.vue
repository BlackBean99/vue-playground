<template>

</template>

<script setup>
import  {ref, onMounted} from 'vue';
// const count = ref(0);
const count = reactuve({num:0, message:'Hello'});
function increment(){
    count.value++;
}

onMounted(()=>{
    console.log("초기값은 ${ count.value }");
})
</script>