<template>
    <div id="strikerView">
        <section id="striker" v-for="striker of strikerAPI" v-if="striker.attributes['name'] == nameOfStriker">
            <section id="striker__left">
                <div id="striker__left__nav">
                    <localized-link id="striker__left__nav__strikers" to="/strikers"><img
                            src="@/assets/striker_icon.png">{{ $t('App.Nav.strikers') }}</localized-link>
                    <div id="striker__left__nav__bn">
                        <localized-link id="striker__left__nav__previous"
                            v-bind:to="striker.attributes['previousStriker']">{{ $t('App.Nav.previousStriker') }}<img
                                src="@/assets/previous.png"></localized-link>
                        <localized-link id="striker__left__nav__next" v-bind:to="striker.attributes['nextStriker']"><img
                                src="@/assets/next.png">{{ $t('App.Nav.nextStriker') }}</localized-link>
                    </div>
                </div>
                <div id="striker__left__img">
                    <img v-bind:alt="striker.attributes['name'] + ' Omega Strikers'" v-bind:src="$strapi + full">
                </div>
                <div id="striker__left__content">
                    <div id="striker__left__content__title">
                        <h1>{{ striker.attributes['name'] }}</h1>
                        <p>{{ striker.attributes['subtitle'] }}</p>
                        <span>{{ $t('Strikers.difficulty') }}: {{ striker.attributes['difficulty'] }}</span>
                    </div>
                </div>
            </section>
            <preloader />
            <section id="striker__right">
                <div id="striker__right__powers">
                    <div v-for="Primary of primary" id="striker__right__powers__primary"
                        v-bind:style="'border: 5px solid ' + color" class="powers">
                        <div class="powers__gif">
                            <img v-bind:alt="striker.attributes['name'] + ' Primary Omega Strikers'" rel="preload" v-bind:src="$strapi + Primary.gif">
                        </div>
                        <div class="powers__desc">
                            <div class="powers__desc__img">
                                <img v-for="background of powerBG" class="powers__desc__img__bg"
                                    v-bind:src="$strapi + background.attributes.url">
                                <img class="powers__desc__img__top" v-bind:src="$strapi + Primary.icon">
                            </div>
                            <div class="powers__desc__content">
                                <h1>{{ Primary.name }}</h1>
                                <p>{{ Primary.description }}</p>
                            </div>
                            <div class="powers__desc__stats">
                                <span>{{ $t('Strikers.powertime') }}: {{ Primary.reload }}
                                    {{ $t('Strikers.secondes') }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-for="Secondary of secondary" id="striker__right__powers__secondary"
                        v-bind:style="'border: 5px solid ' + color" class="powers">
                        <div class="powers__gif">
                            <img v-bind:alt="striker.attributes['name'] + ' Secondary Omega Strikers'" rel="preload"
                                v-bind:src="$strapi + Secondary.gif">
                        </div>
                        <div class="powers__desc">
                            <div class="powers__desc__img">
                                <img v-for="background of powerBG" class="powers__desc__img__bg"
                                    v-bind:src="$strapi + background.attributes.url">
                                <img class="powers__desc__img__top" v-bind:src="$strapi + Secondary.icon">
                            </div>
                            <div class="powers__desc__content">
                                <h1>{{ Secondary.name }}</h1>
                                <p>{{ Secondary.description }}</p>
                            </div>
                            <div class="powers__desc__stats">
                                <span>{{ $t('Strikers.powertime') }}: {{ Secondary.reload }}
                                    {{ $t('Strikers.secondes') }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-for="Special of special" id="striker__right__powers__special"
                        v-bind:style="'border: 5px solid ' + color" class="powers">
                        <div class="powers__gif">
                            <img v-bind:alt="striker.attributes['name'] + ' Special Omega Strikers'" rel="preload"
                                id="striker__right__powers__primary" v-bind:src="$strapi + Special.gif">
                        </div>
                        <div class="powers__desc">
                            <div class="powers__desc__img">
                                <img v-for="background of powerBG" class="powers__desc__img__bg"
                                    v-bind:src="$strapi + background.attributes.url">
                                <img class="powers__desc__img__top" v-bind:src="$strapi + Special.icon">
                            </div>
                            <div class="powers__desc__content">
                                <h1>{{ Special.name }}</h1>
                                <p>{{ Special.description }}</p>
                            </div>
                            <div class="powers__desc__stats">
                                <span>{{ $t('Strikers.powertime') }}: {{ Special.reload }}
                                    {{ $t('Strikers.secondes') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="credit">
                    <span>
                        {{ $t('Credit.thanks') }}
                        <a class="credit__link" href="https://www.youtube.com/@coreAssist">@coreAssist</a>
                        {{ $t('Credit.coreassist') }}
                    </span>
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
                    <div id="striker__right__skins__block">
                        <div v-bind:style="'border: 2px solid ' + color" class="skins" v-for="skin of skins">
                            <img v-bind:alt="skin.name +' Omega Strikers'" rel="preload" v-bind:src="$strapi + skin.url">
                            <p>{{ skin.name }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>
    
<style lang="scss">
#strikerView .preloader {
    height: 100%;
    width: 76%;
    right: 0;
}

#striker {
    display: flex;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 270px 0px rgba(16, 29, 66, 0.5);
    backdrop-filter: blur(5px);

    &__left {
        display: flex;
        flex-direction: column;
        width: 25%;
        padding-top: 15px;
        background-color: #101d42cb;

        &__nav {
            display: flex;
            align-items: center;
            row-gap: 20px;
            flex-direction: column;
            justify-content: center;

            &__bn {
                display: flex;
                width: 100%;
                justify-content: center;
                column-gap: 5%;
            }

            & a {
                display: flex;
                align-items: center;
                border-radius: 5px;
                padding: 4px 6px 4px 6px;

                &:hover {
                    transition: 0.3s;
                    box-shadow: inset -10px 10px 92px 0px rgba(0, 0, 0, 0.15);
                }
            }

            & img {
                width: 30px;
            }

            &__strikers {
                background-color: #E82335;
                width: fit-content;
                justify-content: space-around;
            }

            &__previous {
                background-color: #101E44;
                width: fit-content;
                text-transform: uppercase;
                font-size: 14px;
                column-gap: 10px;
                justify-content: space-between;
            }

            &__next {
                background-color: #101E44;
                width: fit-content;
                font-size: 14px;
                text-transform: uppercase;
                column-gap: 10px;
                justify-content: space-between;
            }
        }

        &__img {
            display: flex;
            width: 100%;
            height: 70%;

            & img {
                width: 85%;
                margin: auto;
                height: 100%;
                object-fit: cover;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            padding: 3%;
            height: 30%;

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
        width: 75%;
        height: 100vh;
        padding-top: 15px;
        padding-left: 1.5%;
        padding-right: 1.5%;
        background-color: #101d42;

        &__powers {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            column-gap: 50px;
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
            height: 100%;
            margin-top: 2%;
            margin-bottom: 5%;
            &__block {
                display: flex;
                column-gap: 1%;
                row-gap: 1%;
                flex-wrap: wrap;
                width: 100%;
            }
            & h1 {
                text-transform: uppercase;
                font-style: italic;
                margin-bottom: 1%;
            }
        }
    }
}

.powers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 33%;
    border-radius: 15px;

    &__gif {
        display: flex;
        width: 100%;

        & img {
            object-fit: cover;
            width: 100%;
            box-shadow: 0px 0px 60px 0px rgba(30, 61, 146, 0.644);
            border-radius: 10px 10px 0px 0px;
        }
    }

    &__desc {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        row-gap: 20px;
        padding-bottom: 20px;
        box-shadow: 0px 0px 60px 0px rgba(30, 61, 146, 0.644);
        height: 100%;
        text-align: center;
        background-color: #172A5F;
        border-radius: 0px 0px 10px 10px;

        &__img {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            margin-top: -30px;
            width: 100%;

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
                margin-bottom: 5px;
            }

            & p {
                color: #f5f5f5;
                font-size: 13px;
            }
        }

        &__stats {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-size: 12px;
            color: #fff;
        }
    }
}

.skins {
    flex-direction: column;
    align-items: center;
    display: flex;
    flex: 0 0 23%;
    background-color: #172A5F;
    border-radius: 10px;
    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.30);
    }
    & p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #101D42;
        color: #f5f5f5;
        font-weight: 600;
        border-radius: 0px 0px 10px 10px;
    }
}

@media screen and (max-width: 1240px) {
    .powers__desc__stats {
        font-size: 12px;
        text-align: center;
    }

    #striker__left__nav__previous {
        font-size: 12px;
    }

    #striker__left__nav__next {
        font-size: 12px;
    }
}

@media screen and (max-width: 1024px) {
    #strikerView .preloader {
        height: 100%;
        width: 63%;
        right: 0;
    }

    #striker__left {
        width: 40%;
    }

    #striker__left__nav__strikers {
        width: 55%;
    }

    #striker__left__nav a {
        font-size: 15px;
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

    #striker__right__bio {
        row-gap: 10px;
    }

    #striker__right__bio p {
        padding: 2%;
        font-size: 18px;
    }

    .powers {
        width: 85%;
    }

    .powers__gif {
        justify-content: center;
        border-radius: 10px 10px 0px 0px;
    }

    .powers__gif img {
        width: 100%;
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
        margin-top: 5%;
    }

    #striker__right__skins {
        margin-top: 0%;
        margin-bottom: 5%;
    }
    .skins {
        flex: 0 0 48%;
    }
    .credit {
        margin-top: 60px;
        margin-right: 65px;
    }
}

@media screen and (max-width: 750px) {
    #strikerView .preloader {
        width: 100%;
    }

    #striker {
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        width: 100%;
    }

    #striker__right__bio p {
        margin-bottom: 3%;
        padding: 3%;
    }

    #striker__right__powers {
        margin-top: 5%;
        margin-bottom: 5%;
    }

    #striker__left {
        justify-content: center;
        align-items: center;
        width: 100%;
        height: max-content;
    }

    #striker__left__img {
        height: 100%;
        width: 100%;
    }

    #striker__left__img img {
        width: 55%;
    }

    #striker__left__content {
        width: 50%;
        padding: 0%;
    }

    #striker__left__nav__strikers {
        height: 100%;
        width: 65%;
    }

    #striker__right {
        width: 94%;
        height: max-content;
        overflow-y: unset;
    }

    #striker__right__skins {
        margin-top: 5%;
    }
    .powers {
        width: 95%;
    }
    .skins {
        flex: 0 0 48.5%;
    }
}

@media screen and (max-width: 460px) {
    #striker__right__bio {
        margin-top: 20%;
    }
    .skins {
        flex: 0 0 47.5%;
    }
    #striker__right__bio h1 {
        margin-bottom: 5%;
    }

    #striker__left__nav__strikers {
        width: 80%;
    }

    #striker__left__img img {
        width: 70%;
    }
}
</style>
    
<script>
import axios from 'axios';
import preloader from '@/components/preloader.vue';

export default {
    components: {
        preloader
    },
    data() {
        return {
            strikerAPI: [],
            powerBG: '',
            color: '',
            full: '',
            primary: [],
            secondary: [],
            special: [],
            skins: []
        }
    },
    created() {
        let url = window.location.pathname
        let getStriker = url.substring(url.lastIndexOf("/") + 1)
        this.nameOfStriker = getStriker;
        const i18nlang = this.$i18n.locale
        let lang;
        if (
            (i18nlang === 'fr')
            || (i18nlang === 'en')
            || (i18nlang === 'es')

        ) {
            lang = i18nlang
        } else {
            lang = 'en'
        }
        axios.get(`https://database.omegastrikers-france.fr/api/strikers?populate=deep&[filters][name][$eq]=${getStriker}&locale=${lang}`)
            .then(res => {
                this.strikerAPI = res.data.data
                for (let components of res.data.data) {
                    this.full = components.attributes.img.data.attributes.url;
                    this.color = components.attributes.color;
                    this.powerBG = components.attributes.power_bg.data;
                    this.primary = [{
                        "gif": components.attributes.primary_data.gif.data.attributes.url,
                        "icon": components.attributes.primary_data.icon.data.attributes.url,
                        "name": components.attributes.primary.name,
                        "description": components.attributes.primary.description,
                        "reload": components.attributes.primary_data.reload
                    }]
                    this.secondary = [{
                        "gif": components.attributes.secondary_data.gif.data.attributes.url,
                        "icon": components.attributes.secondary_data.icon.data.attributes.url,
                        "name": components.attributes.secondary.name,
                        "description": components.attributes.secondary.description,
                        "reload": components.attributes.secondary_data.reload
                    }]
                    this.special = [{
                        "gif": components.attributes.special_data.gif.data.attributes.url,
                        "icon": components.attributes.special_data.icon.data.attributes.url,
                        "name": components.attributes.special.name,
                        "description": components.attributes.special.description,
                        "reload": components.attributes.special_data.reload
                    }]
                    for (let skinsIMG of components.attributes.skins_img) {
                        this.skins.url = skinsIMG.skins.data.attributes.url;
                    }
                    for (let skinsNAME of components.attributes.skins_name) {
                        this.skins.name = skinsNAME.skins_name
                    }
                    this.skins = components.attributes.skins_img.map((skin, index) => {
                        return {
                            url: skin.skins.data.attributes.url,
                            name: components.attributes.skins_name[index].skins_name
                        }
                    });
                }
            })
    },
    metaInfo() {
        return {
            title: this.nameOfStriker + " - " + this.$i18n.t('App.Nav.strikers') + " - " + this.$i18n.t('App.Title'),
            meta: [
                { vmid: 'description', name: 'description', content: this.$i18n.t('Strikers.meta') + this.nameOfStriker + this.$i18n.t('Strikers.meta2') + this.$i18n.t('App.Title') }
            ]
        }
    }
}
</script>