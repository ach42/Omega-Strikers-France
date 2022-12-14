<template>
    <div id="rank">
        <div id="rank__assets">
            <div id="rank__assets__img">
                <img v-for="rankimg of rankAPI.attributes['img']" v-bind:src="rankimg">
            </div>
            <div id="rank__assets__name">
                <span v-for="rankname of rankAPI.attributes['name']">{{ rankname }}</span>
            </div>
        </div>
        <div id="rank__content">
            <h1>{{ $t('Wiki.ranktitle') }}</h1>
            <p>{{ rankAPI.attributes['desc'] }}</p>
        </div>
    </div>
</template>

<style lang="scss">
#rank {
    display: flex;
    justify-content: center;
    row-gap: 10%;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    &__assets {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        align-items: center;
        &__img {
            display: flex;
            justify-content: center;
            width: 95%;
            & img {
                width: 180px;
                height: 180px;
            }
        }
        &__name {
            display: flex;
            width: 95%;
            justify-content: center;
            & span {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #f5f5f5;
                font-size: 22px;
                font-family: 'made_outer';
                text-transform: uppercase;
                width: 200px;
            }
        }
    }
    &__content {
        display: flex;
        width: 95%;
        & h1 {
            display: flex;
            text-transform: uppercase;
            font-size: 25px;
            width: 40%;
        }
        & p {
            display: flex;
            width: 60%;
            padding: 1%;
            transform: skew(-5deg);
            color: #f5f5f5;
            background-color: #172a5f;
        }
    }
}
</style>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            rankAPI: []
        }
    },
    created() {
        const i18nlang = this.$i18n.locale
        let lang;
        languagesClient()
        function languagesClient() {
            if (
                (i18nlang === 'fr')
                || (i18nlang === 'en')
                || (i18nlang === 'es')

            ) {
                lang = i18nlang
            } else {
                lang = 'en'
            }
            return lang;
        }
        console.log(lang)
        // Fetching strikers-all
        axios.get(`https://database.omegastrikers-france.fr/api/rank?locale=` + lang)
            .then(response => { this.rankAPI = response.data.data })
    }
}
</script>