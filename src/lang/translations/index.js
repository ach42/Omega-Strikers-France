export default {
	en: {
		name: 'English',
		load: () => { return import('./en.json'); },
	},
	es: {
		name: 'Español',
		load: () => { return import('./es.json'); },
	},
	fr: {
		name: 'Français',
		load: () => { return import('./fr.json'); },
	},
};
