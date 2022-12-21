<template>
    <section id="WikiLayout">
        <div id="WikiLayout__content">
            <div id="WikiLayout__content__header">
                <div id="WikiLayout__content__header__title">
                    <img src="../assets/dossier.png">
                    <h1>{{ $t('Wiki.title') }}</h1>
                </div>
                <div id="WikiLayout__content__header__tab">
                    <localized-link v-for="tab in tabs" :to="'/wiki/' + tab " :key="tab" :class="['tab-button', { active: currentTab === tab }]"
                    @click="currentTab = tab">
                    <h2 v-if="tab == 'notes_de_mise_a_jour'">{{ $t('Wiki.patch') }}</h2>
                    <h2 v-if="tab == 'system_de_ranking'">{{ $t('Wiki.rank') }}</h2>
                    <h2 v-if="tab == 'arenes_maps'">{{ $t('Wiki.arenas') }}</h2>
                    <h2 v-if="tab == 'configuration_necessaire'">{{ $t('Wiki.config') }}</h2>
                    <h2 v-if="tab == 'comment_jouer'">{{ $t('Wiki.howtoplay') }}</h2>
                    </localized-link>
                </div>
            </div>
            <div id="WikiLayout__content__main">
                <router-view class="tab"/>
            </div>
        </div>
    </section>
</template>

<script>
import system_de_ranking from '../components/wiki/rank.vue'
import arenes_maps from '../components/wiki/maps.vue'
import notes_de_mise_a_jour from '../components/wiki/patchList.vue'
import configuration_necessaire from '../components/wiki/config.vue'
import comment_jouer from '../components/wiki/howtoplay.vue'

export default {
    components: {
        system_de_ranking,
        arenes_maps,
        notes_de_mise_a_jour,
        configuration_necessaire,
        comment_jouer 
    },
    data() {
        return {
            currentTab: 'notes_de_mise_a_jour',
            tabs: ['notes_de_mise_a_jour', 'system_de_ranking', 'arenes_maps', 'configuration_necessaire', 'comment_jouer']
        }
    }
}
</script>

<style lang="scss">
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
        background-color: #101D42;
        box-shadow: 0px 0px 60px 0px rgba(30, 61, 146, 0.644);
        width: 90%;
        border-radius: 10px;
        height: 90%;
        &__header {
            display: flex;
            background-color: #172a5f;
            height: 10%;
            border-top: 3px solid #1d367c;
            border-left: 3px solid #1d367c;
            border-right: 3px solid #1d367c;
            border-radius: 10px 10px 0px 0px;
            width: 100%;
            &__title {
                display: flex;
                align-items: center;
                column-gap: 5px;
                justify-content: center;
                width: 20%;
                & img {
                    width: 22px;
                }
                & h1 {
                    text-transform: uppercase;
                    font-style: italic;
                    font-size: 12px;
                }
            }
            &__tab {
                display: flex;
                width: 80%;
                align-items: center;
                background-color: #101D42;
                & .tab-button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #f5f5f5;
                    text-transform: uppercase;
                    background-color: #172a5f;
                    border: none;
                    width: 100%;
                    height: 100%;
                    & h2 {
                        font-size: 13px;
                        background-color: #1d367c;
                        padding: 5%;
                        border-radius: 10px;
                    }
                    &.router-link-active {
                        border-bottom: none !important;
                        background-color: #101D42;
                    }
                }
            }
        }
        &__main {
            display: flex;
            border-bottom: 3px solid #1d367c;
            border-left: 3px solid #1d367c;
            border-right: 3px solid #1d367c;
            border-radius: 0px 0px 10px 10px;
            height: 90%;
            width: 100%;
        }
    }
}
</style>