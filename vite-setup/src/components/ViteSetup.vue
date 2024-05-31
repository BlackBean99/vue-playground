<template>
    <div class="vite-setup">
        <h1>{{ count }}</h1>
        <button @click="plus">+</button>
    </div>
</template>
<script>
export default {
    // ref import 
    import  {ref, onMounted} from 'vue';



    setup() {
        const count = ref(0);
        function plus() {
            count.value++;
        }
        return{
            count, plus // 반환된 개체 속성
        }
    },
    mounted(){
        console.log(this.count);
    }
}
</script>