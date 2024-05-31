<template>
    <h3>{{ count }}</h3>
    <button @click="increment">Increment</button>
</template>
<script>
export default{
    data(){
        return {
            count:0
        }
    },
    methods:{
        increment(){
            this.count++;
        },
        watch:{
            count:function(value,oldValue){
                console.log(value);
        }
    }
    }
}
</script>