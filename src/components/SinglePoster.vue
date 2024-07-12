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
            hover: false,
        }
    },
    computed: {
        flagUrl() {
            const flag = this.flagsList.find(flag => flag.lang === this.info.details.original_language);
            return flag ? flag.url : '';
        },

        fullStars() {
            return this.newRating(this.info.details.vote_average);
        },

        emptyStars() {
            return 5 - this.fullStars;
        },

        bgImage() {
            return `${this.imgUrl}${this.info.details.poster_path}`;
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
    <div class="card" v-if="info.type === 'movie'">
        <div class="poster" :style="info.details.poster_path ? { backgroundImage: `url(${bgImage})`} : { backgroundColor: 'black'}" @mouseenter="hover = true" @mouseleave="hover = false">
            <div class="no-poster" v-if="!info.details.poster_path && hover === false">{{ info.details.title }}</div>
            <div class="content" v-show="hover">
                <h3>{{ info.details.title }}</h3>
                <h4>{{ info.details.original_title }}</h4>
                <div class="flag">
                    <img v-if="flagUrl" :src="flagUrl" alt="bandiera" width="30">
                    <span v-else>{{ info.details.original_language }}</span>
                </div>
                <div class="stars">
                    <i v-for="star in fullStars" :key="star" class="fas fa-star"></i>
                    <i v-for="star in emptyStars" :key="star" class="far fa-star"></i>
                </div>
                <p>{{ info.details.overview }}</p>
            </div>
        </div>
    </div>
    
    <div class="card" v-else-if="info.type === 'series'">
        <div class="poster" :style="info.details.poster_path ? { backgroundImage: `url(${bgImage})`} : { backgroundColor: 'black'}" @mouseenter="hover = true" @mouseleave="hover = false">
            <div class="no-poster" v-if="!info.details.poster_path && hover === false">{{ info.details.name }}</div>
            <div class="content" v-show="hover">
                <h3>{{ info.details.name }}</h3>
                <h4>{{ info.details.original_name }}</h4>
                <div class="flag">
                    <img v-if="flagUrl" :src="flagUrl" alt="bandiera" width="30">
                    <span v-else>{{ info.details.original_language }}</span>
                </div>
                <div class="stars">
                    <i v-for="star in fullStars" :key="star" class="fas fa-star"></i>
                    <i v-for="star in emptyStars" :key="star" class="far fa-star"></i>
                </div>
                <p>{{ info.details.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    width: 342px;

    .poster {
        background-size: cover;
        max-width: 100%;
        height: 513px;

        .content {
            padding: 20px;
            color: white;
            background-color: black;
            height: 100%;

            h4,
            .flag,
            .stars {
                margin-bottom: 15px;
            }

            h3 {
                font-size: 22px;
                font-weight: 600;
                margin-bottom: 5px;
            }

            h4 {
                font-size: 15px;
                font-weight: 500;
            }

            .fa-star {
                color: gold;
            }

            p {
                max-height: 300px;
                font-size: 14px;
                overflow-y: auto;
                line-height: 150%;
            }

        }
    }

    .no-poster {
        color: white;
        text-align: center;
        padding: 250px 30px 0;
        font-size: 30px;
    }
}

</style>