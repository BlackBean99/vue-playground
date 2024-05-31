<template>
    <div>
        <h1>두 수의 합</h1>
        X: <input type="text" v-model="x" placeholder="첫 번째 숫자">
        Y: <input type="text" v-model="y" placeholder="두 번째 숫자">
        <button value="계산" @click="sum">계산</button>
        <h2>결과: {{ result }}</h2>
    </div>
</template>
<script>
export default{
    data(){
        return{
            x: 0,
            y: 0,
            result: 0
        }
    },
    setup() {
        const x = ref(0);
        const y = ref(0);
        const result = computed(() => {
            return parseInt(x.value, 10) + parseInt(y.value, 10);
        });
        return {
            x,
            y,
            result
        }
    
    },
    methods:{
        sum(){
            this.result = parseInt(this.x, 10) + parseInt(this.y, 10);
        }
    }
}
</script>