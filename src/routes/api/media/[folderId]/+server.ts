import { json } from '@sveltejs/kit';
import { PUBLIC_UMBRACO_URL } from '$env/static/public';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, url }) => {
    const take = url.searchParams.get('take') ?? '24';
    const skip = url.searchParams.get('skip') ?? '0';

    const umbracoUrl = `${PUBLIC_UMBRACO_URL}/umbraco/delivery/api/v2/media?fetch=children:${params.folderId}&take=${take}&skip=${skip}`;

    const res = await fetch(umbracoUrl);

    if (!res.ok) {
        return json({ items: [], total: 0 });
    }

    const data = await res.json();
    return json(data, {
        headers: {
            'Cache-Control': 'public, max-age=300'
        }
    });
};