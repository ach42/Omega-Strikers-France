<template>
    <aside>
    <section id="discord" v-if="discordAPI">
        <div id="discord__steam">
            <span v-for="players of NmbOfPlayers">{{players.count}}</span>
            <p>{{$t('App.Discord.steam_online')}}</p>
        </div>
        <div id="discord__count">
            <span>{{discordAPI.presence_count}}</span>
            <p>{{$t('App.Discord.members_online')}}</p>
        </div>
        <div id="discord__cta">
            <a v-bind:href="$t('App.Discord.link')"><img src="../assets/discord-mark-white.svg">{{$t('App.Discord.join')}}</a>
        </div>
        <div id="discord__list">
            <div id="discord__list__block" v-for="members of discordAPI.members">
                <div id="discord__list__block__online" v-if="(members.status == CheckOnline && members.username != '[Adri] Chapeau' && members.username != 'DraftBot' && members.username != 'Discord.Me' && members.username != 'DISBOARD')">
                    <div id="discord__list__card">    
                        <a v-bind:href="discordAPI.instant_invite">
                        <img v-bind:src="members.avatar_url">
                        <div>
                            <span>{{members.username}}</span>
                            <span>{{ $t('App.Discord.online') }}</span>
                        </div>
                        </a>
                    </div>
                </div>
                <div id="discord__list__block__dnd" v-if="(members.status == CheckDnd  && members.username != '[Adri] Chapeau')">
                    <div id="discord__list__card">    
                        <a v-bind:href="discordAPI.instant_invite">
                        <img v-bind:src="members.avatar_url">
                        <div>
                            <span>{{members.username}}</span>
                            <span>{{ $t('App.Discord.dnd') }}</span>
                        </div>
                        </a>
                    </div>
                </div>
                <div id="discord__list__block__idle" v-if="(members.status == CheckIdle  && members.username != '[Adri] Chapeau')">
                    <div id="discord__list__card">    
                        <a v-bind:href="discordAPI.instant_invite">
                        <img v-bind:src="members.avatar_url">
                        <div>
                            <span>{{members.username}}</span>
                            <span>{{ $t('App.Discord.idle') }}</span>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </aside>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            discordAPI: [],
            CheckOnline : ["online"],
            CheckDnd : ["dnd"],
            CheckIdle : ["idle"],
            NmbOfPlayers : []
        }
    },
    created() {
    // language api calls
    axios.get("https://discordapp.com/api/guilds/1026604059580448875/widget.json")
    .then(resp =>{this.discordAPI = resp.data})
    
    axios.get("https://count.omegastrikers-france.fr/players")
    .then(response =>{this.NmbOfPlayers = response.data})
    }
}
</script>

<style lang="scss">
#discord {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #101d42;
    &__steam {
        display: flex;
        backdrop-filter: blur(5px);
        width: 100%;
        height: 3.25%;
        & span {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 17px;
            background-color: #E82335;
            width: 30%;
            font-family: 'made_outer';
        }
        & p {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #101D42;
            font-weight: 400;
            font-size: 13px;
            color: #fff;
            width: 70%;
        }
    }
    &__count {
        display: flex;
        height: 3.25%;
        width: 100%;
        backdrop-filter: blur(5px);
        & span {
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'made_outer';
            background-color: #3BA55C;
            font-size: 17px;
            color: #fff;
            width: 30%;
        }
        & p {
            display: flex;
            justify-content: center;
            font-size: 13px;
            font-weight: 400;
            background-color: #172A5F;
            width: 70%;
            align-items: center;
            color: #fff;
        }
    }
    &__cta {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        height: 5%;
        background-color: #5865F2;
        & a {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 10px;
            font-size: 12px;
            width: 100%;
            height: 100%;
            transition: 0.3s;
            &:hover {
                transition: 0.3s;
                box-shadow: 0px 0px 9px 0px rgba(88,101,242,1)
            }
        }
        & img {
            width: 22px;
            height: 22px;
            background-color: #5865F2;
            padding: 5px;
            border-radius: 5px;
        }
    }
    &__list {
        display: flex;
        flex-direction: column;
        box-shadow: inset 0px -8px 20px 0px rgb(0 0 0 / 40%);
        align-items: center;
        width: 100%;
        height: 85%;
        backdrop-filter: blur(5px);
        overflow-y: hidden;
        &:hover {
            overflow-y: scroll;
        }
        &__card {
            width: 100%;
            margin-top: 10px;
        }
        &__block {
            width: 90%;
            margin-right: 5%;
            height: 100%;
            display: flex;
            flex-direction: column;
            & img {
                width: 30px;
                height: 30px;
                border-radius: 25px;
            }
            & a {
                display: flex;
                align-items: center;
                column-gap: 5px;
                font-size: 12px;
                padding: 3px 5px 3px 5px;
                background-color: #172A5F;
                color: #fff;
                width: 100%;
                height: 100%;
                border-radius: 5px;
                &:hover {
                    background-color: #1d367c;
                }
            }
            &__online {
                display: flex;
                justify-content: center;
                & div {
                    display: flex;
                    flex-direction: column;
                }
            }
            &__dnd {
                display: flex;
                justify-content: center;
                & div {
                    display: flex;
                    flex-direction: column;
                }
            }
            &__idle {
                display: flex;
                justify-content: center;
                & div {
                    display: flex;
                    flex-direction: column;
                }
            }
        }
    }
}
@media screen and (max-width: 1600px) {
    #discord__steam p {
        font-size: 10px;
    }
    #striker__left__content__title {
        text-align: center;
    }
    #striker__left__content__title h1 {
        font-size: 25px !important;
    }
    #discord__count p {
        font-size: 10px;
    }
    #discord__cta a {
        font-size: 10px;
    }
    #discord__list__block a {
        margin-left: 1px;
        width: 98%;
        font-size: 10px;
    }
}

</style>