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