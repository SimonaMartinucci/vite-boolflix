<script>
export default {
    name: 'SinglePoster',
    props: ['info'],
    data() {
        return {
            originalRating: this.info.vote_average,
            flagsList: [
                {lang: 'it', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bandiera_italiana_foto.svg/1200px-Bandiera_italiana_foto.svg.png'},
                {lang: 'en', url: 'https://media.istockphoto.com/id/479199262/it/foto/full-frame-immagine-di-bandiera-inghilterra.jpg?s=612x612&w=0&k=20&c=0LWTVtBte4YM9tNO4omcnLP8HE-cRU54CXCFRZF4r3U='},
                {lang: 'fr', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg'},
                {lang: 'de', url: 'https://media.istockphoto.com/id/994137398/it/foto/simbolo-della-bandiera-tedesca.jpg?s=612x612&w=0&k=20&c=l8jS_NaEWyYPkj3lp-EGuvzv7tFqav2imUOcysscYNo='},
                {lang: 'es', url: 'https://italflag.it/wp-content/uploads/2021/11/Bandiera-Spagna.jpg'},
                {lang: 'ja', url: 'https://italflag.it/wp-content/uploads/2021/11/Bandiera-Giappone.jpg'}
            ]
        }
    },
    computed: {
        changeRating() {
            return this.newRating(this.originalRating);
        },

        flagUrl() {
            const flag = this.flagsList.find(flag => flag.lang === this.info.original_language);
            return flag ? flag.url : '';
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
    <h4>
        <img v-if="flagUrl" :src="flagUrl" alt="bandiera" width="30">
        <span v-else>{{ info.original_language }}</span>
    </h4>
    <h4>{{ changeRating }}</h4>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


</style>