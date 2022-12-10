<template>
    <div>
        <div class="ad-noborder">
            <ins class="adsbygoogle" :style="{ display: 'block' }" :data-ad-client="googleAdId" :data-ad-slot="slotter"
                data-ad-format="auto" data-full-width-responsive="true"></ins>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        className: String,
        slotter: String
    },
    data() {
        return {
            googleAdId: "ca-pub-2232424283250969"
        }
    },

}
</script>

<style>
.ad-border {
    padding: 10px;
    border: 1px solid #eee;
}

.ad-noborder {
    display: block;
    width: 500px;
    height: 100px;
    padding: 10px;
}
</style>