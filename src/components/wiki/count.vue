<template>
    <div id="incoming">
        <div id="incoming__filter">
            <div id="incoming__strikers">
                <img src="https://database.omegastrikers-france.fr/uploads/Juliette_cropped_70ddd5e28b_3076c2ca0d.png">
                <img id="incoming__strikers__kai"
                    src="https://database.omegastrikers-france.fr/uploads/Kai_6af25baeb9.png?updated_at=2022-11-27T14:12:33.911Z">
                <img src="https://database.omegastrikers-france.fr/uploads/X_cropped_c47af244d5_73f97ca002.png">
            </div>
            <div id="incoming__count">
                <h1>{{ $t('Patchs.comeback') }}</h1>
                <div>
                    <span>{{ days }} <p>{{ $t('Patchs.day') }}</p></span>
                    <span>{{ hours }} <p>{{ $t('Patchs.hours') }}</p></span>
                    <span>{{ minutes }} <p>{{ $t('Patchs.minutes') }}</p></span>
                    <span>{{ seconds }} <p>{{ $t('Patchs.seconds') }}</p></span>
                </div>
            </div>
            <div id="incoming__content" v-html="content">

            </div>
        </div>
    </div>
</template>

<style lang="scss">
#incoming {
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
    flex-direction: column;
    background-image: url("@/assets/incomingbg.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px 100px 130px 0px #2d2b52;

    &__filter {
        backdrop-filter: blur(5px);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    &__strikers {
        display: flex;
        align-items: flex-end;

        & img {
            width: 200px;
            height: 200px;
        }

        &__kai {
            width: 250px !important;
            height: 250px !important;
        }
    }

    &__count {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        backdrop-filter: blur(2px);
        align-items: center;
        width: 600px;
        height: 100%;
        padding: 5% 5% 5% 5%;
        border-radius: 20px;
        margin-bottom: 15%;
        background-color: #2d2b52ad;

        & h1 {
            text-transform: uppercase;
            font-size: 20px;
            margin-bottom: 20px;
        }

        & div {
            display: flex;
            justify-content: center;
            column-gap: 10px;
            color: #f5f5f5;
        }

        & span {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: 'made_outer';
            font-size: 30px;
            padding: 5%;
            background-color: #EB4F5D;
            border-radius: 10px;
        }
    }

    &__content {
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #1F2448;
        border-top: 5px solid #EB4F5D;

        & img {
            width: 60%;
            height: 100%;
            border-radius: 25px;
        }

        & h2 {
            display: flex;
            align-items: center;
            color: #f5f5f5;
            margin-left: -14.5px;
            column-gap: 10px;

            & span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                border-radius: 50px;
                background-color: #EB4F5D;
            }
        }
    }
}

#needToKnow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    background-color: #2d2b52;
    border-top: 5px solid #EB4F5D;
    color: #f5f5f5;
    margin-top: -10%;
    padding: 5%;

    & h1 {
        color: #EB4F5D;
        padding-bottom: 35px;
    }
}

#incoming__seven {
    display: flex;
    background-color: #2d2b52;
    padding-left: 2%;
    padding-right: 2%;
    margin-left: 5%;
    margin-right: 5%;
    flex-direction: column;

    & h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 25px;
        width: 60%;
        border-radius: 15px;
        margin-left: auto;
        margin-right: auto;
        padding: 1%;
        margin-bottom: 2%;
        background-color: #EB4F5D;
    }

    & p {
        margin-left: 10px;
        color: #f5f5f5;
        margin-bottom: 10px;
        padding-left: 35px;
        border-left: 3px solid #EB4F5D;
    }

    & iframe {
        margin-left: 10px;
        padding-left: 35px;
        padding-bottom: 10px;
        border-left: 3px solid #EB4F5D;
    }
}
@media screen and (max-width: 1470px) {
    #needToKnow {
        width: 90%;
        column-gap: 50px;
    }
    #needToKnow h1 {
        font-size: 25px;
    }
    #incoming__seven {
        margin-left: 0%;
        margin-right: 0%;
    }
    #incoming__content h2 {
        margin-left: 10px;
    }
    #incoming__seven p {
        margin-left: 33.5px;
    }
    #incoming__seven iframe {
        width: 700px;
        margin-left: 33.5px;
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