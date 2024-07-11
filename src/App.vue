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
      })
      .catch(err => {
        console.log(err);
      });
    },

    searchSeries() {
      let endPoint = store.seriesURL;

      if(store.inputUser !== '') {
        endPoint += `&query=${store.userInput}`
      }

      axios.get(endPoint)
      .then(res => {
        store.seriesList = res.data.results;
      })
      .catch(err => {
        console.log(err);
      });
    },

    searchBoth() {
      this.searchMovies();
      this.searchSeries();
    }
  },
  created() {
    this.searchBoth();
  }
}
</script>

<template>
  <AppHeader @search="searchBoth" />
 
  <main>
    <AppPosters />
  </main>
</template>

<style lang="scss">
@use '../src/styles/partials/variables' as *;
@use '../src/styles/general.scss' as *;

</style>
