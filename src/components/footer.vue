<template>
    <footer>
        <language-switcher id="lang" v-slot="{ links }">
			<router-link :to="link.url" v-for="link in links" :key="link.langIndex">
				<span>{{ link.langName }}</span>
			</router-link>
		</language-switcher>
        <div id="odyssey">
            <span>{{ $t('App.Footer.odyssey') }}</span>
            <a href="https://www.odysseyinteractive.gg/">Odyssey Interactive</a>
        </div>
        <div id="croissant">
            <span>{{ $t('App.Footer.croissant') }}</span>
            <a href="https://discordapp.com/users/918962192127246336">
                <p>{{ $t('App.Footer.42') }}</p>
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footervue'
}
</script>

<style lang="scss">
footer {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    z-index: 5;
    background-color: #101d42;
    border-top: 0.3px solid rgba(0, 0, 0, 0.205);
    & #lang {
        display: flex;
        column-gap: 3px;
        font-size: 9px;
        margin-left: 10px;
        & a {
            color: #f5f5f5cc;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    & #odyssey {
        display: flex;
        align-items: center;
        column-gap: 3px;
        font-size: 11px;
        color: #f5f5f5cc;
        & a {
            text-decoration: underline;
            color: #f5f5f5cc;
        }
    }
    & #croissant {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: #f5f5f5cc;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        margin-right: 10px;
        & span {
            
        }
        & a {
            color: #f5f5f5cc;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>