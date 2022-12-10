<template>
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2232424283250969" data-ad-slot="9506335294"
        data-ad-format="auto" data-full-width-responsive="true">
    </ins>
</template>

<script>
export default {
    name: 'Adsvue',
    mounted() {
        this.adsenseAddLoad();
    },
    methods: {
        adsenseAddLoad() {
            let inlineScript = document.createElement("script");
            inlineScript.type = "text/javascript";
            inlineScript.text = '(adsbygoogle = window.adsbygoogle || []).push({});'
            document.getElementsByTagName('body')[0].appendChild(inlineScript);
        }
    }
}
</script>