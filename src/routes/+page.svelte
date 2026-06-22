<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { mediaSrc, mediaSrcset } from '$lib/utils/media';
	let { data } = $props();

	const firstHeroImage = $derived(data.page.properties.heroImages?.[0]);
</script>

<SeoHead seo={data.page.properties} />

<svelte:head>
	{#if firstHeroImage}
		<link
			rel="preload"
			as="image"
			href={mediaSrc(firstHeroImage.url, 'hero')}
			imagesrcset={mediaSrcset(firstHeroImage.url, 'hero')}
			imagesizes="100vw"
			fetchpriority="high"
		/>
	{/if}
</svelte:head>

<Hero page={data.page} settings={data.settings} />