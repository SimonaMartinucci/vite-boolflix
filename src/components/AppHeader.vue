<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <div class="search">
            <input type="text" placeholder="Cerca" v-model="store.userInput" @keyup.enter="$emit('search')">
            <button @click="$emit('search')">Cerca</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

header {
    background-color: black;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    h1 {
        color: red;
        font-size: 30px;
        font-weight: 600;
    }

    .search {
        padding-right: 15px;

        input {
            width: 200px;
            padding: 3px;
            margin-right: 10px;
        }

        button {
            padding: 3px 5px;
        }
    }
}

</style>