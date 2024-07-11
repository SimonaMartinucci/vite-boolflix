import { reactive } from "vue";

export const store = reactive({
    movieList: [],
    seriesList: [],
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=3d7813170aeb75c64c1d313a3329cbb5&language=it-IT',
    seriesURL: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT',
    userInput: '',
});