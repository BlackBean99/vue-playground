<template>
    <div>        
        <h3>지인검색</h3>

        <br />
        <input v-model="name" class="form-control" />

        <br />
        <button @click="search">검색</button>

        <br /><br />

        <table class="table">
        <thead>
        <tr>
            <th>이름</th><th>나이</th><th>전화번호</th><th>주소</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(mem, i) in member" :key="i">
            <td>{{ mem.name }}</td>
            <td>{{ mem.age }}</td>
            <td>{{ mem.phone }}</td>
            <td>{{ mem.address }}</td>
        </tr>
        </tbody>
        </table>

    </div>
</template>

<script>
export default{
    name:"select",
    data(){
        return{
            member:[]
        }
    },
    methods:{
        search(){
            let url = "http://localhost:3000/memberSelect";

            let params = {
                "name": this.name
            }

            const options = {
                method: 'POST',
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            fetch(url, options)
                .then((res)=>res.json())
                .then((json)=>{
                    console.log(json);
                    this.member = json;
                })
                .catch(err=>console.log(err));
        }
    }
}
</script>






