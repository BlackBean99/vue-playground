<template>
    <div>
        <h3>{{ result }}</h3>
        <h3>{{ name }}</h3>
        <h3>{{ x }}</h3>
        <h3>{{ y }}</h3>
        <input type="text" v-model="x" @change="changeX($event.target.value)">
        <input type="text" v-model="y" @change="changeY($event.target.value)">
        <input type="text" v-model="name" @change="changeName($event.target.value)">
    </div>
</template>
<script>
export default{
    name: "OpenAPI",
    data(){
        return {
            name: "",
            x: 0,
            y: 0,
        }
    },
    computed : {
        result(){
            return parseInt(this.x , 10) + parseInt(this.y , 10);
        }
    },
    mounted() {
        this.name = " john",
        this.x = 10,
        this.y = 20
    },
    methods:{
        changeX(strX){
            let x = parseInt(strX, 10);
            this.x = isNana(x) ? 0 : x;
        },
        changeY(strY){
            let y = parseInt(strY, 10);
            this.y = isNaN(y) ? 0 : y;
        },
        changeName(name){
            this.name = name.trim().length < 2 ? "" : name.trim();
        }
    }
}
</script>