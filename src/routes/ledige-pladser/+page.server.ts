import { getContentByPath } from '$lib/api/umbraco';
import type { AvailabilityPage } from '$lib/types/availabilityPage';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    const page = (await getContentByPath('ledige-pladser', fetch)) as AvailabilityPage;

    return {
        page
    };
};