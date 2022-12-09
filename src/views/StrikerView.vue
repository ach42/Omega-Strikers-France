<template>
    <div id="StrikerView">
        <section id="striker" v-for="striker of strikerAPI" v-if="striker.attributes['name'] == nameOfStriker">
            <section id="striker__left">
                <div id="striker__left__img">
                    <img v-bind:src="striker.attributes['img_url']">
                </div>
                <div id="striker__left__content">
                    <div id="striker__left__content__title">
                        <h1>{{ striker.attributes['displayname'] }}</h1>
                        <p>{{ striker.attributes['subtitle'] }}</p>
                        <span>{{ $t('Strikers.difficulty') }}: {{ striker.attributes['difficulty'] }}</span>
                    </div>
                </div>
            </section>
            <section id="striker__right">
                <div id="striker__right__powers">
                    <div id="striker__right__powers__primary" class="powers">
                        <div class="powers__gif">
                            <img v-bind:src="striker.attributes['primary_gif']">
                        </div>
                        <div class="powers__desc">
                            <div class="powers__desc__img">
                                <img class="powers__desc__img__bg" v-bind:src="striker.attributes['power_bg']">
                                <img class="powers__desc__img__top" v-bind:src="striker.attributes['primary_img']">
                            </div>
                            <div class="powers__desc__content">
                                <h1>{{striker.attributes['primary_name']}}</h1>
                                <p>{{striker.attributes['primary_desc']}}</p>
                            </div>
                            <div class="powers__desc__stats">
                                <span>{{$t('Strikers.powertime')}}: {{striker.attributes['primary_time']}} {{$t('Strikers.secondes')}}</span>
                            </div>
                        </div>
                    </div>
                    <div id="striker__right__powers__secondary" class="powers">
                        <div class="powers__gif">
                            <img v-bind:src="striker.attributes['secondary_gif']">
                        </div>
                        <div class="powers__desc">
                            <div class="powers__desc__img">
                                <img class="powers__desc__img__bg" v-bind:src="striker.attributes['power_bg']">
                                <img class="powers__desc__img__top" v-bind:src="striker.attributes['secondary_img']">
                            </div>
                            <div class="powers__desc__content">
                                <h1>{{striker.attributes['secondary_name']}}</h1>
                                <p>{{striker.attributes['secondary_desc']}}</p>
                            </div>
                            <div class="powers__desc__stats">
                                <span>{{$t('Strikers.powertime')}}: {{striker.attributes['secondary_time']}} {{$t('Strikers.secondes')}}</span>
                            </div>
                        </div>
                    </div>
                    <div id="striker__right__powers__special" class="powers">
                        <div class="powers__gif">
                            <img v-bind:src="striker.attributes['special_gif']">
                        </div>
                        <div class="powers__desc">
                            <div class="powers__desc__img">
                                <img class="powers__desc__img__bg" v-bind:src="striker.attributes['power_bg']">
                                <img class="powers__desc__img__top" v-bind:src="striker.attributes['special_img']">
                            </div>
                            <div class="powers__desc__content">
                                <h1>{{striker.attributes['special_name']}}</h1>
                                <p>{{striker.attributes['special_desc']}}</p>
                            </div>
                            <div class="powers__desc__stats">
                                <span>{{$t('Strikers.powertime')}}: {{striker.attributes['special_time']}} {{$t('Strikers.secondes')}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="striker__right__bio">
                    <h1>{{ $t('Strikers.lore') }}</h1>
                    <p>{{ striker.attributes['bio1'] }}</p>
                    <p>{{ striker.attributes['bio2'] }}</p>
                    <p>{{ striker.attributes['bio3'] }}</p>
                    <p>{{ striker.attributes['bio4'] }}</p>
                </div>
                <div id="striker__right__skins">
                    <h1>{{ $t('Strikers.skins') }}</h1>
                    <div class="skins">
                        <div class="skins__img">
                            <img v-for="skinsurl of striker.attributes['skins_url']" v-bind:src="skinsurl">
                        </div>
                        <div class="skins__name">
                            <span v-for="skinname of striker.attributes['skins_name']">{{ skinname }}</span>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>
    
<style lang="scss">
#striker {
    display: flex;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    box-shadow: inset 0px 0px 270px 0px rgba(16, 29, 66, 0.5);

    &__left {
        display: flex;
        flex-direction: column;
        width: 25%;
        background-color: #101d42cb;

        &__img {
            display: flex;
            width: 100%;
            height: 50%;

            & img {
                width: 80%;
                margin: auto;
                height: 100%;
                object-fit: cover;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            padding: 3%;
            height: 50%;

            &__title {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                & h1 {
                    font-size: 40px;
                    text-transform: uppercase;
                    font-style: italic;
                }

                & p {
                    color: #fff;
                    font-weight: 600;
                }

                & span {
                    color: #fff;
                }
            }
        }

        &__stats {
            display: flex;
            justify-content: center;
            width: 100%;
            background-color: #101d42;

            & img {
                width: 100%;
                opacity: 0.3;
            }
        }
    }

    &__right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        overflow-y: scroll;
        row-gap: 5%;
        width: 75%;
        height: 100vh;
        padding-left: 1.5%;
        padding-right: 1.5%;
        background-color: #101d42;

        &__powers {
            display: flex;
            margin-top: 2%;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: max-content;
            transition: 1s;
            &__primary {
                align-items: flex-start;
            }
            &__secondary {
                align-items: center;
                & .powers__gif {
                    justify-content: center;
                }
            }
            &__special {
                align-items: flex-end;
                & .powers__gif {
                    justify-content: flex-end;
                }
            }
        }

        &__bio {
            display: flex;
            flex-direction: column;
            margin-top: 1%;
            height: max-content;

            & p {
                color: #fff;
                padding: 1%;
                background-color: #172A5F;
                border-radius: 10px;
                margin-bottom: 1%;
                font-size: 14px;
            }

            & h1 {
                font-style: italic;
                margin-bottom: 1%;
                text-transform: uppercase;
                width: fit-content;
            }
        }

        &__skins {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: max-content;
            & h1 {
                text-transform: uppercase;
                font-style: italic;
            }
        }
    }
}

.powers {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33%;

    &__gif {
        display: flex;
        width: 100%;

        & img {
            object-fit: cover;
            width: 90%;
            border-top: 3px solid #1d367c;
            border-left: 3px solid #1d367c;
            border-right: 3px solid #1d367c;
            box-shadow: 0px 0px 60px 0px rgba(30, 61, 146, 0.644);
            border-radius: 10px 10px 0px 0px;
        }
    }

    &__desc {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 90%;
        border-bottom: 3px solid #1d367c;
        border-left: 3px solid #1d367c;
        border-right: 3px solid #1d367c;
        box-shadow: 0px 0px 60px 0px rgba(30, 61, 146, 0.644);
        height: 100%;
        background-color: #172A5F;
        border-radius: 0px 0px 10px 10px;

        &__img {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            margin-top: -30px;

            &__bg {
                width: 65px;
                z-index: 1;
            }

            &__top {
                width: 40px;
                margin-top: -50px;
                z-index: 2;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 15px;
            margin: 2%;

            & h1 {
                color: #f5f5f5;
                letter-spacing: 1px;
                text-transform: uppercase;
                font-style: italic;
            }

            & p {
                color: #f5f5f5;
                font-size: 14px;
            }
        }

        &__stats {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
        }
    }
}

.skins {
    display: flex;
    flex-direction: column;
    padding-top: 2%;
    width: 95%;
    &__img {
        display: flex;
        column-gap: 10px;
        width: 100%;
        & img {
            border-radius: 10px 10px 0px 0px;
            width: 256px;
            border-top: 3px solid #1d367c;
            border-left: 3px solid #1d367c;
            border-right: 3px solid #1d367c;
        }
    }

    &__name {
        display: flex;
        column-gap: 10px;
        margin-bottom: 10%;
        & span {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #f5f5f5;
            width: 256px;
            height: 50px;
            background-color: #172A5F;
            border-bottom: 3px solid #1d367c;
            border-left: 3px solid #1d367c;
            border-right: 3px solid #1d367c;
            border-radius: 0px 0px 10px 10px;
        }
    }
}
@media screen and (max-width: 768px) {
    #striker__left {
        width: 30%;
    }
    #striker__left__img img {
        width: 100%;
    }
    #striker__left__content__title h1 {
        font-size: 25px;
    }
    #striker__left__content__title p {
        text-align: center;
    }
    #striker__right {
        justify-content: flex-start;
        overflow-y: scroll;
        row-gap: 0%;
        padding-top: 2%;
        padding-left: 3%;
        padding-right: 3%;
        width: 64%;
    }
    #striker__right h1 {
        font-size: 28px;
    }
    #striker__right__powers {
        flex-direction: column;
        height: max-content;
        row-gap: 2%;
        padding-top: 0%;
        margin-bottom: 5%;
    }
    #striker__right__powers__primary {
        align-items: center;
    }
    #striker__right__powers__special {
        align-items: center;
    }
    #striker__right__powers__special .powers__gif {
        justify-content: center;
    }
    #striker__right__bio p {
        padding: 2%;
        font-size: 18px;
    }
    .powers {
        width: 100%;
    }
    .powers__gif {
        justify-content: center;
        border-top: 3px solid #1d367c;
        border-left: 3px solid #1d367c;
        border-right: 3px solid #1d367c;
        border-radius: 10px 10px 0px 0px;
    }
    .powers__gif img {
        width: 100%;
        border-top: 0px solid #1d367c;
        border-left: 0px solid #1d367c;
        border-right: 0px solid #1d367c;
    }
    .powers__desc {
        row-gap: 20px;
        width: 100%;
    }
    .powers__desc__img {
        margin-top: -50px;
    }
    .powers__desc__img__bg {
        width: 90px;
    }
    .powers__desc__img__top {
        width: 60px;
        margin-top: -75px;
    }
    .powers__desc__content p {
        font-size: 18px;
    }
    #striker__right__bio {
        margin-top: 15%;
    }
    #striker__right__skins {
        margin-top: 0%;
        margin-bottom: 5%;
    }
    .skins {
        flex-direction: row;
        overflow-x: scroll; 
        justify-content: flex-start;
        width: 100%;
    }
    .skins__img {
        flex-direction: column;
        row-gap: 10px;
        width: 40%;
        align-items: flex-start;
    }
    .skins__name {
        flex-direction: column;
        margin-left: 0%;
        width: 50%;
        row-gap: 10px;
    }
    .skins__name span {
        height: 180px;
        width: 100%;
        border-top: 2px solid #1d367c;
        border-right: 2px solid #1d367c;
        border-left: 0px solid;
        border-bottom: 2px solid #1d367c;
        border-radius: 0px 10px 10px 0px;
    }
    .skins__img img {
        width: 100%;
        height: 180px;
        border-radius: 10px 0px 0px 10px;
        border-top: 2px solid #1d367c;
        border-left: 2px solid #1d367c;
        border-right: 0px solid;
        border-bottom: 2px solid #1d367c;
    }
}
@media screen and (max-width: 425px) {
    #striker {
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        width: 100%;
    }
    #striker__right__powers {
        margin-bottom: 10%;
    }
    #striker__left {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 45%;
    }
    #striker__left__img {
        height: 100%;
    }
    #striker__left img {
        height: 100%;
        width: 75%;
    }
    #striker__right {
        width: 94%;
        height: max-content;
        overflow-y: unset;
    }
    #striker__right__skins {
        margin-top: 5%;
    }
    .skins__img img {
        width: 160px;
        height: 160px;
    }
    .skins__name span {
        height: 160px;
    }
}
@media screen and (max-width: 375px) {
    #striker__right__bio p {
        margin-bottom: 3%;
        padding: 5%;
    }
    #striker__right__bio {
        margin-top: 20%;
    } 
    #striker__right__bio h1 {
        margin-bottom: 5%;
    }
}
</style>
    
<script>
import axios from 'axios';

export default {
    data() {
        return {
            strikerAPI: []
        }
    },
    // language api calls
    created() {
        let url = window.location.pathname
        let getStriker = url.substring(url.lastIndexOf("/") + 1)
        document.title = getStriker + " - " + this.$i18n.t('App.Nav.strikers') + " - " + this.$i18n.t('App.Title');
        this.nameOfStriker = getStriker;

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
        axios.get(`https://strapi-omega.onrender.com/api/strikers?locale=` + lang)
            .then(response => { this.strikerAPI = response.data.data })
    }
}
</script>