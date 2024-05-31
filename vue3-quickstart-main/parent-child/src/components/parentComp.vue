<template>
    <div>
        <h2>Parent Componenet</h2>
        <input v-model="message" placeholder="입력"/>
        <button @click="updateMsg">전송</button>
        <ChildComp v-bind:propsdata="sendMsg"/>
    </div>
</template>
<script>
import ChildComp from "./childComp.vue";
export default{
    name:'parentComp',
    data(){
        return{
            message:'',
            sendMsg:'부모컴포넌트에서 전달할 메시지'
        }
    }
}
</script>