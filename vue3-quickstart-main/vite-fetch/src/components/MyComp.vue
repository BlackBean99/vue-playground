<template>
    <div>
        <table border="1">
            <tr>
                <th>번호</th><th>username</th><th>email</th><th>phone</th>
            </tr>
            <tr v-for="member in members" :key="member.id">
                <td>{{member.id}}</td>
                <td>{{member.username}}</td>
                <td>{{member.email}}</td>
                <td>{{member.phone}}</td>
            </tr>
        </table>
    </div>    
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default({
    name:"MyComp",
    data(){
        return{
            members:[]
        }
    },
    created(){
        fetch("../source.json")
        .then(res => res.json())
        .then(data => {
            this.members = data
        })
    }
})
</script>