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
    computed: {
        hasMovies() {
            return this.store.movieList.length > 0;
        },

        hasSeries() {
            return this.store.seriesList.length > 0;
        },
    }
}
</script>

<template>
    <div class="start" v-if="!hasMovies && !hasSeries">CERCA FILM O SERIE TV</div>

    <h2 v-if="hasMovies">FILM</h2>  
    <div class="container" v-if="hasMovies">
        <div class="col" v-for="movie in store.movieList" :key="movie.id">
            <SinglePoster :info="{ type: 'movie', details: movie }" />
        </div>
    </div>

    <h2 v-if="hasSeries">SERIE TV</h2>
    <div class="container" v-if="hasSeries">
        <div class="col" v-for="show in store.seriesList" :key="show.id">
            <SinglePoster :info="{ type: 'series', details: show }" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.start {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    margin-top: 40px;
}

h2 {
    color: white;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    padding: 30px 0;
}
.container {
    margin: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    padding-bottom: 30px;
}
</style>