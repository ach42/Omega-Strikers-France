<template>
    <section id="patch">
        <div id="patch__list">
            <a href="#" v-for="patch of patchs" @click="displayContent(patch.id)">
                {{ patch.title }}
            </a>
        </div>
        <div id="patch__content" v-html="content">
            
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
        width: 20%;
        background-color: #172A5F;
        height: 100%;
        & a {
            display: flex;
            padding: 1%;
            align-items: center;
            justify-content: center;
        }
    }
    &__content {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        width: 80%;
        height: 95%;
        & p {
            color: #f5f5f5;
            padding: 1%;
            font-size: 14px;
        }
        & h1 {
            padding: 1%;
        }
        & iframe {
            padding: 1%;
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
            content: null,
        }
    },
    created() {
        axios.get(`https://database.omegastrikers-france.fr/api/steam-news/1`)
        .then(resp => { let lastPatch = resp.data.data; this.content = marked(lastPatch.attributes["content"])})
    },
    methods: {
        displayContent(id) {
        axios.get(`https://database.omegastrikers-france.fr/api/steam-news/${id}`)
            .then(response => { let patchAPI = response.data.data; this.content = marked(patchAPI.attributes["content"])})
        }
    }
}
</script>