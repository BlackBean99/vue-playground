<template>
<div>
    X: <input type="text" v-model="state.x" placeholder="첫 번째 숫자">
    Y: <input type="text" v-model="state.y" placeholder="두 번째 숫자">
    <button value="계산" @click="sum">계산</button>
    <h2>결과: {{ result }}</h2>
</div>

</template>
<script>
import {reactive, computed} from 'vue';

export default{
    name:"CalculatorBox",
    setup() {
        const state = reactive({x:10, y:20});
        const result = computed(()=>{return state.x + state.y});

    }
}
</script>