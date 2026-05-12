import { getContentByPath } from '$lib/api/umbraco';
import type { GalleryPage } from '$lib/types/galleryPage';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    const page = (await getContentByPath('galleri', fetch)) as GalleryPage;

    return {
        page
    };
};