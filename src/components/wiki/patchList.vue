<template>
    <section id="patch">
        <div id="patch__list">
            <ul>
                <localized-link v-for="patch of patchs" v-bind:to="patch.to">
                {{ patch.title }}
                </localized-link>
            </ul>
        </div>
        <div id="patch__right">
            <router-view />
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
        align-items: center;
        width: 20%;
        row-gap: 1%;
        background-color: #172A5F;
        height: 100%;
        & ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            padding-top: 2%;
        }
        & a {
            display: flex;
            justify-content: center;
            padding: 3% 0% 3% 0%;
            margin: 2% 0% 2% 0%;
            background-color: #101D42;
            width: 90%;
            transform: skew(-5deg);
            align-items: center;

            &:hover {
                background-color: #1D367C;
            }
        }
    }
    &__right {
        display: flex;
        overflow-y: auto;
        overflow-x: hidden;
        width: 80%;
        height: 100%;
    }
}
</style>

<script>
export default {
    data() {
        return {
            patchs: [
                { title: this.$i18n.t('Patchs.5'), to: '/wiki/patch/5/patch-du-8-decembre-2022' },
                { title: this.$i18n.t('Patchs.4'), to: '/wiki/patch/4/patch-du-17-novembre-2022' },
                { title: this.$i18n.t('Patchs.3'), to: '/wiki/patch/3/patch-du-20-octobre-2022' },
                { title: this.$i18n.t('Patchs.2'), to: '/wiki/patch/2/patch-du-6-octobre-2022' },
                { title: this.$i18n.t('Patchs.1'), to: '/wiki/patch/1/patch-du-19-septembre-2022' }
            ]
        }
    },
    created() {
    
    }
}
</script>