<template lang="">
    <div>
        <button v-on:click="move">Home으로 이동</button>
        <br/>
        <a :href="'/'">Home으로</a>
    </div>
</template>
<script>
export default {
    name: 'About',
    methods: {
        move(){
            this.$router.push('/');
            
        }
    }
}
</script>
<style lang="">
    
</style>