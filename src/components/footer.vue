<template>
    <footer>
        <language-switcher v-slot="{ links }">
			<router-link :to="link.url" v-for="link in links" :key="link.langIndex">
				<span>{{ link.langName }}</span>
			</router-link>
		</language-switcher>
    </footer>
</template>

<script>
export default {
    name: 'Footervue'
}
</script>

<style lang="scss">
footer {
    z-index: 5;
    background-color: #101d42;
    border-top: 0.3px solid rgba(0, 0, 0, 0.205);
}
</style>