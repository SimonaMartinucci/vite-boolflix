import { reactive } from "vue";

export const store = reactive({
    movieList: [],
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=3d7813170aeb75c64c1d313a3329cbb5&language=it-IT',
    userInput: '',
});