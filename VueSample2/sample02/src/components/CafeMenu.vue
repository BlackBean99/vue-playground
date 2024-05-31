<template>
    <div>
        <table>
            <tr>
                <td>좋아하는 커피 종류</td>
                <td>{{ favoriteCoffee }}</td>
            </tr>
            <tr>
                <td>좋아하는 쥬스 종류</td>
                <td>{{ favoriteJuice }}</td>
            </tr>
            <tr>
                <td>좋아하는 샐러드 종류</td>
                <td>{{ favoriteSalad }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            favoriteCoffee: '아이스 라떼',
            favoriteJuice: '블루베리 주스',
            favoriteSalad: '치킨 샐러드'
        };
    }
};
</script>

<style scoped>
/* 스타일을 여기 추가할 수 있습니다 */
</style>