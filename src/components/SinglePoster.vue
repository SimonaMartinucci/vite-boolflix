<script>
export default {
    name: 'SinglePoster',
    props: {
        info: {
            type: Object,
        }
    },
    data() {
        return {
            flagsList: [
                {lang: 'it', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bandiera_italiana_foto.svg/1200px-Bandiera_italiana_foto.svg.png'},
                {lang: 'en', url: 'https://media.istockphoto.com/id/479199262/it/foto/full-frame-immagine-di-bandiera-inghilterra.jpg?s=612x612&w=0&k=20&c=0LWTVtBte4YM9tNO4omcnLP8HE-cRU54CXCFRZF4r3U='},
                {lang: 'fr', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg'},
                {lang: 'de', url: 'https://media.istockphoto.com/id/994137398/it/foto/simbolo-della-bandiera-tedesca.jpg?s=612x612&w=0&k=20&c=l8jS_NaEWyYPkj3lp-EGuvzv7tFqav2imUOcysscYNo='},
                {lang: 'es', url: 'https://italflag.it/wp-content/uploads/2021/11/Bandiera-Spagna.jpg'},
                {lang: 'ja', url: 'https://italflag.it/wp-content/uploads/2021/11/Bandiera-Giappone.jpg'}
            ],
            imgUrl: 'https://image.tmdb.org/t/p/w342',
        }
    },
    computed: {
        changeRating() {
            return this.newRating(this.info.details.vote_average);
        },

        flagUrl() {
            const flag = this.flagsList.find(flag => flag.lang === this.info.details.original_language);
            return flag ? flag.url : '';
        },

        fullStars() {
            return this.newRating(this.info.details.vote_average);
        },

        emptyStars() {
            return 5 - this.fullStars;
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
    <div v-if="info.type === 'movie'">
        <img v-if="info.details.poster_path" :src="`${imgUrl}${info.details.poster_path}`" :alt="info.details.title">
        <span v-else>Nessuna immagine disponibile</span>
        <h3>{{ info.details.title }}</h3>
        <h4>{{ info.details.original_title }}</h4>
        <h4>
            <img v-if="flagUrl" :src="flagUrl" alt="bandiera" width="30">
            <span v-else>{{ info.details.original_language }}</span>
        </h4>
        <div>
            <i v-for="star in fullStars" :key="star" class="fas fa-star"></i>
            <i v-for="star in emptyStars" :key="star" class="far fa-star"></i>
        </div>
        <!-- <h4>{{ changeRating }}</h4> -->
    </div>
    
    <div v-else-if="info.type === 'series'">
        <img v-if="info.details.poster_path" :src="`${imgUrl}${info.details.poster_path}`" :alt="info.details.title">
        <span v-else>Nessuna immagine disponibile</span>>
        <h3>{{ info.details.name }}</h3>
        <h4>{{ info.details.original_name }}</h4>
        <h4>
            <img v-if="flagUrl" :src="flagUrl" alt="bandiera" width="30">
            <span v-else>{{ info.details.original_language }}</span>
        </h4>
        <div>
            <i v-for="star in fullStars" :key="star" class="fas fa-star"></i>
            <i v-for="star in emptyStars" :key="star" class="far fa-star"></i>
        </div>
        <!-- <h4>{{ changeRating }}</h4> -->
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.fa-star {
    color: gold;
}

</style>