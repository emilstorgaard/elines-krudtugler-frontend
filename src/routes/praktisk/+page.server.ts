import { getContentByPath } from '$lib/api/umbraco';
import type { PracticalPage } from '$lib/types/practicalPage';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    const page = (await getContentByPath('praktisk', fetch)) as PracticalPage;

    return {
        page
    };
};