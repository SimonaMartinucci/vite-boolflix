<script>
export default {
    name: 'SinglePoster',
    props: ['info'],
    data() {
        return {
            originalRating: this.info.vote_average
        }
    },
    computed: {
        changeRating() {
            return this.newRating(this.originalRating);
        }
    },
    methods: {
        newRating(rating) {
            return Math.round(rating / 2);
        }
    }
}
</script>

<template>
    <h3>{{ info.title }}</h3>
    <h4>{{ info.original_title }}</h4>
    <h4>{{ info.original_language }}</h4>
    <h4>{{ changeRating }}</h4>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


</style>