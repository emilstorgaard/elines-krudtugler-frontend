import { getContentByPath } from '$lib/api/umbraco';
import type { WeekdayPage } from '$lib/types/weekdayPage';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    const page = (await getContentByPath('hverdagen', fetch)) as WeekdayPage;

    return {
        page
    };
};