<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import SeoHead from '$lib/components/SeoHead.svelte';
    import { getMediaUrl } from '$lib/api/umbraco';
    let { data } = $props();

    const firstHeroImage = $derived(data.page.properties.heroImages?.[0]);
</script>

<SeoHead seo={data.page.properties} />

<svelte:head>
    {#if firstHeroImage}
        <link
            rel="preload"
            as="image"
            href={getMediaUrl(firstHeroImage.url)}
            fetchpriority="high"
        />
    {/if}
</svelte:head>

<Hero page={data.page} settings={data.settings} />