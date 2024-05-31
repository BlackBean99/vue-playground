<template>
    <div>
        <h1>This id an about page</h1>
        <p>welcome</p>

        <button v-on:click="move">Home으로 이동</button>

        <br/><br/>

        <a :href="'/'">Home으로</a>

    </div>
</template>
<script>
export default {
    name: 'About',
    methods: {
        move(){
            this.$router.push("/");
        }
    },
}
</script>

<style lang="">
    
</style>