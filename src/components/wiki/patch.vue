<template>
    <div id="news">
    </div>
</template>


<script>
import axios from 'axios';
import bbCodeParser from 'js-bbcode-parser';
import BBCodeParser from 'js-bbcode-parser/src/index.js';

export default {
    created() {
        // Fetching strikers-all
        axios.get(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?key=52E6009875FC31C619516A1ED1C9FE04&appid=1869590`)
        .then(response => { for ( let newsitems of response.data.appnews.newsitems) { let newsparse = bbCodeParser.parse(newsitems.contents)} })
    },
        methods: {
            news() {
            this.$refs.news.innerHTML = newsparse;
            }
        }
}
</script>