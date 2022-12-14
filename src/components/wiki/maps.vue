<template>
    <div>
        <div id="rank__img">
            <img v-for="arenaRotationimg of arenasAPI.attributes['InRotationImg']" v-bind:src="arenaRotationimg">
        </div>
        <div id="rank__name">
            <span v-for="arenaNameRotation of arenasAPI.attributes['InRotationName']">{{ arenaNameRotation }}</span>
        </div>
    </div>
</template>

<style lang="scss">

</style>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            arenasAPI: []
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
        axios.get(`https://database.omegastrikers-france.fr/api/arena?locale=` + lang)
        .then(response => { this.arenasAPI = response.data.data })
    }
}
</script>