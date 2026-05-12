<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import SeoHead from '$lib/components/SeoHead.svelte';
    import { getMediaUrl } from '$lib/api/umbraco';
    let { data } = $props();

    // Hent første hero-billede til preload (LCP-optimering)
    const firstHeroImage = $derived(data.page.properties.heroImages?.[0]);
</script>

<SeoHead seo={data.page.properties} />

<svelte:head>
    {#if firstHeroImage}
        <!-- Preload hero image for LCP optimization -->
        <link
            rel="preload"
            as="image"
            href={getMediaUrl(firstHeroImage.url)}
            fetchpriority="high"
        />
    {/if}
</svelte:head>

<Hero page={data.page} settings={data.settings} />