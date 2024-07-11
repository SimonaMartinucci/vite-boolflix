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

    <div>
        <SinglePoster />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

</style>