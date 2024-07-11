<script>
import { store } from './store';
import AppHeader from '../src/components/AppHeader.vue'
import AppPosters from './components/AppPosters.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppPosters,
  },
  data() {
        return {
            store,
        }
    },
  methods: {
    searchMovies() {
      let endPoint = store.apiURL;

      if(store.inputUser !== '') {
        endPoint += `&query=${store.userInput}`
      }

      axios.get(endPoint)
      .then(res => {
        store.movieList = res.data.results;
        console.log(store.movieList)
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  created() {
    this.searchMovies();
  }
}
</script>

<template>
  <AppHeader @search="searchMovies" />
 
  <main>
    <AppPosters />
  </main>
</template>

<style lang="scss">
@use '../src/styles/partials/variables' as *;
@use '../src/styles/general.scss' as *;

</style>
