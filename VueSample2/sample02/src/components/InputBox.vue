<template>
    <div style="border: solid 1px gray; padding 5px;">
        이름: <input type="text" v-model="name" />
        <button @click="nameChanged()" id="b1">이름 변경</button>
    </div>
    <div>
        <div id="result"> {{ hot }}이 선택되었습니다.</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            idols: [
                {id:1, name:"BTS",checkbox:true},
                {id:2, name:"EXO"},
                {id:3, name:"TWICE"},
            ]
        }
    },
    methods: {
        nameChanged() {
            this.hot = this.name;
            document.getElementById('result').innerHTML = this.name + '님, ' + this.hot + '이 선택되었습니다.';
        }
    }
};
</script>
<style scoped>
    #result {
        width : 200px;
        height : 50px;
    }
    #b1{
        backgroud-color: red;
        color: white;
    }
    input{
        background-color: black;
        color: white;
    }
</style>