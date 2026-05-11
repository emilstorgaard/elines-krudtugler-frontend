<script lang="ts">
    import { getMediaUrl } from '$lib/api/umbraco';
    import type { SeoProperties } from '$lib/types/seo';

    let {
        seo
    }: {
        seo: SeoProperties;
    } = $props();

    const ogImage = $derived(seo?.ogImage?.[0]);
</script>


<svelte:head>
    <title>{seo.metaTitle}</title>
    <meta name="description" content={seo.metaDescription} />

    <meta property="og:title" content={seo.metaTitle} />
    <meta property="og:description" content={seo.metaDescription} />
    <meta property="og:type" content="website" />
    {#if ogImage}
        <meta property="og:image" content={getMediaUrl(ogImage.url)} />
    {/if}
</svelte:head>