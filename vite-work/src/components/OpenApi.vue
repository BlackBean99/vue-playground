<template>

    <div>
        <label>name:</label>
        <input v-model="name" placeholder="name"/>
    </div>
    <div>
        <label>x:</label>
        <input v-model="x" placeholder="x"/>
    </div>
    <div>
        <label>name:</label>
        <input v-model="y" placeholder="y"/>
    </div>

    <hr/>

    name: <span>{{ name }}</span><br/>
    x: <span>{{ x }}</span><br/>
    y: <span>{{ y }}</span><br/>

</template>

<script>
export default{
    name:"OpenApi",
    data(){
        return{
            name:"",
            x: 0,
            y: 0
        }
    },
    computed:{
        result(){
            return parseInt(this.x) + parseInt(this.y);
        }
    },
    mounted(){
        this.name = "john";
        this.x = 10;
        this.y = 20;
    }
}



</script>