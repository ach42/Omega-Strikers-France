<template>
    <section id="patch">
        <div id="patch__list">
            <a href="#" v-for="patch of patchs" @click="displayContent(patch.id)">
                {{ patch.title }}
            </a>
        </div>
        <div id="patch__main">
            <div id="patch__main__fanart">
                <a v-bind:href="fanarts.attributes['fanartCreditsUrl']">
                    <img rel="preload" v-bind:src="fanarts.attributes['fanartUrl']">
                    <span>{{ fanarts.attributes['fanartCredits'] }}</span>
                </a>
            </div>
            <div id="patch__main__title">
                <h1>{{ fanarts.attributes['title'] }}</h1>
            </div>
            <div id="patch__main__content" v-html="content">

            </div>
        </div>
    </section>
</template>

<style lang="scss">
#patch {
    display: flex;
    width: 100%;
    height: 100%;

    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
        row-gap: 1%;
        background-color: #172A5F;
        height: 100%;

        & a {
            display: flex;
            justify-content: center;
            padding: 2%;
            background-color: #101D42;
            border-radius: 10px;
            width: 90%;
            align-items: center;
            justify-content: center;

            &:hover {
                background-color: #1D367C;
            }
        }
    }

    &__main {
        display: flex;
        flex-direction: column;
        row-gap: 2%;
        overflow-y: auto;
        overflow-x: hidden;
        width: 80%;
        height: 100%;

        &__fanart {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 50%;
            
            & a {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }

            & img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }

            & span {
                display: flex;
                width: 99.5%;
                height: fit-content;
                color: rgba(255, 255, 255, 0.568627451);
                font-size: 12px;
                padding-top: 5px;
                justify-content: right;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &__title {
            display: flex;
            justify-content: center;
            padding: 2%;
            width: 100%;
            height: 10%;

            & h1 {
                text-transform: uppercase;
                font-size: 25px;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            padding: 1% 3% 1% 3%;
            width: 90%;
            height: fit-content;
            

            & h1 {
                width: 100%;
                padding: 2%;
                text-align: center;
                transform: skew(-5deg);
                background-color: #172A5F;
                margin-top: 25px;
                margin-bottom: 20px;
            }

            & h2 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #f5f5f5;
                font-size: 25px;
                font-style: italic;
                width: 30%;
                padding-left: 20px;
                box-shadow: 0px 0px 60px 0px rgb(30 61 146 / 64%);
                border-radius: 10px;
                background-color: #172A5F;
                border: 3px solid #1d367c;
                margin-bottom: 10px;
                margin-top: 2%;
                margin-left: 2%;

                & img {
                    width: 150px;
                    background-color: #101D42;
                    border-radius: 0px 6px 6px 0px;
                }
            }

            & p {
                color: #f5f5f5;
                font-size: 14px;
            }

            & li {
                color: #f5f5f5;
            }

            & ul li {
                margin-bottom: 2%;
            }

            & ul {
                margin: 1% 1% 0% 5%;
            }

            & blockquote {
                border-left: 1px solid #f5f5f5;
                margin-left: 8%;
                margin-bottom: 1%;

                & li {
                    background-color: #172A5F;
                    margin-bottom: 1%;
                    list-style-type: circle;
                    width: fit-content;
                    padding: 1%;
                    border-radius: 5px;
                }
            }
        }
    }
}

#summary-block {
    display: flex;
    align-items: center;
    width: 104.5%;
    justify-content: center;
    border-radius: 10px;
    background-color: #172A5F;

    & h2 {
        display: flex;
        justify-content: center;
        width: 20%;
        padding-left: 0%;
    }

    & blockquote {
        width: 40%;
        margin-top: 1%;
        padding-left: 3%;

        & li:hover {
            text-decoration: underline;
        }
    }
}
</style>

<script>
import axios from 'axios';
import marked from 'marked';

export default {
    data() {
        return {
            patchs: [
                { title: this.$i18n.t('Patchs.3'), id: '3' },
                { title: this.$i18n.t('Patchs.2'), id: '2' },
                { title: this.$i18n.t('Patchs.1'), id: '1' }
            ],
            fanarts: [],
            content: null,
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
        let LastPatchResponse = axios.get(`https://database.omegastrikers-france.fr/api/steam-news?filters[maj][$eq]=3`, {
            params: {
                locale: lang,
            }
        }).then(res => {
            for (let lastPatch of res.data.data) {
                this.content = marked(lastPatch.attributes["content"]); this.fanarts = lastPatch; console.log(lastPatch)
            }
        })
    },
    methods: {
        displayContent(id) {
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
                for (let patch of res.data.data) {
                    this.content = marked(patch.attributes["content"]); this.fanarts = patch; console.log(patch)
                }
            })
        }
    }
}

function addAnchorEventListeners() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

addAnchorEventListeners();

document.addEventListener('DOMNodeInserted', addAnchorEventListeners);
</script>