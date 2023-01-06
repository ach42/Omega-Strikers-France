<template>
    <div id="arenas">
        <h1 id="arenas__title">{{ $t('Wiki.inRotation') }}</h1>
        <div id="arenas__InRotation" v-html="InRotation">

        </div>
        <h1 id="arenas__title">{{ $t('Wiki.NotinRotation') }}</h1>
        <div id="arenas__NotInRotation" v-html="NotInRotation">

        </div>
    </div>
</template>

<style lang="scss">

  @keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  } 

#arenas {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    row-gap: 5%;
    height: 100%;
    padding: 1%;

    &__title {
        display: flex;
        align-items: center;
        animation: fadeInDown 0.5s;
        width: fit-content;
        height: 5%;
        text-transform: uppercase;
        border-bottom: 5px solid #1D367C;
        margin-left: 10px;
    }

    &__InRotation {
        display: flex;
        align-items: center;
        animation: fadeIn 1s;
        justify-content: space-between;
        width: 100%;
        height: 30%;
    }

    &__NotInRotation {
        display: flex;
        justify-content: center;
        width: 100%;
        column-gap: 3%;
    }
}

.arena {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    animation-fill-mode: both;
    align-items: center;
    box-shadow: 0px 0px 40px 0px rgba(30, 61, 146, 0.432);
    text-align: center;
    width: 9vw;
    height: 9vw;
    row-gap: 5px;
    padding: 30px;
    background-color: #172A5F;
    border: 5px solid #1D367C;
    border-radius: 50px;

    & h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 14px;
    }

    & img {
        object-fit: contain;
        width: 80%;
    }

    & p {
        color: #E7137B;
        font-family: 'made_outer';
        font-weight: 600;
        font-size: 20px;
    }

    &__NotInRotation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        animation: fadeIn 1s;
        animation-fill-mode: both;
        align-items: center;
        box-shadow: 0px 0px 40px 0px rgba(30, 61, 146, 0.432);
        text-align: center;
        padding: 30px;
        background-color: #172A5F;
        border: 5px solid #1D367C;
        border-radius: 50px;

        & h1 {
            text-align: center;
            text-transform: uppercase;
            font-size: 18px;
        }

        & img {
            object-fit: contain;
            width: 80%;
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
            InRotation: null,
            NotInRotation: null
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
        let ArenasResponse = axios.get(`https://database.omegastrikers-france.fr/api/arena`, {
            params: {
                locale: lang
            }
        }).then(res => {
            let arenas = res.data.data;
            this.InRotation = marked(arenas.attributes["InRotation"]);
            this.NotInRotation = marked(arenas.attributes["NotInRotation"]);
        })
    },
    metaInfo() {
        return {
            title: this.$i18n.t('Wiki.arenas') + " - " + this.$i18n.t('App.Title'),
            meta: [
                { vmid: 'description', name: 'description', content: this.$i18n.t('Wiki.ArenasMeta') + this.$i18n.t('App.Title') }
            ]
        }
    }
}
</script>