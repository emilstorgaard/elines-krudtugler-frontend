import { getContentByPath } from '$lib/api/umbraco';
import type { HomePage } from '$lib/types/homePage';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    const page = (await getContentByPath('forside', fetch)) as HomePage;

    // Shuffle hero images server-side so the preload always matches
    const images = page.properties.heroImages ?? [];
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    page.properties.heroImages = images;

    return {
        page
    };
};