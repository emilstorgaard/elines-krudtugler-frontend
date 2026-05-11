import { getContentByPath } from '$lib/api/umbraco';
import type { Settings } from '$lib/types/settings';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
    const settings = (await getContentByPath('indstillinger', fetch)) as Settings;

    return {
        settings
    };
};