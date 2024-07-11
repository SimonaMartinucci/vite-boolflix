<script>
import SinglePoster from './SinglePoster.vue'
import { store } from '../store';

export default {
    name: 'AppPosters',
    components: {
        SinglePoster,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>

    <h2>FILM</h2>  
    <div v-for="movie in store.movieList" :key="movie.id">
        <SinglePoster :info="{ type: 'movie', details: movie }" />
    </div>

    <h2>SERIE TV</h2>
    <div v-for="show in store.seriesList" :key="show.id">
        <SinglePoster :info="{ type: 'series', details: show }" />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

</style>