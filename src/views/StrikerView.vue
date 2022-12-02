<template>
    <div id="StrikerView"> 
        <section id="striker" v-for="striker of strikerAPI" v-if="striker.attributes['name'] == nameOfStriker">
            <section id="striker__left">
                <div id="striker__left__img">
                    <img v-bind:src="striker.attributes['img_url']">
                </div>
                <div id="striker__left__content">
                    <div id="striker__left__content__title">
                        <h1>{{striker.attributes['displayname']}}</h1>
                        <p>{{striker.attributes['subtitle']}}</p>
                        <span>{{$t('Strikers.difficulty')}}: {{striker.attributes['difficulty']}}</span>
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
                <div id="striker__right__content">
                    <div id="striker__right__bio">
                        <h1>{{$t('Strikers.lore')}}</h1>
                        <p>{{striker.attributes['bio1']}}</p>
                        <p>{{striker.attributes['bio2']}}</p>
                        <p>{{striker.attributes['bio3']}}</p>
                        <p>{{striker.attributes['bio4']}}</p>
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
        box-shadow: inset 0px 0px 270px 0px rgba(16,29,66,0.5);
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
                    width: 100%;
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
            justify-content: flex-end;
            align-items: center;
            flex-direction: column;
            width: 75%;
            background-color: #101d42;
            &__powers {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                width: 100%;
                height: 70%;
                transition: 1s;
            }
            &__content {
                display: flex;
                flex-direction: column;
                width: 100%;
                background-color: #101d42;
                height: 30%;
                transition: 1s;
            }
            &__bio {
                display: flex;
                flex-direction: column;
                margin-top: 1%;
                height: 50%;
                & p {
                    color: #fff;
                    padding: 1%;
                    background-color: #172A5F;
                    border-radius: 10px;
                    margin: 5px;
                    font-size: 14px;
                    margin-left: 2%;
                    margin-right: 2%;
                }
                & h1 {
                    font-style: italic;
                    margin-left: 2%;
                    margin-bottom: 1%;
                    text-transform: uppercase;
                    width: fit-content;
                }
            }
            &:hover #striker__right__powers {
                margin-top: -55%;
                transition: 1s;
                z-index: 0;
            }
            &:hover #striker__right__content {
                height: 100%;
                overflow-y: scroll;
                z-index: 1;
                transition: 1s;
            }
        }
    }
    .powers {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        align-items: center;
        width: 33%;
        &__gif {
            display: flex;
            justify-content: center;
            align-items: center;
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
            height: 200px;
            background-color: #172A5F;
            border-radius: 0px 0px 10px 10px;
            &__img {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                margin-top: -30px;
                &__bg {
                    position: absolute;
                    width: 65px;
                    z-index: 1;
                }
                &__top {
                    width: 40px;
                    margin-top: 12.5px;
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
                }
                & p {
                    font-weight: 600;
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
</style>
    
<script>
    import axios from 'axios';
    
    export default {
        data() {
            return {
                strikerAPI : []
            }
        },
        // language api calls
        created() {
            let url = window.location.pathname
            let getStriker = url.substring(url.lastIndexOf("/") + 1)
            this.nameOfStriker = getStriker;
    
            const i18nlang = this.$i18n.locale
            let lang;
            languagesClient()
            function languagesClient() {
            if(
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
            .then(response => { this.strikerAPI = response.data.data})
        }
    }
    </script>