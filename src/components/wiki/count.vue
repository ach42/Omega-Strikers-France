<template>
    <div id="incoming">
        <div id="incoming__count">
            <p>{{ $t('Patchs.comeback') }}</p>
            <ul>
                <li>{{ days }} {{ $t('Patchs.day') }}</li>
                <li>{{ hours }} {{ $t('Patchs.hours') }}</li>
                <li>{{ minutes }} {{ $t('Patchs.minutes') }}</li>
                <li>{{ seconds }} {{ $t('Patchs.seconds') }}</li>
            </ul>
        </div>
        <div id="incoming__content" v-html="content">

        </div>
    </div>
</template>

<style lang="scss">

#incoming {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-image: url("@/assets/incomingbg.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    & img {
        width: 400px;
    }
}
</style>


<script>
import axios from 'axios';
import marked from 'marked';

export default {
    data() {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            content: null,
        }
    },
    mounted() {
        const deadline = new Date('April 1, 2023');
        setInterval(() => {
            const currentDate = new Date();
            const timeLeft = deadline.getTime() - currentDate.getTime();
            if (timeLeft <= 0) {
                clearInterval();
                return;
            }
            this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        }, 10);
    },
    beforeMount() {
        let url = window.location.pathname
        let urlID = url.split('/');
        let id = urlID[urlID.length - 2]
        console.log(id)
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
        let PatchResponse = axios.get(`https://database.omegastrikers-france.fr/api/steam-news?filters[maj][$eq]=${id}`, {
            params: {
                locale: lang,
            }
        }).then(res => {
            for (let Patch of res.data.data) {
                this.content = marked(Patch.attributes["content"]); console.log(Patch)
            }
        })
    }
}
</script>