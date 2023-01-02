<template>
    <section id="WikiLayout">
        <div id="WikiLayout__content">
            <div id="WikiLayout__content__header">
                <div id="WikiLayout__content__header__title">
                    <h1>{{ $t('Wiki.title') }}</h1>
                </div>
                <div id="WikiLayout__content__header__tab">
                    <localized-link v-for="tab in tabs" :to="'/wiki/' + tab " :key="tab" :class="['tab-button', { active: currentTab === tab }]"
                    @click="currentTab = tab">
                    <h2 v-if="tab == 'patch'">{{ $t('Wiki.patch') }}</h2>
                    <h2 v-if="tab == 'rank'">{{ $t('Wiki.rank') }}</h2>
                    <h2 v-if="tab == 'maps'">{{ $t('Wiki.arenas') }}</h2>
                    </localized-link>
                </div>
            </div>
            <div id="WikiLayout__content__main">
                <preloader />
                <router-view class="tab"/>
            </div>
        </div>
    </section>
</template>

<script>
import preloader from '../components/preloader.vue'
import rank from '../components/wiki/rank.vue'
import maps from '../components/wiki/maps.vue'
import patch from '../components/wiki/patchList.vue'

export default {
    components: {
        preloader,
        rank,
        maps,
        patch,
    },
    data() {
        return {
            currentTab: 'patch',
            tabs: ['patch', 'rank', 'maps']
        }
    },
    metaInfo() {
        return {
            title: this.$i18n.t('Wiki.title') + " - " + this.$i18n.t('App.Title'),
            meta: [
                { vmid: 'description', name: 'description', content: this.$i18n.t('Wiki.meta') + this.$i18n.t('App.Title') }
            ]
        }
    }
}
</script>

<style lang="scss">

#WikiLayout__content__main .preloader {
    width: 100%;
    height: 95%;
    border-radius: 0px 0px 10px 10px;
}
#WikiLayout {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #101d42cb;
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0px 0px 60px 0px rgba(30, 61, 146, 0.644);
        width: 100%;
        height: 100%;
        &__header {
            display: flex;
            height: 7%;
            width: 100%;
            &__title {
                display: flex;
                background-color: #101D42;
                align-items: center;
                column-gap: 5px;
                justify-content: center;
                width: 20%;
                & img {
                    width: 35px;
                    padding-left: 10%;
                }
                & h1 {
                    display: flex;
                    flex-wrap: wrap;
                    text-align: center;
                    width: 60%;
                    text-transform: uppercase;
                    font-style: italic;
                    font-size: 18px;
                }
            }
            &__tab {
                display: flex;
                width: 80%;
                align-items: center;
                & .tab-button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #f5f5f5;
                    background-color: #1D367C;
                    text-transform: uppercase;
                    border: none;
                    width: 100%;
                    height: 100%;
                    & h2 {
                        font-size: 13px;
                        padding: 3%;
                        border-radius: 10px;
                        &:hover {
                        transition: 0.3s ease-in;
                        background-color: #101D42;
                    }
                    }
                    &.router-link-active {
                        box-shadow: none;
                        background-color: #101D42;
                    }
                }
            }
        }
        &__main {
            display: flex;
            background-color: #101D42;
            height: 93%;
            width: 100%;
        }
    }
}

@media screen and (max-width: 1620px) {
    #WikiLayout__content__header__title h1 {
        font-size: 15px;
    }
}
@media screen and (max-width: 1420px) {
    #WikiLayout__content__header__title h1 {
        font-size: 13px;
    }
    #WikiLayout__content__header__title {
        width: 30%;
    }
}
@media screen and (max-width: 1030px) {
    #WikiLayout__content__header__title {
        width: 40%;
    }
}
@media screen and (max-width: 840px) {
}
</style>