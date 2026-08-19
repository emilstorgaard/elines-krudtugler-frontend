import { getContentByPath } from '$lib/api/umbraco';
import type { Settings } from '$lib/types/settings';
import type { ErrorPage } from '$lib/types/errorPage';
import type { ContactPage } from '$lib/types/contactPage';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	const [settings, errorPage, contactPage] = await Promise.all([
		getContentByPath('indstillinger', fetch).then((d) => d as Settings),
		getContentByPath('fejlside', fetch)
			.then((d) => d as ErrorPage)
			.catch(() => null),
		getContentByPath('kontakt', fetch)
			.then((d) => d as ContactPage)
			.catch(() => null)
	]);

	return {
		settings,
		errorPage,
		contactPage
	};
};
