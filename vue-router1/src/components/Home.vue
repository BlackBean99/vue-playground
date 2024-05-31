<template>
    <div class="Home">
        <h1>Home</h1>
        <img alt="" src="../assets/logo.png" />

        <br/>

        <a v-bind:href="link">about</a>

    </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            link: "/about"
        }
    }
}
</script>

<style scoped>
.Home{
    background-color: rgb(219, 238, 238);
}    
</style>