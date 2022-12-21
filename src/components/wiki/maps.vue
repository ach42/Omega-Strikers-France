<template>
    <section>
        <div>
            <div id="inRotation">
                <img v-for="arenaRotationimg of arenasAPI.attributes['InRotationImg']" v-bind:src="arenaRotationimg">
            </div>
            <span v-for="InRotationName of arenasAPI.attributes['InRotationName']">{{ InRotationName}}</span>
        </div>
        <div>
            <div>
                <img v-for="arenas of arenasAPI.attributes['img']" v-bind:src="arenas">
            </div>
            <span v-for="name of arenasAPI.attributes['name']">{{ name }}</span>
        </div>
    </section>
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