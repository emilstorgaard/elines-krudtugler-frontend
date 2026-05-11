import { getContentByPath } from '$lib/api/umbraco';
import type { AboutPage } from '$lib/types/aboutPage';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    const page = (await getContentByPath('om', fetch)) as AboutPage;

    return {
        page
    };
};