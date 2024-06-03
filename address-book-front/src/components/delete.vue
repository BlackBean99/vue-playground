<template>
    <div>
        <h3>지인삭제</h3>

        <br />
        <input v-model="name" class="form-control" />

        <br />
        <button @click="remove">삭제</button>

    </div>
</template>

<script>
export default {
    name: "delete",
    data() {
        return {
            name: ""
        }
    },
    methods: {
        remove() {
            let url = "http://localhost:3000/memberDel";

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
                .then((res)=>res.json() )
                .then((res)=>{
                    if( res.result !== -1){
                        alert('정상적으로 삭제되었습니다');
                    }else{
                        alert('데이터를 찾을 수 없습니다');
                    }
                })
                .catch(err=>console.log(err));
        }
    }
}
</script>