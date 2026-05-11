import { PUBLIC_UMBRACO_URL } from '$env/static/public';

const BASE_URL = `${PUBLIC_UMBRACO_URL}/umbraco/delivery/api/v2`;

/**
 * Hent et content-item via dets URL-path (fx "om")
 */
export async function getContentByPath(path: string, fetchFn: typeof fetch = fetch) {
    const url = `${BASE_URL}/content/item/${path}`;
    const res = await fetchFn(url);

    if (!res.ok) {
        throw new Error(`Failed to fetch content: ${res.status}`);
    }

    return res.json();
}

/**
 * Returnér fuld URL til et media-item
 */
export function getMediaUrl(relativeUrl: string): string {
    if (!relativeUrl) return '';
    return `${PUBLIC_UMBRACO_URL}${relativeUrl}`;
}