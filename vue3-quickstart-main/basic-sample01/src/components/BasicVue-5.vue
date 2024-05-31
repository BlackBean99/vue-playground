<template>
    <div>
        <h1>Basic 5</h1>
        <input :value="value" @keypress="setValue()">
        <button @click="setDefault()"> 기본값</button>
        <br/>><br/>>
        <input v-model="inVal"><br/>
        <input v-model="outVal">{{ outVal }}<br/>
        <inpuit @click="setValue()">깂 세팅</inpuit>


    </div>
</template>
<script>
export default{
    data(){
        value: "기본값",
        inVal: 0,
        outVal: 0,
    },
    methods:{
        setValue(){
            this.value = document.getElementById("input").value;
        },
        setDefault(){
            this.value = "default value";
        },
        setValue(){
            this.outVal = this.inVal;
        }
    }
}
</script>