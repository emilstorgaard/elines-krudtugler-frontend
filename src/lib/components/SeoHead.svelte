<script lang="ts">
	import { page } from '$app/state';
	import { mediaSrc } from '$lib/utils/media';
	import type { SeoProperties } from '$lib/types/seo';

	const SITE_URL = 'https://elineskrudtugler.dk';

	let { seo }: { seo: SeoProperties } = $props();

	const ogImage = $derived(seo?.ogImage?.[0]);
	const ogImageUrl = $derived(ogImage ? mediaSrc(ogImage.url, 'og', 'jpg') : '');
	const canonicalUrl = $derived(`${SITE_URL}${page.url.pathname}`);
</script>

<svelte:head>
	<title>{seo.metaTitle}</title>
	<meta name="description" content={seo.metaDescription} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={seo.metaTitle} />
	<meta property="og:description" content={seo.metaDescription} />
	<meta property="og:image:alt" content="Elines Krudtugler" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={seo.metaTitle} />
	<meta name="twitter:description" content={seo.metaDescription} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta name="twitter:image:alt" content="Elines Krudtugler" />

	{#if ogImage}
		<meta property="og:image" content={ogImageUrl} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
	{/if}
</svelte:head>
