<template>
    <div>
        <h3>{{ result }}</h3>
        <h3> name: <div inline style="width: 120px; border: 1px solid ivory; color: #333333">{{ name }}</div></h3>
        <h3> x(키): <div inline style="width: 120px; border: 1px solid ivory; color: #333333">{{ x }}</div></h3>
        <h3> y(몸무게): <div inline style="width: 120px; border: 1px solid ivory; color: #333333">{{ y }}</div></h3>
        <input type="text" v-model="x" @change="changeX($event.target.value)">
        <input type="text" v-model="y" @change="changeY($event.target.value)">
        <input type="text" v-model="name" @change="changeName($event.target.value)">
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
    name: "CompositionAPI",
    setup() {
        const name = ref("");
        const x = ref(0);
        const y = ref(0);

        const result = computed(() => {
            return parseInt(x.value, 10) + parseInt(y.value, 10);
        });

        const changeX = (strX) => {
            let newX = parseInt(strX, 10);
            x.value = isNaN(newX) ? 0 : newX;
        };

        const changeY = (strY) => {
            let newY = parseInt(strY, 10);
            y.value = isNaN(newY) ? 0 : newY;
        };

        const changeName = (newName) => {
            name.value = newName.trim().length < 2 ? "" : newName.trim();
        };

        onMounted(() => {
            name.value = "john";
            x.value = 10;
            y.value = 20;
        });

        return {
            name,
            x,
            y,
            result,
            changeX,
            changeY,
            changeName
        };
    }
};
</script>