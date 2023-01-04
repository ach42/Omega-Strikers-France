<template>
    <section id="patch">
        <div id="patch__list">
            <ul>
                <localized-link v-for="patch of patchs" v-bind:style="'border : 3px solid ' + patch.color" v-bind:to="patch.to">
                <span v-bind:style="'background-color: ' + patch.color">{{ patch.icon }}</span>
                <h3>{{ patch.title }}</h3>
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
            justify-content: space-around;
            column-gap: 10px;
            padding: 3% 2% 3% 2%;
            margin: 2% 0% 2% 0%;
            font-weight: 600;
            text-transform: uppercase;
            box-shadow: inset 0px 0px 45px 0px rgba(0,0,0,0.25);
            width: 90%;
            border-radius: 10px;
            align-items: center;
            & h3 {
                font-size: 14px;
            }
            & span {
                display: flex;
                align-items: center;
                justify-content: center;
                width: fit-content;
                padding: 3px 6px 3px 6px;
                border-radius: 5px;
                font-size: 12px;
            }
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

@media screen and (max-width: 1620px) {
    
}
@media screen and (max-width: 1420px) {
    #patch__list {
        width: 30%;
    }
}
@media screen and (max-width: 1030px) {
    #patch__list {
        width: 40%;
    }
}
@media screen and (max-width: 800px) {
    #patch {
       flex-direction: column;
    }
    #patch__list {
        width: 100%;
        height: 10%;
        background-color: #101D42;
    }
    #patch__list ul {
        flex-direction: row;
        padding-top: 0%;
        white-space: nowrap;
        overflow-y: hidden;
        overflow-x: scroll;
    }
    #patch__list a {
        display: inline-flex;
        padding: 5px;
        margin-left: 10px;
    }
    #patch__right {
        width: 100%;
    }
}

</style>

<script>
export default {
    data() {
        return {
            patchs: [
                { title: this.$i18n.t('Patchs.6'), to: '/wiki/Patch/6/Quand-omega-strikers-reviendra', color : '#E82335', icon : '01/04/2023'},
                { title: this.$i18n.t('Patchs.5'), to: '/wiki/Patch/5/Patch-du-8-decembre-2022', color : '#D95628', icon : '08/12/2022'},
                { title: this.$i18n.t('Patchs.4'), to: '/wiki/Patch/4/Patch-du-17-novembre-2022', color : '#E21985', icon : '17/11/2022'},
                { title: this.$i18n.t('Patchs.3'), to: '/wiki/Patch/3/Patch-du-20-octobre-2022', color : '#7451B7', icon : '20/10/2022' },
                { title: this.$i18n.t('Patchs.2'), to: '/wiki/Patch/2/Patch-du-6-octobre-2022', color : '#F45A8C', icon : '06/10/2022' },
                { title: this.$i18n.t('Patchs.1'), to: '/wiki/Patch/1/Patch-du-19-septembre-2022', color : '#4DCEB2', icon : '19/09/2022'}
            ]
        }
    },
    metaInfo() {
        let url = document.location.href;
        let urlTitle= url.split('/').pop();
        urlTitle= urlTitle.replace(/-/g, ' ');
        return {
            title: urlTitle + " - " + this.$i18n.t('App.Title'),
            meta: [
                { vmid: 'description', name: 'description', content: this.$i18n.t('Wiki.PatchMeta') + urlTitle + this.$i18n.t('App.Title') }
            ]
        }
    }
}
</script>