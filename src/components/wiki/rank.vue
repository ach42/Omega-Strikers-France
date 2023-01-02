<template>
    <div id="ranks">
        <div v-html="ranksAPI" id="ranks__layout">

        </div>
    </div>
</template>

<style lang="scss">
@keyframes light {
  0% {
    opacity: 0;
    box-shadow: 0px 0px 60px 0px rgba(83, 105, 168, 0);
  }
  50% {
    opacity: 1;
  }
  100% {
    box-shadow: 0px 0px 5px 0px rgb(36, 83, 214);
  }
}
@keyframes height {
  0% {
    height: 0px;
  }
  100% {
    height: 70px;
  }
}

#ranks {
    display: flex;
    width: 100%;
    height: 100%;
    row-gap: 15%;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    flex-direction: column;
    &__layout {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: max-content;
    }
    & #firstrank {
        display: flex;
        justify-content: space-between;
        width: 95%;
    }
    & #omega {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        padding-left: 25px;
        padding-right: 25px;
        border: 2px solid #1f4ac2;
        animation: light 1s ease-in-out;
        animation-fill-mode: forwards;
        background-color: #1D367C;
        border-radius: 10px;
        & p {
            width: 100%;
            height: 100%;
        }
        & img {
            object-fit: contain;
            width: 80%;
        }
        & h1 {
            text-transform: uppercase;
        }
    }
    &__desc {
        display: flex;
        width: 100%;
        margin: 5%;
        height: fit-content;
        &__title {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            text-transform: uppercase;
            width: 40%;
            padding-top: 1%;
            padding-left: 3%;
            padding-right: 3%;
        }
        &__content {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            background-color: #1D367C;
            color: #f5f5f5;
            margin-right: 3%;
            transform: skew(-5deg);
            padding: 1%;
            width: 60%;
            & p {
                transform: skew(5deg);
            }
        }
    }
}

.rank {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 12.5%;
    height: 300px;
    align-items: center;
    & p {
        display: flex;
        width: 100%;
        height: 100%;
    }
    & img {
        object-fit: contain;
        width: 100%;
    }
    & h1 {
        font-size: 20px;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
}

.lineH {
    width: 95%;
    height: 8px;
    border-radius: 5px;
    background-color: #1f4ac2;
    animation: light 1s ease-in-out;
    animation-fill-mode: forwards;
}
.lineV {
    width: 8px;
    border-radius: 5px 5px 0px 0px;
    background-color: #1f4ac2;
    animation: height 0.5s ease-in-out;
    animation-fill-mode: forwards;
}
.lineVomega {
    width: 8px;
    background-color: #1f4ac2;
    animation: height 1s ease-in-out;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
}
</style>

<script>
import axios from 'axios';
import marked from 'marked';

export default {
    data() {
        return {
            ranksAPI: null
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
        let RankResponse = axios.get(`https://database.omegastrikers-france.fr/api/rank`, {
            params: {
                locale: lang
            }
        }).then(res => {
            let ranks = res.data.data;
            this.ranksAPI = marked(ranks.attributes["ranks"]);
        })
    },
    metaInfo() {
        return {
            title: this.$i18n.t('Wiki.rank') + " - " + this.$i18n.t('App.Title'),
            meta: [
                { vmid: 'description', name: 'description', content: this.$i18n.t('Wiki.ranktitle') + this.$i18n.t('Wiki.RankMeta') + this.$i18n.t('App.Title') }
            ]
        }
    }
}
</script>