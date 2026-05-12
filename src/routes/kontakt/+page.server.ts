import { getContentByPath } from '$lib/api/umbraco';
import type { ContactPage } from '$lib/types/contactPage';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    const page = (await getContentByPath('kontakt', fetch)) as ContactPage;

    return {
        page
    };
};